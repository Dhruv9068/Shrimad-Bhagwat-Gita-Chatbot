"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, MessageSquare, Music, Info } from "lucide-react"

interface WelcomeModalProps {
  onClose: () => void
}

export function WelcomeModal({ onClose }: WelcomeModalProps) {
  const [activeTab, setActiveTab] = useState("welcome")

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-3xl">
        <CardHeader className="bg-amber-900/50 rounded-t-lg">
          <CardTitle className="text-2xl text-amber-300 text-amber-300">Welcome to Shrimad Bhagavad Gita</CardTitle>
          <CardDescription className="text-amber-400 text-amber-400">
            Explore the divine wisdom of the sacred text
          </CardDescription>
        </CardHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-4 w-full">
            <TabsTrigger value="welcome" className="flex items-center gap-2">
              <Info className="h-4 w-4" /> Welcome
            </TabsTrigger>
            <TabsTrigger value="book" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" /> 3D Book
            </TabsTrigger>
            <TabsTrigger value="chat" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" /> Chatbot
            </TabsTrigger>
            <TabsTrigger value="audio" className="flex items-center gap-2">
              <Music className="h-4 w-4" /> Audio
            </TabsTrigger>
          </TabsList>

          <TabsContent value="welcome" className="p-4">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-amber-300 text-amber-300">
                Discover the Timeless Wisdom of the Bhagavad Gita
              </h3>
              <p className="text-amber-400 text-amber-400">
                The Bhagavad Gita, often referred to as the Gita, is a 700-verse Hindu scripture that is part of the
                epic Mahabharata. It contains a conversation between Arjuna and Lord Krishna on a variety of
                philosophical issues.
              </p>
              <p className="text-amber-400 text-amber-400">
                This interactive application allows you to explore the sacred text through a 3D book visualization,
                engage with its teachings through an intelligent chatbot, and immerse yourself in spiritual sounds with
                the audio player.
              </p>
              <div className="bg-amber-900/30 p-4 rounded-lg">
                <h4 className="font-medium text-amber-300 text-amber-300 mb-2">Features:</h4>
                <ul className="list-disc pl-5 space-y-1 text-amber-400 text-amber-400">
                  <li>Interactive 3D book with all 18 chapters</li>
                  <li>Intelligent chatbot to answer your questions</li>
                  <li>Sanskrit verses with translations and explanations</li>
                  <li>Meditation audio with sacred mantras</li>
                  <li>Dark mode support for comfortable reading</li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="book" className="p-4">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-amber-300 text-amber-300">Exploring the 3D Book</h3>
              <p className="text-amber-400 text-amber-400">
                The 3D book visualization allows you to experience the Bhagavad Gita in a tangible way. You can navigate
                through all 18 chapters and read the sacred verses with their translations and explanations.
              </p>
              <div className="bg-amber-900/30 p-4 rounded-lg">
                <h4 className="font-medium text-amber-300 text-amber-300 mb-2">How to use:</h4>
                <ul className="list-disc pl-5 space-y-1 text-amber-400 text-amber-400">
                  <li>Use the navigation buttons to move between chapters</li>
                  <li>The first page shows the table of contents</li>
                  <li>Each chapter includes Sanskrit verses, transliterations, and explanations</li>
                  <li>The book animates as you navigate through the chapters</li>
                  <li>Click "Open Chatbot" to switch to the chat interface</li>
                </ul>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="chat" className="p-4">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-amber-300 text-amber-300">Interacting with the Chatbot</h3>
              <p className="text-amber-400 text-amber-400">
                The Bhagavad Gita chatbot is designed to help you explore the teachings of the sacred text. You can ask
                questions about specific chapters, concepts, verses, or seek guidance on applying the Gita's wisdom in
                your life.
              </p>
              <div className="bg-amber-900/30 p-4 rounded-lg">
                <h4 className="font-medium text-amber-300 text-amber-300 mb-2">Sample questions you can ask:</h4>
                <ul className="list-disc pl-5 space-y-1 text-amber-400 text-amber-400">
                  <li>What is the main message of the Bhagavad Gita?</li>
                  <li>Tell me about Lord Krishna</li>
                  <li>What is Karma Yoga?</li>
                  <li>Explain the concept of dharma</li>
                  <li>What does the Gita say about meditation?</li>
                  <li>What are the three gunas?</li>
                </ul>
              </div>
              <p className="text-amber-400 text-amber-400">
                You can also use the suggested questions below the chat interface for quick access to common topics.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="audio" className="p-4">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-amber-300 text-amber-300">Sacred Audio Experience</h3>
              <p className="text-amber-400 text-amber-400">
                Enhance your spiritual journey with sacred mantras and chants. The audio player allows you to listen to
                Om chanting, the Hare Krishna Maha Mantra, and recitations of the Bhagavad Gita while you explore the
                text or engage with the chatbot.
              </p>
              <div className="bg-amber-900/30 p-4 rounded-lg">
                <h4 className="font-medium text-amber-300 text-amber-300 mb-2">Available tracks:</h4>
                <ul className="list-disc pl-5 space-y-1 text-amber-400 text-amber-400">
                  <li>Om Chanting - Sacred Om mantra for meditation</li>
                  <li>Hare Krishna Maha Mantra - The great mantra for the age of Kali</li>
                  <li>Bhagavad Gita Recitation - Sanskrit recitation of selected verses</li>
                </ul>
              </div>
              <p className="text-amber-400 text-amber-400">
                Use the audio controls to play, pause, adjust volume, or mute the sound. The audio can help create a
                more immersive and meditative experience as you explore the divine wisdom of the Bhagavad Gita.
              </p>
            </div>
          </TabsContent>
        </Tabs>

        <CardFooter className="flex justify-between bg-amber-900/20 rounded-b-lg">
          <Button
            variant="outline"
            onClick={() => {
              const nextTab = {
                welcome: "book",
                book: "chat",
                chat: "audio",
                audio: "close",
              }[activeTab]

              if (nextTab === "close") {
                onClose()
              } else {
                setActiveTab(nextTab)
              }
            }}
            className="border-amber-700 border-amber-700"
          >
            {activeTab === "audio" ? "Get Started" : "Next"}
          </Button>
          <Button onClick={onClose} className="bg-amber-600 hover:bg-amber-700 bg-amber-700 hover:bg-amber-600">
            Skip Introduction
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

