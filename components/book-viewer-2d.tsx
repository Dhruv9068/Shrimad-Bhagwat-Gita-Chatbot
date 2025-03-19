"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Home, Menu, ArrowLeft } from "lucide-react"
import { ChapterContent } from "@/components/chapter-content"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

const chapters = [
  { number: 1, title: "Arjuna Vishada Yoga", subtitle: "The Yoga of Arjuna's Grief" },
  { number: 2, title: "Sankhya Yoga", subtitle: "The Yoga of Knowledge" },
  { number: 3, title: "Karma Yoga", subtitle: "The Yoga of Action" },
  { number: 4, title: "Jnana Yoga", subtitle: "The Yoga of Knowledge" },
  { number: 5, title: "Karma Sanyasa Yoga", subtitle: "The Yoga of Renunciation" },
  { number: 6, title: "Dhyana Yoga", subtitle: "The Yoga of Meditation" },
  { number: 7, title: "Jnana Vijnana Yoga", subtitle: "The Yoga of Knowledge and Wisdom" },
  { number: 8, title: "Aksara Brahma Yoga", subtitle: "The Yoga of the Imperishable Brahman" },
  { number: 9, title: "Raja Vidya Yoga", subtitle: "The Yoga of Royal Knowledge" },
  { number: 10, title: "Vibhuti Yoga", subtitle: "The Yoga of Divine Manifestations" },
  { number: 11, title: "Vishvarupa Darshana Yoga", subtitle: "The Yoga of the Universal Form" },
  { number: 12, title: "Bhakti Yoga", subtitle: "The Yoga of Devotion" },
  { number: 13, title: "Kshetra Kshetrajna Vibhaga Yoga", subtitle: "The Yoga of the Field and its Knower" },
  { number: 14, title: "Gunatraya Vibhaga Yoga", subtitle: "The Yoga of the Three Gunas" },
  { number: 15, title: "Purushottama Yoga", subtitle: "The Yoga of the Supreme Person" },
  { number: 16, title: "Daivasura Sampad Vibhaga Yoga", subtitle: "The Yoga of Divine and Demonic Qualities" },
  { number: 17, title: "Shraddhatraya Vibhaga Yoga", subtitle: "The Yoga of the Three Types of Faith" },
  { number: 18, title: "Moksha Sanyasa Yoga", subtitle: "The Yoga of Liberation through Renunciation" },
]

interface BookViewer2DProps {
  onClose: () => void
  onOpenChatbot: () => void
  initialPage?: number
}

