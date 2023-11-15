type Category = 'movie' | 'youtube' | 'music';

type CategoryDetail = Record<Category, {
    backgroundColor: string;
    pointColor: string;
}>

type TrendItem = {
    rank: number;
    name: string;
    imageUrl: string;
    connectUrl: string;
    category: Category;
}