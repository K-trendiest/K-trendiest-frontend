import getMovie from "../../../lib/getMovie";

import Navbar from "../components/Navbar";
import ChangeMotion from "../components/ChaneMotion";
import SlideItems from "../components/SlideItems";
import { notFound } from "next/navigation";

const movieDetails:CategoryDetail = {
  category: "movie",
  backgroundColor: '#001F54',
  pointColor: '#ffebcd',
}

export default async function moviePage() {
  const movies = await getMovie();

  if (!movies) {
    notFound();
  }
  return (
  <ChangeMotion pathname={movieDetails.category} categoryDetails={movieDetails}>
    <div className="flex flex-col items-center h-screen">
      <Navbar curpath={movieDetails.category} pointColor={movieDetails.pointColor} />
      <div className={`max-w-[800px] h-auto`}>
        <SlideItems backgroundColor={movieDetails.backgroundColor} maxWidth={700} items={movies}></SlideItems>
      </div>
    </div>
  </ChangeMotion>
  )
}