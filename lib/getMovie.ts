export default async function getMovie(): Promise<TrendItem[]> {
  const res = await fetch('http://localhost:3000/api/movies', {
    next: { revalidate: 3600 },
  })

  if (!res.ok) throw new Error('failed to fetch MOVIE data')

  return res.json()
}
