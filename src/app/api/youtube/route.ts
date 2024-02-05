import { NextResponse } from 'next/server'

export async function GET() {
  const res = await fetch(`${process.env.DATA_SOURCE_URL}/youtubes`, {
    cache: 'no-cache',
  })

  const youtube: TrendItem[] = await res.json()

  return NextResponse.json(youtube)
}
