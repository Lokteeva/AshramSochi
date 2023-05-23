import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

 const Slider = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination,Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation={{ clickable: true }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <img className="center slider"  src="/DSC00288.jpg"/>
      </SwiperSlide>
      <SwiperSlide>
        <img className="center slider"  src="/DSC00318.jpg"/>
      </SwiperSlide>
      <SwiperSlide>
        <img className="center slider"  src="/DSC00324.jpg"/>
      </SwiperSlide>
      <SwiperSlide>
        <img className="center slider"  src="/DSC00347.jpg"/>
      </SwiperSlide>  
      <SwiperSlide>
        <img className="center slider"  src="/DSC00349.jpg"/>
      </SwiperSlide>
      <SwiperSlide>
        <img className="center slider"  src="/DSC00358.jpg"/>
      </SwiperSlide>
      <SwiperSlide>
        <img className="center slider"  src="/DSC00404.jpg"/>
      </SwiperSlide> 
      <SwiperSlide>
        <img className="center slider"  src="/DSC00419.jpg"/>
      </SwiperSlide>
      <SwiperSlide>
        <img className="center slider"  src="/DSC00421.jpg"/>
      </SwiperSlide>
      <SwiperSlide>
        <img className="center slider"  src="/DSC00442.jpg"/>
      </SwiperSlide>    
    </Swiper>
  );
};

export default Slider

