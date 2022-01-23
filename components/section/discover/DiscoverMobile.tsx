import React, { ReactElement } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import BannerCard from "components/Card/BannerCard";
import Video from "data/Video";


export default function DiscoverMobile(): ReactElement {
  return (
    <div className="lg:hidden">
      <Swiper spaceBetween={12} slidesPerView={1.1}>
        {Video.slice(0, 2).map((video, i) => (
          <SwiperSlide>
            <div className="w-full">
              <BannerCard
                key={i + "mobile discover"}
                title={video.title}
                videoThumb={video.thumb.img}
                videoLength={video.length}
                person={{
                  name: video.person.name,
                  img: video.person.img,
                  uploaded_at: video.uploadedAt,
                  views: video.views,
                }}
                baseColor={video.thumb.baseColor}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
