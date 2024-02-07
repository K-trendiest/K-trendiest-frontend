import { Metadata } from 'next'

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
  const res = await fetch(`${process.env.DATA_SOURCE_URL}/movies`, {
    next: { revalidate: 3600 },
  })

  if (!res.ok) {
    throw new Error('failed to fetch MOVIE data')
  }

  const result: TrendItem[] = await res.json()

  return result
}

export default async function moviePage() {
  const movies = await getMovie()

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
