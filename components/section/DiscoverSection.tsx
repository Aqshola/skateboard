import React, { ReactElement } from "react";
import DiscoverDesktop from "./Discover/DiscoverDesktop";
import DiscoverMobile from "./Discover/DiscoverMobile";


interface Props {}

export default function DiscoverSection({}: Props): ReactElement {
  return (
    <>
      <DiscoverDesktop />
      <DiscoverMobile />
    </>
  );
}
