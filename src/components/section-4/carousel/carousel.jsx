// import Swiper core and required modules
import "./carousel.style.scss";
import { Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import CarouselItems from '../carousel-items.jsx/carousel-items';

const Carousel = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[ Scrollbar, A11y]}
      spaceBetween={100}
      slidesPerView={5}
      
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide><CarouselItems/></SwiperSlide>
      <SwiperSlide><CarouselItems/></SwiperSlide>
      <SwiperSlide><CarouselItems/></SwiperSlide>
      <SwiperSlide><CarouselItems/></SwiperSlide>
      <SwiperSlide><CarouselItems/></SwiperSlide>
      <SwiperSlide><CarouselItems/></SwiperSlide>
      <SwiperSlide><CarouselItems/></SwiperSlide>
      <SwiperSlide><CarouselItems/></SwiperSlide>
      <SwiperSlide><CarouselItems/></SwiperSlide>
      <SwiperSlide><CarouselItems/></SwiperSlide>
      <SwiperSlide><CarouselItems/></SwiperSlide>
      <SwiperSlide><CarouselItems/></SwiperSlide>
      
    </Swiper>
  );
};
export default Carousel;


