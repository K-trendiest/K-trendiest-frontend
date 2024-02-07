import { Metadata } from 'next'

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
  const res = await fetch(`${process.env.DATA_SOURCE_URL}/music`)

  if (!res.ok) {
    throw new Error('failed to fetch MUSIC data')
  }

  const result: TrendItem[] = await res.json()

  return result
}

export default async function musicPage() {
  const music = await getMusic()

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

export const dynamic = 'force-dynamic'
