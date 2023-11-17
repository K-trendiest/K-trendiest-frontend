type Category = 'movie' | 'youtube' | 'music';

type CategoryDetail = {
    backgroundColor: string;
    pointColor: string;
}

type TrendItem = {
    rank: number;
    title: string;
    artistName?: string;
    imageLink: string;
    infoLink: string;
}