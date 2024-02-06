import { notFound } from 'next/navigation'

import { BASE_API_URL } from '@/utils/constants'
import PageTemplate from './components/PageTemplate'

const mainDetails: CategoryDetail = {
  category: 'youtube',
  backgroundColor: '#000000',
  pointColor: '#D90429',
}

const getYoutube = async () => {
  const res = await fetch(`${BASE_API_URL}/api/youtube`)

  if (!res.ok) {
    throw new Error('failed to fetch YOUTUBE data')
  }

  const result = await res.json()
  return result
}

export default async function mainPage() {
  if (!BASE_API_URL) {
    return null
  }

  const youtube = await getYoutube()

  if (!youtube) {
    notFound()
  }

  return (
    <div
      style={{ backgroundColor: mainDetails.backgroundColor }}
      className="flex flex-col items-center"
    >
      <div className="max-w-[1200px]">
        <PageTemplate categoryDetails={mainDetails} items={youtube} />
      </div>
    </div>
  )
}

export const dynamic = 'force-dynamic'
