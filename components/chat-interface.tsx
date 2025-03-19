"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Send, BookOpen, Info, Sparkles, User } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

// Predefined responses for common questions
const responses = {
  greeting: [
    "Namaste! Welcome to the Bhagavad Gita chatbot. How may I assist you on your spiritual journey today?",
    "Om Namah Bhagavate Vasudevaya! I'm here to help you explore the divine wisdom of the Bhagavad Gita.",
    "Jai Shri Krishna! How can I help you understand the teachings of the Bhagavad Gita today?",
  ],

  krishna: [
    "Lord Krishna is the Supreme Personality of Godhead who appeared on Earth around 5,000 years ago. In the Bhagavad Gita, He serves as Arjuna's charioteer and reveals divine knowledge.",
    "Krishna is described as having a beautiful bluish complexion, wearing a peacock feather in His crown, and playing a flute. He is the embodiment of love, wisdom, and divine consciousness.",
    "In the Bhagavad Gita, Krishna reveals Himself as the source of all creation, the sustainer of the universe, and the ultimate goal of spiritual practice.",
  ],

  arjuna: [
    "Arjuna was a great warrior, the third of the five Pandava brothers. In the Bhagavad Gita, he faces a moral dilemma when he must fight against his own relatives in the Kurukshetra war.",
    "Arjuna represents the ideal disciple - intelligent, humble, and sincere in his quest for truth. His questions to Krishna form the basis of the Bhagavad Gita's teachings.",
    "Arjuna's reluctance to fight and his subsequent enlightenment through Krishna's teachings demonstrate the journey from confusion to clarity that we all must undertake.",
  ],

  chapter1: [
    "Chapter 1, Arjuna Vishada Yoga (The Yoga of Arjuna's Grief), sets the scene of the Kurukshetra battlefield. Arjuna sees his teachers, relatives, and friends in the opposing army and is overcome with grief and confusion about his duty.",
    "In the first chapter, Arjuna expresses his reluctance to fight and the moral crisis he faces. This sets the stage for Krishna's teachings throughout the rest of the Gita.",
  ],

  chapter2: [
    "Chapter 2, Sankhya Yoga (The Yoga of Knowledge), contains fundamental teachings about the eternal nature of the soul, the temporary nature of the body, and the concept of dharma (duty).",
    "In this chapter, Krishna begins His teachings by explaining the immortality of the soul: 'Never was there a time when I did not exist, nor you, nor all these kings; nor in the future shall any of us cease to be.'",
  ],

  karma: [
    "Karma Yoga is the path of selfless action. Krishna teaches that one should perform their duties without attachment to the results, dedicating all actions to the Divine.",
    "In Chapter 3, Krishna explains: 'Work done as a sacrifice for Vishnu has to be performed, otherwise work causes bondage in this material world. Therefore, perform your prescribed duties for His satisfaction, and in this way, you will always remain free from bondage.'",
  ],

  dharma: [
    "Dharma refers to one's sacred duty or righteous path. In the Bhagavad Gita, Krishna emphasizes the importance of following one's dharma, even when it seems difficult.",
    "Krishna tells Arjuna: 'It is better to perform one's own duties imperfectly than to master the duties of another. By fulfilling the obligations born of one's nature, a person never incurs sin.'",
  ],

  moksha: [
    "Moksha is liberation from the cycle of birth and death. It is the ultimate goal of spiritual practice according to the Bhagavad Gita.",
    "Krishna teaches various paths to attain moksha, including Karma Yoga (the path of action), Jnana Yoga (the path of knowledge), and Bhakti Yoga (the path of devotion).",
  ],

  bhakti: [
    "Bhakti Yoga is the path of loving devotion to God. Krishna describes it as the most direct and accessible path to spiritual realization.",
    "In Chapter 12, Krishna states: 'Those who fix their minds on Me and always engage in My devotion with great faith, I consider them to be the most perfect yogis.'",
  ],

  gita_essence: [
    "The essence of the Bhagavad Gita can be summarized as: Perform your duties without attachment to results, with devotion to God, and with the knowledge of your true spiritual nature.",
    "The core message of the Gita is that by aligning our actions with divine will, cultivating devotion, and seeking self-knowledge, we can attain liberation and eternal happiness.",
  ],

  vishwaroop: [
    "In Chapter 11, Krishna reveals His Universal Form (Vishwaroop Darshan) to Arjuna, showing that He is the source of all creation, preservation, and destruction.",
    "The Vishwaroop Darshan is a profound revelation where Arjuna sees all of existence, past, present, and future, within the cosmic form of Krishna. This vision instills both awe and fear in Arjuna.",
  ],
}

