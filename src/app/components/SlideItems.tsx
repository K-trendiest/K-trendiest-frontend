'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import RankingList from './RankingList';

export default function SlideItems({backgroundColor, maxWidth, items}: {
  backgroundColor: string;
  maxWidth: number;
  items:TrendItem[];
}) {
  return (
    <div className=''>
      <Swiper
        grabCursor={true}
        loop={false}
        centeredSlides={true}
        slidesPerView={3}
        effect={'coverflow'}
        coverflowEffect={{
          rotate: 60,
          scale: 1,
          slideShadows: false,
        }}
        modules={[EffectCoverflow]}
        className={`max-w-[${maxWidth}px] h-auto`}
      >   
        {items.map((item) => (
          <SwiperSlide 
            key={item.rank}>
              <div>
                <RankingList backgroundColor={backgroundColor} item={item} />
              </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
