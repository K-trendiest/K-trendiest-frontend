import { NextResponse } from 'next/server'

const DATA_SOURCE_URL = 'http://3.34.137.252:8080/youtubes'

export async function GET() {
  const res = await fetch(DATA_SOURCE_URL)

  const youtube: TrendItem[] = await res.json()

  return NextResponse.json(youtube)
}
