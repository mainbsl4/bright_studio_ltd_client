// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function OUROUTSTANDING() {
  const swiperStyle = {
    width: "100%",
    // height:"400px",
    paddingTop: "50px",
    paddingBottom: "50px",
    // display: "flex",
    // justifyContect:"center",
    // alignItems: "center",
  };

  const slideStyle = {
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "300px",
    height: "300px",
  };

  return (
    <div className=" container mx-auto my-5">
      <div className="lg:px-12 flex justify-center items-center flex-col">
        <p>High-End Retouch</p>
        <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, quo?</h3>
      </div>
      <div style={swiperStyle} className="swiperx">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="swiper-slidex"
      >
        <SwiperSlide style={slideStyle} className="swiper-slidex">
          <img src="https://res.cloudinary.com/dqkd7vayw/image/upload/v1722540520/51_zed5cx.jpg" />
        </SwiperSlide>
        <SwiperSlide style={slideStyle} className="swiper-slidex">
          <img src="https://res.cloudinary.com/dqkd7vayw/image/upload/v1722540510/29_waefdz.jpg" />
        </SwiperSlide>
        
        <SwiperSlide style={slideStyle} className="swiper-slidex">
          <img src="https://res.cloudinary.com/dqkd7vayw/image/upload/v1722540504/26_vrgmni.jpg" />
        </SwiperSlide>
        <SwiperSlide style={slideStyle} className="swiper-slidex">
          <img src="https://res.cloudinary.com/dqkd7vayw/image/upload/v1722540502/23_olwxro.jpg" />
        </SwiperSlide>
        <SwiperSlide style={slideStyle} className="swiper-slidex">
          <img src="https://res.cloudinary.com/dqkd7vayw/image/upload/v1722540497/15_vwsvol.jpg" />
        </SwiperSlide>
        <SwiperSlide style={slideStyle} className="swiper-slidex">
          <img src="https://res.cloudinary.com/dqkd7vayw/image/upload/v1722540512/38_oy0xn2.jpg" />
        </SwiperSlide>
        <SwiperSlide style={slideStyle} className="swiper-slidex">
          <img src="https://res.cloudinary.com/dqkd7vayw/image/upload/v1722540495/11_per6z6.jpg" />
        </SwiperSlide>
        <SwiperSlide style={slideStyle} className="swiper-slidex">
          <img src="https://res.cloudinary.com/dqkd7vayw/image/upload/v1722540514/39_ig0ufk.jpg" />
        </SwiperSlide>
        <SwiperSlide style={slideStyle} className="swiper-slidex">
          <img src="https://res.cloudinary.com/dqkd7vayw/image/upload/v1722540514/35_xj3eue.jpg" />
        </SwiperSlide>
        <SwiperSlide style={slideStyle} className="swiper-slidex">
          <img src="https://res.cloudinary.com/dqkd7vayw/image/upload/v1722540517/49_v4aoqt.jpg" />
        </SwiperSlide>
        <SwiperSlide style={slideStyle} className="swiper-slidex">
          <img src="https://res.cloudinary.com/dqkd7vayw/image/upload/v1722540516/43_b0j0lv.jpg" />
        </SwiperSlide>
        <SwiperSlide style={slideStyle} className="swiper-slidex">
          <img src="https://res.cloudinary.com/dqkd7vayw/image/upload/v1722540512/36_mrznor.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
  );
}
