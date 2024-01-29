import { NextResponse } from 'next/server'

const DATA_SOURCE_URL = 'http://192.168.103.184:8080/movies'

export default async function GET() {
  const res = await fetch(DATA_SOURCE_URL)

  const movies: TrendItem[] = await res.json()

  return NextResponse.json(movies)
}
