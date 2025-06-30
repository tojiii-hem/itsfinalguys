import { Award, Download, Share2 } from 'lucide-react'

export default function Certificate() {
  const certificates = [
    {
      id: 1,
      title: 'First Donation',
      description: 'Made your first charitable donation',
      issueDate: new Date('2024-01-15'),
      type: 'achievement'
    },
    {
      id: 2,
      title: 'Blockchain Explorer',
      description: 'Learned about blockchain technology',
      issueDate: new Date('2024-02-01'),
      type: 'completion'
    }
  ]

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Award className="text-white" size={32} />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Certificates</h1>
          <p className="text-gray-600">
            Showcase your charitable achievements
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 p-6 text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">{certificates.length}</div>
            <div className="text-gray-600">Total Certificates</div>
          </div>
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">
              {certificates.filter(c => c.type === 'achievement').length}
            </div>
            <div className="text-gray-600">Achievements</div>
          </div>
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              {certificates.filter(c => c.type === 'completion').length}
            </div>
            <div className="text-gray-600">Completions</div>
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid gap-6">
          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    certificate.type === 'achievement' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'
                  }`}>
                    <Award size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{certificate.title}</h3>
                    <p className="text-gray-600">{certificate.description}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200">
                    <Download size={20} />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200">
                    <Share2 size={20} />
                  </button>
                </div>
              </div>

              <div className="text-sm text-gray-500">
                Issued {certificate.issueDate.toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-2xl p-6">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">About Certificates</h3>
          <ul className="space-y-2 text-sm text-blue-700">
            <li>• Certificates are issued for completing activities</li>
            <li>• All certificates are verifiable on the blockchain</li>
            <li>• You can download and share your certificates</li>
            <li>• Certificates showcase your charitable contributions</li>
          </ul>
        </div>
      </div>
    </div>
  )
}