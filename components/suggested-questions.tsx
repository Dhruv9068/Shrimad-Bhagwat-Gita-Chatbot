"use client"

import { Button } from "@/components/ui/button"

interface SuggestedQuestionsProps {
  onSelectQuestion: (question: string) => void
  sendMessage?: (question: string) => void
}

export function SuggestedQuestions({ onSelectQuestion, sendMessage }: SuggestedQuestionsProps) {
  const questions = [
    "What is the main message of the Bhagavad Gita?",
    "Tell me about Lord Krishna",
    "What is Karma Yoga?",
    "Explain the concept of dharma",
    "What does the Gita say about meditation?",
    "What are the three gunas?",
    "How can I apply Gita's teachings in daily life?",
    "What is the Universal Form (Vishwaroop)?",
    "What is the significance of Chapter 11?",
    "How does one attain moksha according to the Gita?",
  ]

  const handleQuestionClick = (question: string) => {
    onSelectQuestion(question)

    // If sendMessage is provided, send the question directly
    if (sendMessage) {
      sendMessage(question)
    }
  }

  return (
    <div className="mt-4 w-full max-w-3xl">
      <h3 className="text-sm font-medium text-amber-400 mb-2">Suggested Questions:</h3>
      <div className="flex flex-wrap gap-2">
        {questions.map((question, index) => (
          <Button
            key={index}
            variant="outline"
            size="sm"
            className="text-xs bg-amber-900/20 text-amber-300 border-amber-800/50 hover:bg-amber-800/50"
            onClick={() => handleQuestionClick(question)}
          >
            {question}
          </Button>
        ))}
      </div>
    </div>
  )
}

