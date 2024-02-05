import { BASE_API_URL } from '@/utils/constants'

export default async function getMovie() {
  if (!BASE_API_URL) {
    return null
  }

  const res = await fetch(`${BASE_API_URL}/api/movies`, {
    next: { revalidate: 60 },
  })

  if (!res.ok) throw new Error('failed to fetch MOVIE data')

  return res.json()
}