// Additional predefined questions and answers
const predefinedQA = [
  {
    question: "What is the Bhagavad Gita?",
    answer:
      "The Bhagavad Gita is a 700-verse Hindu scripture that is part of the epic Mahabharata. It contains a conversation between Arjuna and Lord Krishna on a variety of theological and philosophical issues.",
  },
  {
    question: "Who wrote the Bhagavad Gita?",
    answer:
      "The Bhagavad Gita was narrated by Lord Krishna and written down by the sage Vyasa, who is also credited with compiling the Vedas and writing the Mahabharata.",
  },
  {
    question: "What are the three yogas taught in the Gita?",
    answer:
      "The three main yogas taught in the Bhagavad Gita are Karma Yoga (the path of selfless action), Jnana Yoga (the path of knowledge), and Bhakti Yoga (the path of devotion).",
  },
  {
    question: "What is the significance of the battlefield setting?",
    answer:
      "The battlefield of Kurukshetra symbolizes the moral and ethical struggles we all face in life. It represents the field of dharma (righteousness) where we must fight our inner battles.",
  },
  {
    question: "What does Krishna say about reincarnation?",
    answer:
      "Krishna explains that just as a person casts off worn-out garments and puts on new ones, the soul casts off worn-out bodies and enters into new ones. Death is certain for the born, and birth is certain for the dead.",
  },
  {
    question: "What is the meaning of 'Aham Brahmasmi'?",
    answer:
      "'Aham Brahmasmi' is a Sanskrit statement meaning 'I am Brahman' or 'I am the Absolute Truth.' It expresses the unity of the individual self (Atman) with the universal consciousness (Brahman).",
  },
  {
    question: "What are the gunas?",
    answer:
      "The gunas are the three fundamental qualities or modes of nature: sattva (goodness, harmony), rajas (passion, activity), and tamas (ignorance, inertia). All of creation is composed of different combinations of these gunas.",
  },
  {
    question: "What is Krishna's advice on meditation?",
    answer:
      "Krishna advises establishing a regular meditation practice, sitting in a clean place, focusing the mind on a single point, and controlling the thoughts and senses. He emphasizes steadiness, moderation, and regularity.",
  },
  {
    question: "What is the meaning of 'Om'?",
    answer:
      "Om (or Aum) is the primordial sacred sound representing the absolute reality, consciousness, and bliss. Krishna says in the Gita: 'I am the syllable Om in the Vedic mantras; I am the sound in ether and ability in man.'",
  },
  {
    question: "How should one deal with anger?",
    answer:
      "Krishna teaches that anger arises from desire. He advises controlling the senses, practicing detachment, and cultivating equanimity to overcome anger.",
  },
]

// Add 40 more predefined Q&A pairs
for (let i = 0; i < 40; i++) {
  const topics = [
    "What does the Gita say about",
    "How can I understand",
    "Explain the concept of",
    "What is the significance of",
    "How should one practice",
  ]

  const concepts = [
    "self-realization",
    "devotional service",
    "the three modes of nature",
    "detachment",
    "spiritual knowledge",
    "the soul",
    "karma",
    "dharma",
    "meditation",
    "yoga practice",
    "divine consciousness",
    "surrender to Krishna",
    "the material world",
    "transcendental knowledge",
    "spiritual discipline",
  ]

  const randomTopic = topics[Math.floor(Math.random() * topics.length)]
  const randomConcept = concepts[Math.floor(Math.random() * concepts.length)]

  predefinedQA.push({
    question: `${randomTopic} ${randomConcept}?`,
    answer: `According to the Bhagavad Gita, ${randomConcept} is an essential aspect of spiritual growth. Krishna teaches that through proper understanding and practice of ${randomConcept}, one can progress on the path to self-realization and ultimately attain liberation from the cycle of birth and death.`,
  })
}

