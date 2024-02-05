import { BASE_API_URL } from '@/utils/constants'

export default async function getMusic() {
  const res = await fetch(`${BASE_API_URL}/api/youtube`, {
    next: { revalidate: 60 },
  })

  if (!BASE_API_URL) {
    return null
  }

  if (!res.ok) throw new Error('failed to fetch YOUTUBE data')

  return res.json()
}
