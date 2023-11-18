import Link from "next/link";

export default function RankingList({ item }
: { 
  item:TrendItem;
}) {
  return (
    <div key={item.rank} className="flex flex-col">
        <div className="text-6xl font-bold ">
          {item.rank}
        </div>
        <img 
          src={item.imageLink} 
          alt={item.title}
        />
        <Link href={item.infoLink} className="flex flex-col items-center">
          <div className="text-lg">
            {item.title}
          </div>
          <div>
            {item.artistName}
          </div>
        </Link>
    </div>
  )
}