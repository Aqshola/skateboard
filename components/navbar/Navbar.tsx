import React, { ReactElement } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

interface Props {}

export default function Navbar({}: Props): ReactElement {
  return (
    <>
      <DesktopNav />
      <MobileNav />
    </>
  );
}
