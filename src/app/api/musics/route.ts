import { NextResponse } from 'next/server'

export async function GET() {
  const res = await fetch(`${process.env.DATA_SOURCE_URL}/music`, {
    cache: 'no-store',
  })

  const musics: TrendItem[] = await res.json()

  return NextResponse.json(musics)
}
