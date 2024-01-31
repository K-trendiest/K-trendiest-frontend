export default async function getMovie(): Promise<TrendItem[]> {
  const res = await fetch(`${process.env.VERCEL_URL}/api/movies`, {
    next: { revalidate: 60 },
  })

  if (!res.ok) throw new Error('failed to fetch MOVIE data')

  return res.json()
}
