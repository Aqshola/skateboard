import { useRouter } from "next/router";
import React, { ReactElement } from "react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import NavVideo from "./NavVideo";

interface Props {}

export default function Navbar({}: Props): ReactElement {
  const route = useRouter();

  return (
    <div className="sticky top-0 z-50 bg-[#1F1D2B]">
      <DesktopNav />

      {route.pathname === "/video" ? <NavVideo /> : <MobileNav />}
    </div>
  );
}
