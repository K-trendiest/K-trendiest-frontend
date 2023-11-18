import getYoutube from '../../lib/getYoutube';
import PageTemplate from './components/PageTemplate';
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
        <PageTemplate
            categoryDetails={mainDetails}
            maxWidth={1200}
            items={youtube}
        />
    );
};
