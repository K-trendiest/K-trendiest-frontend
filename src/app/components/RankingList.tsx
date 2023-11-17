import Link from "next/link";

export default function RankingList({ item }: { item:TrendItem }) {
  return (
    <div key={item.rank}>
      {/* <Link href={item.infoLink}> */}
      <div>
          <div className='text-4xl font-bold'>
            {item.rank}
          </div>
          <img src={item.imageLink} alt={item.title} />
          <div className='flex justify-center '>
            {item.title}
            <br></br>
            {item.artistName}
          </div>
      </div>
      {/* </Link> */}
    </div>
  )
}