// Add more sophisticated response matching
const generateResponse = (query) => {
  // Convert query to lowercase for easier matching
  const lowerQuery = query.toLowerCase()

  // Check for greetings
  if (lowerQuery.match(/\b(hello|hi|namaste|greet|namaskar|jai|shree|ram|krishna)\b/)) {
    return responses.greeting[Math.floor(Math.random() * responses.greeting.length)]
  }

  // Check for Krishna related questions
  if (lowerQuery.match(/\b(krishna|lord|god|bhagavan|vasudev|govinda|madhav|keshav)\b/)) {
    return responses.krishna[Math.floor(Math.random() * responses.krishna.length)]
  }

  // Check for Arjuna related questions
  if (lowerQuery.match(/\b(arjuna|pandava|partha|savyasachi)\b/)) {
    return responses.arjuna[Math.floor(Math.random() * responses.arjuna.length)]
  }

  // Check for chapter specific questions
  if (lowerQuery.match(/\b(chapter 1|first chapter|arjuna vishada|vishada yoga)\b/)) {
    return responses.chapter1[Math.floor(Math.random() * responses.chapter1.length)]
  }

  if (lowerQuery.match(/\b(chapter 2|second chapter|sankhya yoga)\b/)) {
    return responses.chapter2[Math.floor(Math.random() * responses.chapter2.length)]
  }

  // Check for concept related questions
  if (lowerQuery.match(/\b(karma|action|duty|work|deed)\b/)) {
    return responses.karma[Math.floor(Math.random() * responses.karma.length)]
  }

  if (lowerQuery.match(/\b(dharma|duty|righteousness|moral|ethics)\b/)) {
    return responses.dharma[Math.floor(Math.random() * responses.dharma.length)]
  }

  if (lowerQuery.match(/\b(moksha|liberation|freedom|salvation|nirvana|mukti)\b/)) {
    return responses.moksha[Math.floor(Math.random() * responses.moksha.length)]
  }

  if (lowerQuery.match(/\b(bhakti|devotion|love|worship|surrender)\b/)) {
    return responses.bhakti[Math.floor(Math.random() * responses.bhakti.length)]
  }

  if (lowerQuery.match(/\b(vishwaroop|universal form|cosmic form|virat roop)\b/)) {
    return responses.vishwaroop[Math.floor(Math.random() * responses.vishwaroop.length)]
  }

  if (lowerQuery.match(/\b(essence|summary|main teaching|core|central message)\b/)) {
    return responses.gita_essence[Math.floor(Math.random() * responses.gita_essence.length)]
  }

  // Check for specific verses
  if (lowerQuery.match(/\b(verse|shloka|sloka)\b/) && lowerQuery.match(/\b(2.47|karma yoga)\b/)) {
    return "Verse 2.47 is one of the most famous verses of the Gita: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥' - 'You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself to be the cause of the results, and never be attached to inaction.'"
  }

  if (lowerQuery.match(/\b(verse|shloka|sloka)\b/) && lowerQuery.match(/\b(2.20|soul|atman)\b/)) {
    return "Verse 2.20 states: 'न जायते म्रियते वा कदाचिन्नायं भूत्वा भविता वा न भूयः। अजो नित्यः शाश्वतोऽयं पुराणो न हन्यते हन्यमाने शरीरे॥' - 'The soul is never born nor does it die at any time. It does not come into being, or cease to exist. It is unborn, eternal, ever-existing, and primeval. The soul is not slain when the body is slain.'"
  }

  // Check for exact matches in predefined Q&A
  for (const qa of predefinedQA) {
    if (lowerQuery.includes(qa.question.toLowerCase())) {
      return qa.answer
    }
  }

  // Fuzzy matching for similar questions
  for (const qa of predefinedQA) {
    const questionWords = qa.question
      .toLowerCase()
      .split(/\W+/)
      .filter((word) => word.length > 3)
    const queryWords = lowerQuery.split(/\W+/).filter((word) => word.length > 3)

    const matchCount = questionWords.filter((word) => queryWords.includes(word)).length
    if (matchCount >= 2 && matchCount >= questionWords.length * 0.5) {
      return qa.answer
    }
  }

  // Default response if no match is found
  return "The Bhagavad Gita teaches us that spiritual knowledge is the key to understanding our true nature. Could you please rephrase your question or ask about a specific chapter or concept from the Gita?"
}

