import { NextResponse } from 'next/server'

export async function GET() {
  const res = await fetch(`${process.env.DATA_SOURCE_URL}/movies`, {
    cache: 'no-store',
  })

  const movies: TrendItem[] = await res.json()

  return NextResponse.json(movies)
}
