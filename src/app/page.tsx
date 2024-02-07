import PageTemplate from './components/PageTemplate'

const mainDetails: CategoryDetail = {
  category: 'youtube',
  backgroundColor: '#000000',
  pointColor: '#D90429',
}

const getYoutube = async () => {
  const res = await fetch(`${process.env.DATA_SOURCE_URL}/youtubes`, {
    next: { revalidate: 3600 },
  })

  if (!res.ok) {
    throw new Error('failed to fetch YOUTUBE data')
  }

  const result: TrendItem[] = await res.json()

  return result
}

export default async function mainPage() {
  const youtube = await getYoutube()

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
