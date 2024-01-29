import Image from 'next/image'
import Link from 'next/link'

export default function RankingList({
  color,
  item,
}: {
  color: string
  item: TrendItem
}) {
  const getRGB = (HEX: string) => {
    const r = parseInt(HEX.slice(1, 3), 16)
    const g = parseInt(HEX.slice(3, 5), 16)
    const b = parseInt(HEX.slice(5, 7), 16)

    return { r, g, b }
  }

  const { r, g, b } = getRGB(color)

  return (
    <div key={item.rank} className="flex flex-col items-center">
      <div
        className="text-4xl font-bold drop-shawdow-2xl"
        style={{ textShadow: `0px 0px 8px rgba(${r}, ${g}, ${b}, 0.7)` }}
      >
        {item.rank}
      </div>
      <Image src={item.imageLink} alt={item.title} className="pb-4" />
      <Link href={item.infoLink} className="flex flex-col items-center">
        <div className="text-xl font-bold">{item.title}</div>
        <div>{item.artistName}</div>
      </Link>
    </div>
  )
}
