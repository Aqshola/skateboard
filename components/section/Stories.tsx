import React, { ReactElement } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Story from "components/story/Story";

interface Props {}

export default function Stories({}: Props): ReactElement {
  return (
    <div className="pl-6 z-0 lg:hidden">
      <Swiper
        spaceBetween={12}
        slidesPerView={4.9}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Story img="/image/profile/bigProfile1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <Story img="/image/profile/bigProfile2.png" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
