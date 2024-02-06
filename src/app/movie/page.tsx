import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { BASE_API_URL } from '@/utils/constants'
import PageTemplate from '../components/PageTemplate'

export const metadata: Metadata = {
  title: 'movie',
}

const movieDetails: CategoryDetail = {
  category: 'movie',
  backgroundColor: '#001F54',
  pointColor: '#ffebcd',
}

const getMovie = async () => {
  const res = await fetch(`${BASE_API_URL}/api/movies`)

  if (!res.ok) {
    throw new Error('failed to fetch MOVIE data')
  }

  const result = await res.json()
  return result
}

export default async function moviePage() {
  if (!BASE_API_URL) {
    return null
  }

  const movies = await getMovie()

  if (!movies) {
    notFound()
  }
  return (
    <div
      style={{ backgroundColor: movieDetails.backgroundColor }}
      className="flex flex-col items-center"
    >
      <div className="max-w-[800px]">
        <PageTemplate categoryDetails={movieDetails} items={movies} />
      </div>
    </div>
  )
}

export const dynamic = 'force-dynamic'
