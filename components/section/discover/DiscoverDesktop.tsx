import React, { ReactElement } from "react";
import DiscoverCard from "components/Card/Discover/DiscoverCard";
import Video from "data/Video";



export default function DiscoverDesktop(): ReactElement {
  return (
    <div>
      <h1 className="font-semibold text-white text-5xl hidden lg:block">
        Discover
      </h1>
      <div className="grid-cols-12 mt-7 gap-5 hidden lg:grid">
        <div className="col-span-8">
          <DiscoverCard
            title={Video[0].title}
            videoThumb={Video[0].thumb.img}
            videoLength={Video[0].length}
            person={{
              name: Video[0].person.name,
              img: Video[0].person.img,
              uploaded_at: Video[0].uploadedAt,
              views: Video[0].views,
            }}
            baseColor={Video[0].thumb.baseColor}
          />
        </div>
        <div className="col-span-4">
        <DiscoverCard
            title={Video[1].title}
            videoThumb={Video[1].thumb.img}
            videoLength={Video[1].length}
            person={{
              name: Video[1].person.name,
              img: Video[1].person.img,
              uploaded_at: Video[1].uploadedAt,
              views: Video[1].views,
            }}
            baseColor={Video[1].thumb.baseColor}
          />
        </div>
      </div>
    </div>
  );
}
