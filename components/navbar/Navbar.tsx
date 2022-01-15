import React, { ReactElement } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

interface Props {}

export default function Navbar({}: Props): ReactElement {
  return (
    <div className="sticky top-0 z-50 bg-[#1F1D2B]">
      <DesktopNav />
      <MobileNav />
    </div>
  );
}