export function BookViewer2D({ onClose, onOpenChatbot, initialPage = 0 }: BookViewer2DProps) {
  const [currentPage, setCurrentPage] = useState(initialPage)
  const [showTwoPages, setShowTwoPages] = useState(false)
  const totalPages = chapters.length + 1 // +1 for table of contents

  // Check screen width to determine if we should show two pages
  useEffect(() => {
    const checkWidth = () => {
      setShowTwoPages(window.innerWidth >= 1024)
    }

    checkWidth()
    window.addEventListener("resize", checkWidth)
    return () => window.removeEventListener("resize", checkWidth)
  }, [])

  // Get the next page for two-page view
  const getNextPage = () => {
    if (currentPage === 0) return null // Table of contents is always single page
    const nextPageNum = currentPage + 1
    return nextPageNum <= chapters.length ? nextPageNum : null
  }

  // Handle page navigation
  const goToPage = (pageNum: number) => {
    if (pageNum >= 0 && pageNum <= totalPages - 1) {
      setCurrentPage(pageNum)
    }
  }

  // Get chapter title for the current page
  const getPageTitle = (pageNum: number) => {
    if (pageNum === 0) return "Table of Contents"
    return `Chapter ${pageNum}: ${chapters[pageNum - 1].title}`
  }

  return (
    <div className="w-full h-full flex flex-col">
      {/* Header with navigation */}
      <div className="bg-gradient-to-r from-amber-900 to-amber-800 p-3 rounded-t-lg flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="text-amber-300 hover:text-amber-200 hover:bg-amber-800/50 border-amber-700"
            onClick={onClose}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to 3D View
          </Button>

          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="bg-amber-800/50 border-amber-700 text-amber-300"
              onClick={() => goToPage(0)}
            >
              <Home className="mr-2 h-4 w-4" /> Contents
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="bg-amber-800/50 border-amber-700 text-amber-300"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 0}
            >
              <ChevronLeft className="mr-1 h-4 w-4" /> Previous
            </Button>

            <Button
              variant="outline"
              size="sm"
              className="bg-amber-800/50 border-amber-700 text-amber-300"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages - 1}
            >
              Next <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="default"
            size="sm"
            className="bg-amber-600 hover:bg-amber-500 text-white"
            onClick={onOpenChatbot}
          >
            Open Chatbot
          </Button>

          {/* Mobile chapter menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="bg-amber-800/50 border-amber-700">
                  <Menu className="h-4 w-4 text-amber-300" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-amber-950 border-amber-800 text-amber-100">
                <SheetHeader>
                  <SheetTitle className="text-amber-300">Chapters</SheetTitle>
                </SheetHeader>
                <div className="mt-4 space-y-1 overflow-y-auto max-h-[80vh]">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-amber-300 hover:bg-amber-900 hover:text-amber-200"
                    onClick={() => goToPage(0)}
                  >
                    Table of Contents
                  </Button>
                  {chapters.map((chapter) => (
                    <Button
                      key={chapter.number}
                      variant="ghost"
                      className="w-full justify-start text-amber-300 hover:bg-amber-900 hover:text-amber-200"
                      onClick={() => goToPage(chapter.number)}
                    >
                      {chapter.number}. {chapter.title}
                    </Button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Book content */}
      <div className="flex-grow overflow-hidden bg-amber-950/30 rounded-b-lg">
        <div className="h-full flex flex-col md:flex-row">
          {/* Current page */}
          <div className={`h-full ${showTwoPages ? "w-1/2 border-r border-amber-800/50" : "w-full"}`}>
            <div className="h-full flex flex-col">
              <div className="bg-amber-900/50 p-2 text-center border-b border-amber-800/50">
                <h2 className="text-amber-300 font-semibold">{getPageTitle(currentPage)}</h2>
              </div>
              <div className="flex-grow overflow-y-auto p-4 bg-amber-50 dark:bg-amber-900/80 text-amber-950 dark:text-amber-100">
                {currentPage === 0 ? (
                  <div className="space-y-4">
                    <h1 className="text-3xl font-bold text-center text-amber-800 dark:text-amber-300 mb-6">
                      Table of Contents
                    </h1>
                    <div className="grid grid-cols-1 gap-3">
                      {chapters.map((chapter) => (
                        <Card
                          key={chapter.number}
                          className="border-amber-200 dark:border-amber-700 hover:bg-amber-100 dark:hover:bg-amber-800/50 transition-colors cursor-pointer p-3"
                          onClick={() => goToPage(chapter.number)}
                        >
                          <h3 className="text-xl font-semibold text-amber-800 dark:text-amber-300">
                            Chapter {chapter.number}: {chapter.title}
                          </h3>
                          <p className="text-amber-700 dark:text-amber-400 italic">{chapter.subtitle}</p>
                        </Card>
                      ))}
                    </div>
                  </div>
                ) : (
                  <ChapterContent chapterNumber={currentPage} />
                )}
              </div>
            </div>
          </div>

          {/* Second page (for larger screens) */}
          {showTwoPages && getNextPage() && (
            <div className="w-1/2 h-full">
              <div className="h-full flex flex-col">
                <div className="bg-amber-900/50 p-2 text-center border-b border-amber-800/50">
                  <h2 className="text-amber-300 font-semibold">{getPageTitle(getNextPage()!)}</h2>
                </div>
                <div className="flex-grow overflow-y-auto p-4 bg-amber-50 dark:bg-amber-900/80 text-amber-950 dark:text-amber-100">
                  <ChapterContent chapterNumber={getNextPage()!} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile navigation */}
      <div className="md:hidden fixed bottom-4 left-0 right-0 flex justify-center">
        <div className="bg-amber-900/90 backdrop-blur-sm rounded-full shadow-lg p-1 flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-amber-300 hover:bg-amber-800/70"
            onClick={() => goToPage(0)}
          >
            <Home className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-amber-300 hover:bg-amber-800/70"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 0}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="px-2 text-sm text-amber-300">
            {currentPage + 1}/{totalPages}
          </span>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-amber-300 hover:bg-amber-800/70"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages - 1}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

