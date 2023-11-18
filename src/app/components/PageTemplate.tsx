import Navbar from "./Navbar";
import ChangeMotion from "./ChaneMotion";
import SlideItems from "./SlideItems";

export default function PageTemplate({
    categoryDetails,
    maxWidth,
    items,
}: {
    categoryDetails: CategoryDetail;
    maxWidth: number;
    items: TrendItem[];
}) {
  return (
    <ChangeMotion 
      pathname={categoryDetails.category} 
      categoryDetails={categoryDetails}
    >
      <div className="h-screen flex flex-col">
          <Navbar curpath={categoryDetails.category} pointColor={categoryDetails.pointColor} />
          <div className="flex flex-grow flex-row items-center pb-16">
            <SlideItems maxWidth={maxWidth} items={items} />
          </div>
      </div>
    </ChangeMotion>
  )
}
