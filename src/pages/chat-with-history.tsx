"use client"
import * as React from "react"
import { Send, Paperclip, Mic, BookOpen, ThumbsUp, ThumbsDown, Copy, Share2, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface Message {
  id: string
  content: string
  sender: "user" | "ai"
  timestamp: Date
  showActions?: boolean
}

interface ChatHistory {
  id: string
  title: string
  preview: string
  timestamp: Date
  isActive?: boolean
}

// Sample chat history data
const chatHistoryData: ChatHistory[] = [
  {
    id: "1",
    title: "Generate 5 attention-grab...",
    preview: '"Revolutionize Customer Enga...',
    timestamp: new Date(),
    isActive: true,
  },
  {
    id: "2",
    title: "Learning From 100 Years o...",
    preview: "For athletes, high altitude prod...",
    timestamp: new Date(),
  },
  {
    id: "3",
    title: "Research officiants",
    preview: "Maxwell's equations—the foun...",
    timestamp: new Date(),
  },
  {
    id: "4",
    title: "What does a senior lead de...",
    preview: "Physiological respiration invol...",
    timestamp: new Date(),
  },
  {
    id: "5",
    title: "Write a sweet note to your...",
    preview: "In the eighteenth century the G...",
    timestamp: new Date(),
  },
  {
    id: "6",
    title: "Meet with cake bakers",
    preview: "Physical space is often conceiv...",
    timestamp: new Date(),
  },
  {
    id: "6",
    title: "Meet with cake bakers",
    preview: "Physical space is often conceiv...",
    timestamp: new Date(),
  },
  {
    id: "6",
    title: "Meet with cake bakers",
    preview: "Physical space is often conceiv...",
    timestamp: new Date(),
  },
  {
    id: "6",
    title: "Meet with cake bakers",
    preview: "Physical space is often conceiv...",
    timestamp: new Date(),
  },
]

// Initial messages
const initialMessages: Message[] = [
  {
    id: "1",
    content: "Generate 5 attention-grabbing headlines for an article about AI Chat Copywriter",
    sender: "user",
    timestamp: new Date(),
  },
  {
    id: "2",
    content:
      'Here\'s the results of 5 attention-grabbing headlines:\n\n1. "Revolutionize Customer Engagement with AI Chat Copywriter"\n2. "Unleash the Power of AI Chat Copywriters for Transformative Customer Experiences"\n3. "Chatbots on Steroids: Meet the AI Copywriter Transforming Conversations"\n4. "From Bland to Brilliant: AI Chat Copywriters Make Brands Conversational Rockstars"\n5. "Say Goodbye to Boring Chats: AI Copywriters Elevate Conversational Marketing"',
    sender: "ai",
    timestamp: new Date(),
    showActions: true,
  },
]

export default function ChatWithHistory() {
  const [messages, setMessages] = React.useState<Message[]>(initialMessages)
  const [inputValue, setInputValue] = React.useState("")
  const [chatHistory, setChatHistory] = React.useState(chatHistoryData)
  const [isTyping, setIsTyping] = React.useState(false)
  const messagesEndRef = React.useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  React.useEffect(() => {
    scrollToBottom()
  }, [messages, scrollToBottom]) // Added scrollToBottom to dependencies

  const handleSend = () => {
    if (!inputValue.trim()) return

    // Add user message
    const newUserMessage: Message = {
      id: Date.now().toString(),
      content: inputValue.trim(),
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, newUserMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: "I'll help you with that request. Let me process your message...",
        sender: "ai",
        timestamp: new Date(),
        showActions: true,
      }
      setMessages((prev) => [...prev, aiResponse])
      setIsTyping(false)

      // Update chat history with the new conversation
      setChatHistory((prev) => [
        {
          id: Date.now().toString(),
          title: inputValue.slice(0, 25) + "...",
          preview: inputValue.slice(0, 30) + "...",
          timestamp: new Date(),
          isActive: true,
        },
        ...prev.map((chat) => ({ ...chat, isActive: false })),
      ])
    }, 1000)
  }

  return (
    <div className="flex h-screen">
      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col max-w-3xl">
        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {messages.map((message) => (
            <div key={message.id} className={cn("flex gap-3", message.sender === "user" && "justify-end")}>
              {message.sender === "ai" && (
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>AI</AvatarFallback>
                </Avatar>
              )}

              <div className={cn("flex flex-col max-w-[80%]", message.sender === "user" && "items-end")}>
                <div
                  className={cn(
                    "rounded-lg px-4 py-2 text-sm",
                    message.sender === "ai" ? "bg-background border" : "bg-primary text-primary-foreground",
                  )}
                >
                  <p className="whitespace-pre-wrap">{message.content}</p>
                </div>

                {message.showActions && (
                  <div className="flex items-center gap-2 mt-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ThumbsUp className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ThumbsDown className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>

              {message.sender === "user" && (
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>UC</AvatarFallback>
                </Avatar>
              )}
            </div>
          ))}
          {isTyping && (
            <div className="flex gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>AI</AvatarFallback>
              </Avatar>
              <div className="rounded-lg px-4 py-2 text-sm bg-background border">AI is typing...</div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 border-t bg-background">
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <input
                type="text"
                placeholder="Send a message"
                className="flex-1 bg-transparent outline-none text-sm"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault()
                    handleSend()
                  }
                }}
              />
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">{inputValue.length}/3,000</span>
                {inputValue && (
                  <Button size="icon" onClick={handleSend}>
                    <Send className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
            <div className="flex items-center gap-4 mt-4 pt-4 border-t">
              <Button variant="outline" size="sm">
                <Paperclip className="h-4 w-4 mr-2" />
                Attach
              </Button>
              <Button variant="outline" size="sm">
                <Mic className="h-4 w-4 mr-2" />
                Voice Message
              </Button>
              <Button variant="outline" size="sm">
                <BookOpen className="h-4 w-4 mr-2" />
                Browse Prompts
              </Button>
            </div>
          </Card>
        </div>
      </main>

      {/* Right Sidebar - Chat History */}
      <aside className="w-80 border-l min-h-screen overflow-y-auto">
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold">Projects</h2>
            <span className="text-sm text-muted-foreground">({chatHistory.length})</span>
          </div>

          <div className="space-y-2">
            {chatHistory.map((chat) => (
              <Card
                key={chat.id}
                className={cn(
                  "p-3 cursor-pointer hover:bg-accent transition-colors",
                  chat.isActive && "border-2 border-primary",
                )}
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <h3 className="font-medium text-sm">{chat.title}</h3>
                    <p className="text-xs text-muted-foreground">{chat.preview}</p>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8 -mr-2">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </aside>
    </div>
  )
}

