import { notFound } from 'next/navigation'

import PageTemplate from '../components/PageTemplate'
import getMovie from '../../../lib/getMovie'

const movieDetails: CategoryDetail = {
  category: 'movie',
  backgroundColor: '#001F54',
  pointColor: '#ffebcd',
}

export default async function moviePage() {
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
