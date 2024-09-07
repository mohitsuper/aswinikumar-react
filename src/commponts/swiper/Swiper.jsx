import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

let images = [
  {
    img: "img/img1.png"
  },
  {
    img: "img/IMG4.jpg"
  }, 
  {
    img: "img/IMG3.jpg"
  }, 
  {
    img: "img/img5.JPG"
  },
]

export default function HeroSwiper() {
  return (
    <div className='p-2  container mx-auto '>
      <Swiper
        modules={[Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={5}
        autoplay={{
          enabled: true,
          delay: 3000,
          disableOnInteraction: true,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { // sm
            slidesPerView: 1,
          },
          1280: { // xl
            slidesPerView: 2,
          },
        }}
      >
        {
          images.map((v, i) => {
            return (
              <SwiperSlide key={i}>
                <img src={v.img} alt="" />
              </SwiperSlide>
            )
          })
        }     
      </Swiper>
    </div>
  );
}