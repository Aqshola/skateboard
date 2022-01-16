import DiscoverCardMobile from "components/Card/DiscoverCardMobile";
import React, { ReactElement } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface Props {}

export default function MostWatchMobile({}: Props): ReactElement {
  return (
    <div className="w-full mt-8 lg:hidden">
      <h1 className="mb-5 text-white font-semibold">Most Watched</h1>
      <Swiper spaceBetween={14} slidesPerView={1.07}>
        <SwiperSlide>
          <div className="flex flex-col gap-6">
            <DiscoverCardMobile
              title="Basic how to ride your skateboard comfortly"
              viewCount="53K"
              uploader="Andy William"
              uploadedAt="2 weeks ago"
              img="/image/smallCard/image 5.png"
            />
            <DiscoverCardMobile
              title="Basic how to ride your skateboard comfortly"
              viewCount="53K"
              uploader="Andy William"
              uploadedAt="2 weeks ago"
              img="/image/smallCard/image 5.png"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-6">
            <DiscoverCardMobile
              title="Basic how to ride your skateboard comfortly"
              viewCount="53K"
              uploader="Andy William"
              uploadedAt="2 weeks ago"
              img="/image/smallCard/image 5.png"
            />
            <DiscoverCardMobile
              title="Basic how to ride your skateboard comfortly"
              viewCount="53K"
              uploader="Andy William"
              uploadedAt="2 weeks ago"
              img="/image/smallCard/image 5.png"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
