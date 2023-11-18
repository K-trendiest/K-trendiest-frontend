import Link from "next/link";

export default function RankingList({ backgroundColor, item }
: { 
  backgroundColor: string;
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
          <div style={{backgroundColor: backgroundColor }} className="text-lg">
            {item.title}
          </div>
          <div>
            {item.artistName}
          </div>
        </Link>
    </div>
  )
}