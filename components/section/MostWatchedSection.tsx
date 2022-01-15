import React, { ReactElement } from "react";
import DiscoverCard from "components/Card/DiscoverCard";

interface Props {}

export default function MostWatchedSection({}: Props): ReactElement {
  return (
    <div className="mt-16">
      <h1 className="font-medium text-3xl text-white">Most Watched</h1>
      <div className="grid grid-cols-12 gap-5 mt-7">
        <div className="col-span-3 ">
          <DiscoverCard />
        </div>
        <div className="col-span-3 ">
          <DiscoverCard />
        </div>
        <div className="col-span-3 ">
          <DiscoverCard />
        </div>
        <div className="col-span-3 ">
          <DiscoverCard />
        </div>
      </div>
    </div>
  );
}