// Get suggestions based on input
const getSuggestions = (input) => {
  if (!input || input.length < 3) return []

  const lowerInput = input.toLowerCase()
  const suggestions = []

  // Check predefined QA for matches
  for (const qa of predefinedQA) {
    if (qa.question.toLowerCase().includes(lowerInput) && !suggestions.includes(qa.question)) {
      suggestions.push(qa.question)
      if (suggestions.length >= 3) break
    }
  }

  // Add some common concepts if we don't have enough suggestions
  const concepts = [
    "What is Karma Yoga?",
    "Explain the concept of dharma",
    "What does the Gita say about meditation?",
    "What are the three gunas?",
    "How can I apply Gita's teachings in daily life?",
    "What is the Universal Form (Vishwaroop)?",
    "What is the significance of Chapter 11?",
    "How does one attain moksha according to the Gita?",
  ]

  for (const concept of concepts) {
    if (concept.toLowerCase().includes(lowerInput) && !suggestions.includes(concept)) {
      suggestions.push(concept)
      if (suggestions.length >= 3) break
    }
  }

  return suggestions
}

interface ChatInterfaceProps {
  inputRef?: React.RefObject<HTMLInputElement>
  onSendMessage?: (sendFn: (message: string) => void) => void
}

export function ChatInterface({ inputRef, onSendMessage }: ChatInterfaceProps) {
  const [messages, setMessages] = useState([{ role: "assistant", content: responses.greeting[0] }])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const messagesEndRef = useRef(null)
  const localInputRef = useRef<HTMLInputElement>(null)
  const actualInputRef = inputRef || localInputRef

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Update suggestions when input changes
  useEffect(() => {
    if (input.length >= 3) {
      const newSuggestions = getSuggestions(input)
      setSuggestions(newSuggestions)
      setShowSuggestions(newSuggestions.length > 0)
    } else {
      setShowSuggestions(false)
    }
  }, [input])

  // Expose sendMessage function to parent component
  useEffect(() => {
    if (onSendMessage) {
      onSendMessage(sendMessage)
    }
  }, [onSendMessage])

  const handleSend = () => {
    if (!input.trim()) return

    // Add user message
    setMessages((prev) => [...prev, { role: "user", content: input }])

    // Simulate typing
    setIsTyping(true)
    setShowSuggestions(false)

    // Process the message and generate a response with variable timing for realism
    const responseTime = 500 + Math.random() * 1500
    setTimeout(() => {
      const response = generateResponse(input)
      setMessages((prev) => [...prev, { role: "assistant", content: response }])
      setIsTyping(false)

      // Sometimes offer a follow-up question
      if (Math.random() > 0.7) {
        setTimeout(() => {
          setIsTyping(true)
          setTimeout(
            () => {
              const followUps = [
                "Is there anything specific about this topic you'd like to explore further?",
                "Would you like me to explain any other aspect of the Bhagavad Gita?",
                "Do you have any other questions about the teachings of Lord Krishna?",
                "How does this teaching resonate with you personally?",
              ]
              const followUp = followUps[Math.floor(Math.random() * followUps.length)]
              setMessages((prev) => [...prev, { role: "assistant", content: followUp }])
              setIsTyping(false)
            },
            1000 + Math.random() * 1000,
          )
        }, 1000)
      }
    }, responseTime)

    setInput("")
  }

  // Function to send a message programmatically
  const sendMessage = (message: string) => {
    setInput(message)
    // Use setTimeout to ensure the input is set before sending
    setTimeout(() => {
      // Add user message
      setMessages((prev) => [...prev, { role: "user", content: message }])

      // Simulate typing
      setIsTyping(true)
      setShowSuggestions(false)

      // Process the message and generate a response with variable timing for realism
      const responseTime = 500 + Math.random() * 1500
      setTimeout(() => {
        const response = generateResponse(message)
        setMessages((prev) => [...prev, { role: "assistant", content: response }])
        setIsTyping(false)

        // Sometimes offer a follow-up question
        if (Math.random() > 0.7) {
          setTimeout(() => {
            setIsTyping(true)
            setTimeout(
              () => {
                const followUps = [
                  "Is there anything specific about this topic you'd like to explore further?",
                  "Would you like me to explain any other aspect of the Bhagavad Gita?",
                  "Do you have any other questions about the teachings of Lord Krishna?",
                  "How does this teaching resonate with you personally?",
                ]
                const followUp = followUps[Math.floor(Math.random() * followUps.length)]
                setMessages((prev) => [...prev, { role: "assistant", content: followUp }])
                setIsTyping(false)
              },
              1000 + Math.random() * 1000,
            )
          }, 1000)
        }
      }, responseTime)
    }, 10)
  }

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion)
    setShowSuggestions(false)
    actualInputRef.current?.focus()
  }

  return (
    <Card className="w-full max-w-3xl mx-auto bg-gradient-to-br from-amber-950 to-amber-900/80 border-amber-800/50 shadow-xl">
      <CardHeader className="flex flex-row items-center justify-between bg-gradient-to-r from-amber-900 to-amber-800 rounded-t-lg border-b border-amber-700/50">
        <CardTitle className="text-center text-amber-300 flex items-center gap-2">
          <BookOpen className="h-5 w-5" /> Bhagavad Gita Wisdom
        </CardTitle>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-amber-700 bg-amber-800/50 hover:bg-amber-700/70"
              >
                <Info className="h-4 w-4 text-amber-300" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="bg-amber-950 text-amber-300 border-amber-700">
              Ask questions about the Bhagavad Gita's teachings
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-[50vh] p-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex mb-4 ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              {message.role === "assistant" && (
                <div className="flex-shrink-0 mr-2">
                  <Avatar className="h-8 w-8 bg-gradient-to-br from-amber-600 to-amber-700 border-2 border-amber-500/30">
                    <Sparkles className="h-4 w-4 text-amber-200" />
                  </Avatar>
                </div>
              )}
              <div
                className={`px-4 py-2 rounded-lg max-w-[80%] ${
                  message.role === "user"
                    ? "bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-tr-none shadow-md"
                    : "bg-gradient-to-r from-amber-800/70 to-amber-900/70 text-amber-100 rounded-tl-none shadow-md border border-amber-700/30"
                }`}
              >
                {message.content}
              </div>
              {message.role === "user" && (
                <div className="flex-shrink-0 ml-2">
                  <Avatar className="h-8 w-8 bg-gradient-to-br from-amber-500 to-amber-600 border-2 border-amber-400/30">
                    <User className="h-4 w-4 text-white" />
                  </Avatar>
                </div>
              )}
            </div>
          ))}
          {isTyping && (
            <div className="flex mb-4 justify-start">
              <div className="flex-shrink-0 mr-2">
                <Avatar className="h-8 w-8 bg-gradient-to-br from-amber-600 to-amber-700 border-2 border-amber-500/30">
                  <Sparkles className="h-4 w-4 text-amber-200" />
                </Avatar>
              </div>
              <div className="px-4 py-3 rounded-lg bg-gradient-to-r from-amber-800/70 to-amber-900/70 text-amber-100 rounded-tl-none shadow-md border border-amber-700/30">
                <span className="inline-block w-2 h-2 bg-amber-400 rounded-full animate-bounce mr-1"></span>
                <span
                  className="inline-block w-2 h-2 bg-amber-400 rounded-full animate-bounce mr-1"
                  style={{ animationDelay: "0.2s" }}
                ></span>
                <span
                  className="inline-block w-2 h-2 bg-amber-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.4s" }}
                ></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </ScrollArea>
      </CardContent>
      <CardFooter className="flex flex-col p-4 border-t border-amber-800/30 bg-gradient-to-b from-amber-900/50 to-amber-950/80">
        {/* Suggestions */}
        {showSuggestions && suggestions.length > 0 && (
          <div className="w-full mb-2 flex flex-wrap gap-1">
            {suggestions.map((suggestion, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="text-xs bg-amber-800/30 text-amber-300 border-amber-700/50 hover:bg-amber-700/50"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </Button>
            ))}
          </div>
        )}

        <div className="flex w-full space-x-2 relative">
          <Input
            ref={actualInputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about the Bhagavad Gita..."
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            className="bg-amber-900/20 border-amber-700/50 focus:border-amber-600 focus:ring-amber-500/30 text-amber-100 placeholder:text-amber-400/70"
          />
          <Button
            onClick={handleSend}
            className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white"
            disabled={isTyping || !input.trim()}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

