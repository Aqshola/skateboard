import React, { ReactElement } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import BannerCard from "components/Card/BannerCard";

interface Props {}

export default function DiscoverMobile({}: Props): ReactElement {
  return (
    <div className="lg:hidden">
      <Swiper
        spaceBetween={12}
        slidesPerView={1.1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="w-full">
            <BannerCard
              title="How to do Basic Jumping and how to landing safely"
              videoThumb="/image/bigCard/image 1.png"
              videoLength="7 Min"
              person={{
                name: "Thomas Hope",
                img: "/image/profile/bigProfile2.png",
                uploaded_at: "2 weeks ago",
                views: "53k",
              }}
              baseColor="#40b1c3"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full">
            <BannerCard
              title="How to do Basic Jumping and how to landing safely"
              videoThumb="/image/bigCard/image 1.png"
              videoLength="7 Min"
              person={{
                name: "Thomas Hope",
                img: "/image/profile/bigProfile2.png",
                uploaded_at: "2 weeks ago",
                views: "53k",
              }}
              baseColor="#40b1c3"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
