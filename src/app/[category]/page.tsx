'use client'

import { usePathname } from 'next/navigation';
import Navbar from '../components/Navbar';

const categoryDetails: CategoryDetail = {
    music: {
        backgroundColor: '#FFFFFF',
        pointColor: '#0466C8'
    },
    youtube: {
        backgroundColor: '#000000',
        pointColor: '#D90429'
    },
    movie: {
        backgroundColor: '#001F54',
        pointColor: '#FDC500'
    },
};

export default function CategoryDetail() {
    const pathname = usePathname();
    const category = pathname.replace('/','') as Category;

    const categoryDetail = categoryDetails[category];

    if (!categoryDetail) {
        return <div>Category not found</div>;
    }

    return (
        <div>
            <div style={{ backgroundColor: categoryDetail.backgroundColor, color: categoryDetail.pointColor }}>
                <Navbar curpath={pathname} pointColor={categoryDetail.pointColor}/>
                <div className='h-screen'>{category} page</div>
            </div>
        </div>
    );
};
