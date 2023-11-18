import getMovie from "../../../lib/getMovie";
import PageTemplate from "../components/PageTemplate";
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
    <PageTemplate
      categoryDetails={movieDetails}
      maxWidth={800}
      items={movies}
    />
  )
}