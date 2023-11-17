import getMovie from "../../../lib/getMovie";

import Navbar from "../components/Navbar";
import ChangeMotion from "../components/ChaneMotion";
import SlideItems from "../components/SlideItems";

const movieDetails:CategoryDetail = {
    backgroundColor: '#001F54',
    pointColor: '#FDC500',
}

export default async function moviePage() {
  const movieItems= await getMovie();
  const curCategory = 'movie'

  return (
    <div className="flex flex-col">
        <ChangeMotion pathname={curCategory} categoryDetails={movieDetails}>
            <Navbar curpath={curCategory} pointColor={movieDetails.pointColor} />
            <SlideItems items={movieItems}></SlideItems>
        </ChangeMotion>
    </div>
  )
}
