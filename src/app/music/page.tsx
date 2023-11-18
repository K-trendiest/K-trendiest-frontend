import getMusic from "../../../lib/getMusic";

import Navbar from "../components/Navbar";
import ChangeMotion from "../components/ChaneMotion";
import SlideItems from "../components/SlideItems";
import { notFound } from "next/navigation";

const musicDetails:CategoryDetail = {
  category: "music",
  backgroundColor: '#FFFFFF',
  pointColor: '#0466C8',
}

export default async function musicPage() {
  const music= await getMusic();

  if (!music) {
    notFound();
  }

  return (
    <ChangeMotion pathname={musicDetails.category} categoryDetails={musicDetails}>
      <div className="flex flex-col items-center h-screen">
        <Navbar curpath={musicDetails.category} pointColor={musicDetails.pointColor} />
        <div className={`max-w-[1000px] h-auto`}>
          <SlideItems backgroundColor={musicDetails.backgroundColor} maxWidth={1000} items={music}></SlideItems>
        </div>
      </div>
    </ChangeMotion>
)
}
