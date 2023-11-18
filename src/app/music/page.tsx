import getMusic from "../../../lib/getMusic";
import PageTemplate from "../components/PageTemplate";
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
    <PageTemplate
      categoryDetails={musicDetails}
      maxWidth={1000}
      items={music}
    />
  )
}
