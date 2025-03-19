"use client"

import { useState, useEffect, useRef } from "react"
import { SimplifiedBookViewer } from "@/components/simplified-book"
import { BookViewer2D } from "@/components/book-viewer-2d"
import { ChatInterface } from "@/components/chat-interface"
import { Button } from "@/components/ui/button"
import { SuggestedQuestions } from "@/components/suggested-questions"
import { WelcomeModal } from "@/components/welcome-modal"
import { AudioPlayer } from "@/components/audio-player"
import { TrainingInfo } from "@/components/training-info"
import { BookOpen, MessageSquare, Settings } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export default function Home() {
  const [view, setView] = useState<"3d-book" | "2d-book" | "chat">("3d-book")
  const [loading, setLoading] = useState(true)
  const [showWelcome, setShowWelcome] = useState(true)
  const [showTrainingInfo, setShowTrainingInfo] = useState(false)
  const chatInputRef = useRef<HTMLInputElement>(null)
  const sendMessageRef = useRef<(message: string) => void>(null)

  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    // Check if user has visited before
    const hasVisited = localStorage.getItem("hasVisitedGitaApp")
    if (hasVisited) {
      setShowWelcome(false)
    } else {
      localStorage.setItem("hasVisitedGitaApp", "true")
    }

    return () => clearTimeout(timer)
  }, [])

  const handleSelectQuestion = (question: string) => {
    if (chatInputRef.current) {
      chatInputRef.current.value = question
      chatInputRef.current.focus()
    }
  }

  const handleSendMessage = (sendFn: (message: string) => void) => {
    sendMessageRef.current = sendFn
  }

  const sendMessage = (message: string) => {
    if (sendMessageRef.current) {
      sendMessageRef.current(message)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-amber-950 to-slate-900">
        <h1 className="text-4xl font-bold text-center text-amber-300 mb-8">Shrimad Bhagavad Gita</h1>
        <div className="w-16 h-16 border-4 border-amber-600 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-amber-400">Loading divine wisdom...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-950 to-slate-900 p-4 md:p-8">
      {showWelcome && <WelcomeModal onClose={() => setShowWelcome(false)} />}

      <div className="container mx-auto">
        <header className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left text-amber-300">
            Shrimad Bhagavad Gita
          </h1>

          <div className="flex items-center gap-2">
            <Dialog open={showTrainingInfo} onOpenChange={setShowTrainingInfo}>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="bg-amber-900/30 border-amber-700 text-amber-300 hover:bg-amber-800/50"
                >
                  <Settings className="mr-2 h-4 w-4" /> Training Guide
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-transparent border-none p-0">
                <TrainingInfo />
              </DialogContent>
            </Dialog>
          </div>
        </header>

        <main>
          {view === "3d-book" && (
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="w-full lg:w-2/3 flex flex-col items-center justify-center">
                <div className="w-full md:w-4/5 lg:w-full">
                  <SimplifiedBookViewer onOpenBook={() => setView("2d-book")} />
                </div>
                <div className="mt-6 flex justify-center gap-4">
                  <Button
                    onClick={() => setView("2d-book")}
                    className="bg-amber-700 hover:bg-amber-600 text-white px-6 py-6 text-lg"
                    size="lg"
                  >
                    <BookOpen className="mr-2 h-5 w-5" /> Open Book
                  </Button>
                  <Button onClick={() => setView("chat")} className="bg-amber-600 hover:bg-amber-500 text-white">
                    <MessageSquare className="mr-2 h-4 w-4" /> Open Chatbot
                  </Button>
                </div>
              </div>

              <div className="w-full lg:w-1/3 mt-6 lg:mt-0">
                <AudioPlayer />
              </div>
            </div>
          )}

          {view === "2d-book" && (
            <div className="h-[80vh] bg-amber-950/30 rounded-lg shadow-xl border border-amber-800/30 overflow-hidden">
              <BookViewer2D onClose={() => setView("3d-book")} onOpenChatbot={() => setView("chat")} />
            </div>
          )}

          {view === "chat" && (
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="w-full lg:w-2/3">
                <ChatInterface inputRef={chatInputRef} onSendMessage={handleSendMessage} />
                <SuggestedQuestions onSelectQuestion={handleSelectQuestion} sendMessage={sendMessage} />
                <div className="mt-4 flex justify-center">
                  <Button onClick={() => setView("3d-book")} className="bg-amber-600 hover:bg-amber-500 text-white">
                    <BookOpen className="mr-2 h-4 w-4" /> View Sacred Book
                  </Button>
                </div>
              </div>

              <div className="w-full lg:w-1/3 mt-6 lg:mt-0">
                <AudioPlayer />
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

