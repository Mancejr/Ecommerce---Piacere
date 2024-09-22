import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";

// Import Swiper Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import coverImg1 from "../assets/cover-image-1.jpg";
import coverImg2 from "../assets/cover-image-2.jpg";
import coverImg3 from "../assets/cover-image-3.jpg";
import coverImg4 from "../assets/cover-image-4.jpg";
import "./SwiperImage.css";
const SwiperImage = () => {
  return (
    <div className="swiper-image flex w-full h-full">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        loopAddBlankSlides={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={coverImg1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={coverImg2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={coverImg3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={coverImg4} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperImage;
