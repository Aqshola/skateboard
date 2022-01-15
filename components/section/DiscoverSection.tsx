import React, { ReactElement } from "react";
import BannerCard from "components/Card/BannerCard";

interface Props {}

export default function DiscoverSection({}: Props): ReactElement {
  return (
    <div>
      <div>
        <h1 className="font-semibold text-white text-5xl">Discover</h1>
        <div className="grid-cols-12 mt-7 gap-5 hidden lg:grid">
          <div className="col-span-8">
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
          <div className="col-span-4">
            <BannerCard
              type="small"
              title="Skateboard
									Tips You need
									to know"
              videoThumb="/image/bigCard/image 3.png"
              videoLength="7 Min"
              person={{
                name: "Thomas Hope",
                img: "/image/profile/bigProfile2.png",
                uploaded_at: "2 weeks ago",
                views: "53k",
              }}
              baseColor="#e8ad67"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
