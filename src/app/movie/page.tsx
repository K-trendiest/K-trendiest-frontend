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
    <div className="flex flex-col h-screen">
      <Navbar curpath={movieDetails.category} pointColor={movieDetails.pointColor} />
      <div className="flex flex-col justify-center pb-10 h-full">
        <SlideItems backgroundColor={movieDetails.backgroundColor} maxWidth={800} items={movies}></SlideItems>
      </div>
    </div>
  </ChangeMotion>
  )
}