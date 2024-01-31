import { notFound } from 'next/navigation'

import PageTemplate from './components/PageTemplate'
import getYoutube from '../../lib/getYoutube'

const mainDetails: CategoryDetail = {
  category: 'youtube',
  backgroundColor: '#000000',
  pointColor: '#D90429',
}
export default async function mainPage() {
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
