import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/scss";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation, } from "swiper";
import LinkBanner from "./LinkBanner";


const SwiperComponent = ({images}) => {
  return (
    <Swiper
      scrollbar={{ draggable: true }}
      navigation
      modules={[ Autoplay, Navigation,]}
    >
       { images && images.map(({id, imgURL}) => (
          <SwiperSlide key={id}>
            <LinkBanner num={id} imgURL={imgURL} />
          </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;