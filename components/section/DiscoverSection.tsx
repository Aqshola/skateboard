import React, { ReactElement } from "react";
import DiscoverDesktop from "./discover/DiscoverDesktop";
import DiscoverMobile from "./discover/DiscoverMobile";


interface Props {}

export default function DiscoverSection({}: Props): ReactElement {
  return (
    <>
      <DiscoverDesktop />
      <DiscoverMobile />
    </>
  );
}
