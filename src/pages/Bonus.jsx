import { Smile, TrendingUp } from 'lucide-react'

export default function Bonus() {
  const memes = [
    {
      id: 1,
      title: "When you finally understand blockchain",
      author: "crypto_enthusiast",
      ups: 1234,
      comments: 89,
      url: "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg"
    },
    {
      id: 2,
      title: "Me explaining DeFi to my friends",
      author: "defi_master",
      ups: 2156,
      comments: 156,
      url: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg"
    }
  ]

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M'
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K'
    return num.toString()
  }

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Smile className="text-white" size={32} />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Crypto Memes</h1>
          <p className="text-gray-600">
            Take a break and enjoy some blockchain humor
          </p>
        </div>

        {/* Memes Grid */}
        <div className="grid gap-6">
          {memes.map((meme) => (
            <div
              key={meme.id}
              className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Meme Header */}
              <div className="p-4 border-b border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-1">{meme.title}</h3>
                <p className="text-sm text-gray-600">by u/{meme.author}</p>
              </div>

              {/* Meme Image */}
              <div className="aspect-video bg-gray-100">
                <img
                  src={meme.url}
                  alt={meme.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Meme Stats */}
              <div className="p-4">
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <TrendingUp size={16} />
                    <span>{formatNumber(meme.ups)} upvotes</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Smile size={16} />
                    <span>{formatNumber(meme.comments)} comments</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-yellow-800 mb-3">About Crypto Memes</h3>
          <ul className="space-y-2 text-sm text-yellow-700">
            <li>• Curated from popular cryptocurrency communities</li>
            <li>• Fresh content updated regularly</li>
            <li>• Community-driven humor about blockchain and crypto</li>
            <li>• Perfect for taking a break from serious topics!</li>
          </ul>
        </div>
      </div>
    </div>
  )
}