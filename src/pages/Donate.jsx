import { useState } from 'react'
import { Heart, Send, CheckCircle, AlertCircle } from 'lucide-react'

export default function Donate() {
  const [amount, setAmount] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  const handleDonate = async (e) => {
    e.preventDefault()
    
    if (!amount || parseFloat(amount) <= 0) {
      setError('Please enter a valid donation amount')
      return
    }

    if (parseFloat(amount) < 0.001) {
      setError('Minimum donation amount is 0.001 ALGO')
      return
    }

    setLoading(true)
    setError('')
    setResult(null)

    // Simulate donation processing
    setTimeout(() => {
      setResult({
        success: true,
        amount: parseFloat(amount),
        txHash: 'DEMO_TX_' + Math.random().toString(36).substr(2, 9).toUpperCase(),
        message: 'Thank you for your generous donation! This is a demo transaction.'
      })
      setAmount('')
      setLoading(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Heart className="text-white" size={32} />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Make a Donation</h1>
          <p className="text-gray-600">
            Support causes with secure blockchain donations
          </p>
        </div>

        {/* Donation Form */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 p-8">
          <form onSubmit={handleDonate} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Donation Amount (ALGO)
              </label>
              <div className="relative">
                <input
                  type="number"
                  step="0.000001"
                  min="0.001"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.000000"
                  required
                  disabled={loading}
                  className="w-full px-4 py-3 pr-16 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                />
                <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">
                  ALGO
                </span>
              </div>
              <p className="mt-1 text-xs text-gray-500">
                Minimum donation: 0.001 ALGO
              </p>
            </div>

            <button
              type="submit"
              disabled={loading || !amount}
              className="w-full px-6 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl hover:from-primary-600 hover:to-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <Send size={20} />
                  <span>Donate Now</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Success Message */}
        {result && (
          <div className="mt-6 bg-green-50 border border-green-200 rounded-2xl p-6">
            <div className="flex items-center mb-4">
              <CheckCircle className="text-green-500 mr-3" size={24} />
              <h3 className="text-lg font-semibold text-green-800">Donation Successful!</h3>
            </div>
            <div className="space-y-2 text-sm text-green-700">
              <p><strong>Amount:</strong> {result.amount} ALGO</p>
              <p><strong>Transaction ID:</strong> {result.txHash}</p>
              <p className="text-green-600 mt-3">{result.message}</p>
            </div>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mt-6 bg-red-50 border border-red-200 rounded-2xl p-6">
            <div className="flex items-center mb-2">
              <AlertCircle className="text-red-500 mr-3" size={24} />
              <h3 className="text-lg font-semibold text-red-800">Error</h3>
            </div>
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}

        {/* Info Section */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">How it works</h3>
          <ul className="space-y-2 text-sm text-blue-700">
            <li>• Donations are processed on the Algorand blockchain</li>
            <li>• Transactions are fast (4.5 seconds) and eco-friendly</li>
            <li>• All donations are transparent and verifiable</li>
            <li>• You can earn certificates for your contributions</li>
          </ul>
        </div>
      </div>
    </div>
  )
}