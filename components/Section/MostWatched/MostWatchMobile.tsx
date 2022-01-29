import WatchMobCard from "components/Card/MostWatch/WatchMobCard";
import React, { ReactElement } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Video from "data/Video";
import next from "next";
import { Video as VideoType } from "type/type";

interface Props {}

export default function MostWatchMobile({}: Props): ReactElement {
  const videoList = groupArray<VideoType>(Video.slice(2, Video.length));

  return (
    <div className="w-full mt-8 lg:hidden">
      <h1 className="mb-5 text-white font-semibold">Most Watched</h1>
      <Swiper spaceBetween={14} slidesPerView={1.07}>
        {videoList.map((video, i) => (
          <SwiperSlide key={"most-watch-mobile" + i}>
            <div className="flex flex-col gap-6">
              {video.map((child, j) => (
                <WatchMobCard
                  key={"most-watch-mobile-child" + j}
                  title={child.title}
                  viewCount={child.views}
                  uploader={child.person.name}
                  uploadedAt={child.uploadedAt}
                  img={child.thumb.img}
                />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

function groupArray<T>(data: Array<T>): Array<T[]> {
  let count = 0;
  let array: any[] = [];
  let group: any[] = [];
  for (let i = 0; i < data.length; i++) {
    group.push(data[i]);
    count++;
    if (count == 2) {
      array.push(group);
      group = [];
      count = 0;
      next;
    }
  }

  return array;
}
