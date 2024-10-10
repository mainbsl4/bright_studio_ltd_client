// Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../../assets/css/banner.css";

// import required modules
// import { Pagination, Navigation } from "swiper/modules";

export default function Banner() {
  return (
    <>
      <div className="relative w-full h-[92vh]">
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[50px] text-white [text-shadow:_0_2px_4px_rgb(99_102_241_/_0.8)] leading-snug font-manrope font-extrabold">PROFESSIONAL PHOTO EDITING AND RETOUCHING SERVICES</p>
      <video autoPlay muted loop>
        <source
          src="https://res.cloudinary.com/dqkd7vayw/video/upload/v1722704873/Sequence_01_ktvckk.mp4"
          type="video/mp4"
        />
      </video>
      </div>
      {/* <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
         <p className="xxx">p1</p>
         <h1>h1</h1>
        </SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper> */}
    </>
  );
}
