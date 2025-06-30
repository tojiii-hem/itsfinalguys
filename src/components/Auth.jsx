import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'

export default function Auth() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [isSignUp, setIsSignUp] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const { signUp, signIn } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')
    setError('')

    try {
      if (isSignUp) {
        const { data, error } = await signUp(email, password)
        if (error) throw error
        setMessage('Account created successfully!')
      } else {
        const { error } = await signIn(email, password)
        if (error) throw error
        setMessage('Signed in successfully!')
      }
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-8">
          {/* Logo & Heading */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-2xl">U</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900">
              {isSignUp ? 'Create Account' : 'Welcome Back'}
            </h2>
            <p className="text-gray-600 mt-2">
              {isSignUp ? 'Join the future of blockchain charity' : 'Sign in to your account'}
            </p>
          </div>

          {/* Auth Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
                placeholder="Enter your email"
                autoComplete="email"
                className="mt-1 block w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
                placeholder="Enter your password"
                autoComplete={isSignUp ? "new-password" : "current-password"}
                className="mt-1 block w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-primary-500 to-primary-600 text-white py-3 px-4 rounded-xl hover:from-primary-600 hover:to-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-medium"
            >
              {loading ? 'Processing...' : isSignUp ? 'Create Account' : 'Sign In'}
            </button>
          </form>

          {/* Messages */}
          {message && (
            <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-xl">
              <p className="text-sm text-green-700">{message}</p>
            </div>
          )}

          {error && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-xl">
              <p className="text-sm text-red-700">{error}</p>
            </div>
          )}

          {/* Toggle Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}
              <button
                type="button"
                onClick={() => {
                  setIsSignUp(!isSignUp)
                  setMessage('')
                  setError('')
                }}
                className="text-primary-600 hover:underline ml-1 font-medium"
              >
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}