import React, { ReactElement } from "react";
import MostWatchDesktop from "./mostWatched/MostWatchDesktop";
import MostWatchMobile from "./mostWatched/MostWatchMobile";

interface Props {}

export default function MostWatchedSection({}: Props): ReactElement {
  return (
    <div className="z-0 relative">
      <MostWatchDesktop />
      <MostWatchMobile />
    </div>
  );
}
