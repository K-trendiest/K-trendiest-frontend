import getMusic from "../../../lib/getMusic";

import Navbar from "../components/Navbar";
import ChangeMotion from "../components/ChaneMotion";
import SlideItems from "../components/SlideItems";

const movieDetails:CategoryDetail = {
    backgroundColor: '#FFFFFF',
    pointColor: '#0466C8',
}

export default async function musicPage() {
  const movieItems= await getMusic();
  const curCategory = 'music'

  return (
    <div className="flex flex-col">
        <ChangeMotion pathname={curCategory} categoryDetails={movieDetails}>
            <Navbar curpath={curCategory} pointColor={movieDetails.pointColor} />
            <SlideItems items={movieItems}></SlideItems>
        </ChangeMotion>
    </div>
  )
}
