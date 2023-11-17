//import getYoube from '';
import getMovie from '../../lib/getMovie';

import Navbar from "./components/Navbar";
import ChangeMotion from "./components/ChaneMotion";
import SlideItems from "./components/SlideItems";

const mainDetails:CategoryDetail = {
    backgroundColor: '#000000',
    pointColor: '#D90429',
}
export default async function mainPage() {
    // const youtubeItems= await getYoutube();
    const movieItems= await getMovie();
    const curCategory = 'youtube'

    return (
        <div className="flex flex-col">
            <ChangeMotion pathname={curCategory} categoryDetails={mainDetails}>
                <Navbar curpath={curCategory} pointColor={mainDetails.pointColor} />
                <SlideItems items={movieItems}></SlideItems>
            </ChangeMotion>
        </div>
      );
};
