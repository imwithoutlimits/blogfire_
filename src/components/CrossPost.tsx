import React, { useState } from 'react'
import { Share2 } from 'lucide-react'

interface CrossPostProps {
  summary: string
}

const CrossPost: React.FC<CrossPostProps> = ({ summary }) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const platforms = ['Reddit', 'Twitter/X', 'LinkedIn', 'Threads', 'Medium']

  const handleCrossPost = async () => {
    setLoading(true)
    setError(null)
    setSuccess(null)
    try {
      // In a real application, you would make API calls to your backend
      // which would then interact with each platform's API
      await Promise.all(platforms.map(platform => 
        new Promise(resolve => setTimeout(resolve, 1000)) // Simulating API calls
      ))
      setSuccess('Successfully cross-posted to all platforms!')
    } catch (err) {
      setError('Failed to cross-post. Please try again.')
    }
    setLoading(false)
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Share2 className="mr-2" /> Cross-post
      </h2>
      <p className="mb-4">Ready to cross-post to: {platforms.join(', ')}</p>
      <button
        onClick={handleCrossPost}
        disabled={loading}
        className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 disabled:bg-purple-300"
      >
        {loading ? 'Cross-posting...' : 'Cross-post to All Platforms'}
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {success && <p className="text-green-500 mt-2">{success}</p>}
    </div>
  )
}

export default CrossPost