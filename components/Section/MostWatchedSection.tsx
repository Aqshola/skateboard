import React, { ReactElement } from "react";
import MostWatchDesktop from "./MostWatched/MostWatchDesktop";
import MostWatchMobile from "./MostWatched/MostWatchMobile";

interface Props {}

export default function MostWatchedSection({}: Props): ReactElement {
  return (
    <div className="z-0 relative">
      <MostWatchDesktop />
      <MostWatchMobile />
    </div>
  );
}
