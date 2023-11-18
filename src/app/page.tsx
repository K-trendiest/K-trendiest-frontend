import getYoutube from '../../lib/getYoutube';

import Navbar from "./components/Navbar";
import ChangeMotion from "./components/ChaneMotion";
import SlideItems from "./components/SlideItems";
import { notFound } from 'next/navigation';

const mainDetails:CategoryDetail = {
    category: "youtube",
    backgroundColor: '#000000',
    pointColor: '#D90429',
}
export default async function mainPage() {
    const youtube = await getYoutube();

    if(!youtube) {
        notFound();
    }

    return (
        <ChangeMotion pathname={mainDetails.category} categoryDetails={mainDetails}>
            <div className="flex flex-col h-screen">
                <Navbar curpath={mainDetails.category} pointColor={mainDetails.pointColor} />
                <div className="flex flex-col justify-center pb-16 h-full">
                    <SlideItems backgroundColor={mainDetails.backgroundColor} maxWidth={1000} items={youtube}></SlideItems>
                </div>
            </div>
        </ChangeMotion>
    );
};
