import { BASE_API_URL } from '@/utils/constants'

export default async function getMovie() {
  const res = await fetch(`${BASE_API_URL}/api/movies`, {
    next: { revalidate: 60 },
  })

  if (!BASE_API_URL) {
    return null
  }

  if (!res.ok) throw new Error('failed to fetch MOVIE data')

  return res.json()
}
