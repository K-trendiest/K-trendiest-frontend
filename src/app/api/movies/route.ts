import { NextResponse } from "next/server";

const DATA_SOURCE_URL = 'http://172.30.1.55:8080/movies';

export async function GET() {
    const res = await fetch(DATA_SOURCE_URL);

    const movies: TrendItem[] = await res.json();

    return NextResponse.json(movies)
}


// export async function GET() {
//     const movies = [
//         {"rank":"1","title":"프레디의 피자가게","imageLink":"http://file.koreafilm.or.kr/thm/02/99/18/21/tn_DPF028181.jpg","infoLink":"https://www.kmdb.or.kr/db/kor/detail/movie/F/59613"},{"rank":"2","title":"더 마블스","imageLink":"http://file.koreafilm.or.kr/thm/02/99/18/24/tn_DPF028292.jpg","infoLink":"https://www.kmdb.or.kr/db/kor/detail/movie/F/58518"},{"rank":"3","title":"그대들은 어떻게 살 것인가","imageLink":"http://file.koreafilm.or.kr/thm/02/99/18/19/tn_DPF028018.jpg","infoLink":"https://www.kmdb.or.kr/db/kor/detail/movie/F/59520"},{"rank":"4","title":"헝거게임: 노래하는 새와 뱀의 발라드","imageLink":"http://file.koreafilm.or.kr/thm/02/99/18/22/tn_DPF028214.jpg","infoLink":"https://www.kmdb.or.kr/db/kor/detail/movie/F/59544"},{"rank":"5","title":"소년들","imageLink":"http://file.koreafilm.or.kr/thm/02/99/18/22/tn_DPK021330.jpg","infoLink":"https://www.kmdb.or.kr/db/kor/detail/movie/K/35400"},{"rank":"6","title":"30일","imageLink":"http://file.koreafilm.or.kr/thm/02/99/18/17/tn_DPK021117.jpg","infoLink":"https://www.kmdb.or.kr/db/kor/detail/movie/K/35184"},{"rank":"7","title":"오늘 밤, 세계에서 이 사랑이 사라진다 해도","imageLink":"http://file.koreafilm.or.kr/thm/02/99/17/86/tn_DPF026057.jpg","infoLink":"https://www.kmdb.or.kr/db/kor/detail/movie/F/57023"},{"rank":"8","title":"다크 나이트","imageLink":"http://file.koreafilm.or.kr/thm/02/00/01/08/tn_DPF000611.jpg","infoLink":"https://www.kmdb.or.kr/db/kor/detail/movie/F/21819"},{"rank":"9","title":"여귀교- 저주를 부르는 게임","imageLink":"http://file.koreafilm.or.kr/thm/02/99/18/23/tn_DPF028279.jpg","infoLink":"https://www.kmdb.or.kr/db/kor/detail/movie/F/59640"},{"rank":"10","title":"더 와일드: 야수들의 전쟁","imageLink":"http://file.koreafilm.or.kr/thm/02/99/18/24/tn_DPK021406.jpg","infoLink":"https://www.kmdb.or.kr/db/kor/detail/movie/K/35412"}
//     ]

//     return NextResponse.json(movies)
// }