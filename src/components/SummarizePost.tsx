import React, { useState } from 'react'
import axios from 'axios'
import { Sparkles } from 'lucide-react'

interface SummarizePostProps {
  latestPost: string
  setSummary: (summary: string) => void
}

const SummarizePost: React.FC<SummarizePostProps> = ({ latestPost, setSummary }) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSummarize = async () => {
    setLoading(true)
    setError(null)
    try {
      // In a real application, you would make an API call to your backend
      // which would then interact with the OpenAI API
      const response = await axios.post('/api/summarize', { content: latestPost })
      setSummary(response.data.summary)
    } catch (err) {
      setError('Failed to summarize the post. Please try again.')
    }
    setLoading(false)
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Sparkles className="mr-2" /> Summarize Post
      </h2>
      <button
        onClick={handleSummarize}
        disabled={loading}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled:bg-green-300"
      >
        {loading ? 'Summarizing...' : 'Summarize Post'}
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  )
}

export default SummarizePost