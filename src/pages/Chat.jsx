import { useState, useRef, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Send, Bot, User } from 'lucide-react'

export default function Chat() {
  const { user } = useAuth()
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: 'Hello! I\'m your AI assistant for charitable giving and blockchain donations. How can I help you today?',
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  
  const messagesEndRef = useRef(null)

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const generateAIResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase()
    
    if (lowerMessage.includes('donate') || lowerMessage.includes('donation')) {
      return "I can help you make secure donations using Algorand blockchain technology. Your donations are transparent, traceable, and go directly to verified charity wallets. Would you like to learn more about our donation process?"
    }
    
    if (lowerMessage.includes('blockchain') || lowerMessage.includes('algorand')) {
      return "UsheGuard uses the Algorand blockchain for all transactions because it's fast, secure, and environmentally friendly. Every donation is recorded permanently on the blockchain, ensuring complete transparency."
    }
    
    if (lowerMessage.includes('certificate')) {
      return "Our donation certificates are unique ASA tokens minted on the Algorand blockchain. Each certificate is a permanent, verifiable record of your charitable contribution."
    }
    
    if (lowerMessage.includes('help') || lowerMessage.includes('how')) {
      return "I'm here to help you navigate charitable giving with blockchain technology. You can ask me about making donations, understanding blockchain benefits, getting donation certificates, or any questions about our platform."
    }
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return "Hello! I'm your AI assistant for charitable giving. I can help you make secure, transparent donations using Algorand blockchain technology. What would you like to know?"
    }
    
    return `Thank you for your message: "${userMessage}". I'm here to help you with charitable giving and blockchain donations. You can ask me about our donation process, blockchain technology, or how to make a positive impact through secure giving.`
  }

  const handleSendMessage = async (e) => {
    e.preventDefault()
    if (!inputMessage.trim() || isLoading) return

    const userMessage = inputMessage.trim()
    setInputMessage('')
    setIsLoading(true)

    // Add user message
    const newUserMessage = {
      id: Date.now(),
      type: 'user',
      content: userMessage,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, newUserMessage])

    // Simulate AI processing delay
    setTimeout(() => {
      const aiResponse = generateAIResponse(userMessage)
      
      const newAIMessage = {
        id: Date.now() + 1,
        type: 'ai',
        content: aiResponse,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, newAIMessage])
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 mb-6 p-6">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-md">
              <Bot className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">AI Assistant</h1>
              <p className="text-gray-600">Your intelligent charity advisor</p>
            </div>
          </div>
        </div>

        {/* Chat Container */}
        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 overflow-hidden">
          {/* Messages Area */}
          <div className="h-96 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-gray-50/50 to-white/50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-end space-x-3 max-w-xs lg:max-w-md ${
                  message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}>
                  {/* Avatar */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-md ${
                    message.type === 'user' 
                      ? 'bg-gradient-to-br from-primary-500 to-primary-600 text-white' 
                      : 'bg-gradient-to-br from-blue-400 to-blue-500 text-white'
                  }`}>
                    {message.type === 'user' ? <User size={16} /> : <Bot size={16} />}
                  </div>
                  
                  {/* Message Bubble */}
                  <div className={`rounded-2xl px-4 py-3 shadow-md ${
                    message.type === 'user'
                      ? 'bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-br-md'
                      : 'bg-white text-gray-900 border border-gray-100 rounded-bl-md'
                  }`}>
                    <p className="text-sm leading-relaxed">{message.content}</p>
                    <span className={`text-xs mt-2 block ${
                      message.type === 'user' ? 'text-primary-100' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-end space-x-3 max-w-xs lg:max-w-md">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 text-white flex items-center justify-center flex-shrink-0 shadow-md">
                    <Bot size={16} />
                  </div>
                  <div className="bg-white rounded-2xl rounded-bl-md px-4 py-3 shadow-md border border-gray-100">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <div className="bg-white/95 backdrop-blur-md border-t border-gray-200 p-4">
            <form onSubmit={handleSendMessage} className="flex items-end space-x-3">
              <div className="flex-1">
                <textarea
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault()
                      handleSendMessage(e)
                    }
                  }}
                  placeholder="Ask about donations, blockchain, or charitable giving..."
                  disabled={isLoading}
                  rows={1}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-none"
                  style={{ minHeight: '48px', maxHeight: '120px' }}
                />
              </div>
              
              <button
                type="submit"
                disabled={isLoading || !inputMessage.trim()}
                className="px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-xl hover:from-primary-600 hover:to-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Send size={18} />
                <span className="hidden sm:inline">Send</span>
              </button>
            </form>
            
            <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
              <span>Press Enter to send, Shift+Enter for new line</span>
              <span>{messages.length} messages</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}