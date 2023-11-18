export default async function getMusic(): Promise<TrendItem[]> {
    const res = await fetch('http://localhost:3000/api/youtube', {next: {revalidate: 10}})
    
    if (!res.ok) throw new Error('failed to fetch YOUTUBE data')
  
    return res.json()
  }