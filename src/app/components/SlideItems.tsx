'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import RankingList from './RankingList';

export default function SlideItems({items}: {items:TrendItem[]}) {
  return (
    <div>
        <Swiper
                spaceBetween={30}
                slidesPerView={5}
                modules={[Pagination]}
                loop={true}
            >   
                {items.map((item) => (
                    <SwiperSlide>
                        <RankingList item={item} />
                    </SwiperSlide>
                ))}
            </Swiper>
    </div>
  )
}
