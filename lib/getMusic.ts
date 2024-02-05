import { BASE_API_URL } from '@/utils/constants'

export default async function getMusic() {
  if (!BASE_API_URL) {
    return null
  }

  const res = await fetch(`${BASE_API_URL}/api/musics`, {
    next: { revalidate: 60 },
  })

  if (!res.ok) throw new Error('failed to fetch MUSIC data')

  return res.json()
}
