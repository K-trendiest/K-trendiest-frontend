import Navbar from '@/components/Navbar'
import ChangeMotion from '@/components/ChaneMotion'
import SlideItems from '@/components/SlideItems'

export default function PageTemplate({
  categoryDetails,
  items,
}: {
  categoryDetails: CategoryDetail
  items: TrendItem[]
}) {
  return (
    <ChangeMotion
      pathname={categoryDetails.category}
      categoryDetails={categoryDetails}
    >
      <div className="flex flex-col h-screen">
        <Navbar
          curpath={categoryDetails.category}
          pointColor={categoryDetails.pointColor}
        />
        <div className="h-full flex items-center pb-16">
          <SlideItems pointColor={categoryDetails.pointColor} items={items} />
        </div>
      </div>
    </ChangeMotion>
  )
}
