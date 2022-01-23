import React, { ReactElement } from "react";
import DiscoverCard from "components/Card/DiscoverCard";
import Person from "data/Uploader";
import Video from "data/Video";

export default function MostWatchDesktop(): ReactElement {
  
  return (
    <div className="mt-16 hidden lg:block">
      <h1 className="font-medium text-3xl text-white">Most Watched</h1>
      <div className="grid grid-cols-12 gap-5 mt-7">
        {Video.slice(2,Video.length).map((video) => (
          <div className="col-span-3 ">
            <DiscoverCard
              title={video.title}
              baseColor={video.thumb.baseColor}
              person={{
                img: video.person.img,
                name: video.person.name,
                uploaded_at: video.uploadedAt,
                views: video.views,
              }}
              videoLength={video.length}
              videoThumb={video.thumb.img}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
