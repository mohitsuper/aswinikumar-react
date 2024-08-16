// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

let images =[
    {
        img:"img/img1.png"
    },
    {
        img:"img/IMG4.jpg"
    }, 
    {
        img:"img/IMG3.jpg"
    }, 
    {
        img:"img/img5.JPG"
    },
]
export default function HeroSwiper() {
  return (
    <div className='p-2'>
       <Swiper
      modules={[ Pagination, Scrollbar, A11y,Autoplay]}
      spaceBetween={5}
      slidesPerView={1}
      autoplay={{
        enabled: true,
        delay: 3000,
        disableOnInteraction: true,
      }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
     {
        images.map((v,i)=>{
            return(
                <SwiperSlide>
                    <img src={v.img} alt="" />
                </SwiperSlide>
            )
        })
     }     
    </Swiper>
    </div>
    
  );
};
