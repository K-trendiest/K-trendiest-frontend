export default async function getMusic(): Promise<TrendItem[]> {
  const res = await fetch(`${process.env.VERCEL_URL}/api/musics`, {
    next: { revalidate: 60 },
  })

  if (!res.ok) throw new Error('failed to fetch MUSIC data')

  return res.json()
}
