import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { BASE_API_URL } from '@/utils/constants'
import PageTemplate from '../components/PageTemplate'

export const metadata: Metadata = {
  title: 'music',
}

const musicDetails: CategoryDetail = {
  category: 'music',
  backgroundColor: '#FFFFFF',
  pointColor: '#0466C8',
}

const getMusic = async () => {
  const res = await fetch(`${BASE_API_URL}/api/musics`)

  if (!res.ok) {
    throw new Error('failed to fetch MUSIC data')
  }

  const result = res.json()
  return result
}

export default async function musicPage() {
  if (!BASE_API_URL) {
    return null
  }

  const music = await getMusic()

  if (!music) {
    notFound()
  }

  return (
    <div
      style={{ backgroundColor: musicDetails.backgroundColor }}
      className="flex flex-col items-center"
    >
      <div className="max-w-[900px] ">
        <PageTemplate categoryDetails={musicDetails} items={music} />
      </div>
    </div>
  )
}
