import { User, Wallet, History } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

export default function Profile() {
  const { user } = useAuth()

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 p-6 mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center">
              <User className="text-white" size={32} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{user?.email}</h1>
              <p className="text-gray-600">Member since {new Date(user?.created_at).toLocaleDateString()}</p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 p-6 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Wallet className="text-blue-600" size={24} />
            </div>
            <div className="text-2xl font-bold text-blue-600 mb-2">0</div>
            <div className="text-gray-600">Total Donations</div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 p-6 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <History className="text-green-600" size={24} />
            </div>
            <div className="text-2xl font-bold text-green-600 mb-2">0</div>
            <div className="text-gray-600">AI Conversations</div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 p-6 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <User className="text-purple-600" size={24} />
            </div>
            <div className="text-2xl font-bold text-purple-600 mb-2">0</div>
            <div className="text-gray-600">Certificates Earned</div>
          </div>
        </div>

        {/* Account Info */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Account Information</h2>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="text-gray-600">Email</span>
              <span className="font-medium text-gray-900">{user?.email}</span>
            </div>
            
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="text-gray-600">User ID</span>
              <span className="font-mono text-sm text-gray-900">{user?.id}</span>
            </div>
            
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="text-gray-600">Account Created</span>
              <span className="font-medium text-gray-900">
                {new Date(user?.created_at).toLocaleDateString()}
              </span>
            </div>
            
            <div className="flex justify-between items-center py-3">
              <span className="text-gray-600">Wallet Status</span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                Not Connected
              </span>
            </div>
          </div>
        </div>

        {/* Setup Guide */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">Getting Started</h3>
          <ul className="space-y-2 text-sm text-blue-700">
            <li>• Connect your Algorand wallet to start making donations</li>
            <li>• Chat with our AI assistant to learn about charitable giving</li>
            <li>• Make your first donation to earn certificates</li>
            <li>• Explore different causes and impact areas</li>
          </ul>
        </div>
      </div>
    </div>
  )
}