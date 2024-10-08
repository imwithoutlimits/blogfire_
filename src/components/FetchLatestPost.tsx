import React, { useState } from 'react'
import axios from 'axios'
import Parser from 'rss-parser'
import { Rss } from 'lucide-react'

interface FetchLatestPostProps {
  setLatestPost: (post: string) => void
}

const FetchLatestPost: React.FC<FetchLatestPostProps> = ({ setLatestPost }) => {
  const [rssUrl, setRssUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleFetch = async () => {
    setLoading(true)
    setError(null)
    try {
      const parser = new Parser()
      const feed = await parser.parseURL(`https://cors-anywhere.herokuapp.com/${rssUrl}`)
      if (feed.items && feed.items.length > 0) {
        const latestPost = feed.items[0]
        setLatestPost(`${latestPost.title}\n\n${latestPost.contentSnippet}`)
      } else {
        setError('No posts found in the RSS feed')
      }
    } catch (err) {
      setError('Failed to fetch the RSS feed. Please check the URL and try again.')
    }
    setLoading(false)
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <Rss className="mr-2" /> Fetch Latest Post
      </h2>
      <input
        type="text"
        value={rssUrl}
        onChange={(e) => setRssUrl(e.target.value)}
        placeholder="Enter your blog's RSS feed URL"
        className="w-full p-2 border rounded mb-4"
      />
      <button
        onClick={handleFetch}
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
      >
        {loading ? 'Fetching...' : 'Fetch Latest Post'}
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  )
}

export default FetchLatestPost