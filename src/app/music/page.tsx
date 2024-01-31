import { notFound } from 'next/navigation'

import PageTemplate from '../components/PageTemplate'
import getMusic from '../../../lib/getMusic'

const musicDetails: CategoryDetail = {
  category: 'music',
  backgroundColor: '#FFFFFF',
  pointColor: '#0466C8',
}

export default async function musicPage() {
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
