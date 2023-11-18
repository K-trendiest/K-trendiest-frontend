type Category = 'movie' | 'youtube' | 'music';

type CategoryDetail = {
    category: Category;
    backgroundColor: string;
    pointColor: string;
}

type PageProps = {
    categoryDetails: CategoryDetail;
    items: any[];
}

type TrendItem = {
    rank: number;
    title: string;
    artistName?: string;
    imageLink: string;
    infoLink: string;
}