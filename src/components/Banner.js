import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Banner = () => {
  return (
    <div className="banner">
      <Swiper spaceBetween={30} slidesPerView={1} loop>
        <SwiperSlide>
          <img src="/images/banner.png" alt="Yumbox Banner 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/banner2.png" alt="Yumbox Banner 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/banner3.png" alt="Yumbox Banner 3" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;