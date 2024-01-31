import { NextResponse } from 'next/server'

const DATA_SOURCE_URL = 'http://3.34.137.252:8080/music'

export async function GET() {
  const res = await fetch(DATA_SOURCE_URL)

  const musics: TrendItem[] = await res.json()

  return NextResponse.json(musics)
}
