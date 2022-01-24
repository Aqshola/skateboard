import React, { ReactElement, useState } from "react";
import LinkSideBar from "./LinkSideBar";
import { Home, ArrowRight, Download, Wallet, Paper } from "react-iconly";

interface Props {}

const LinkList = [
  {
    label: "Discover",
    logo: Home,
  },
  {
    label: "Trending",
    logo: ArrowRight,
  },
  {
    label: "Streaming",
    logo: Download,
  },
  {
    label: "Playlist",
    logo: Paper,
  },
  {
    label: "Bookmark",
    logo: Wallet,
  },
  {
    label: "Live Stream",
    logo: Home,
  },
  {
    label: "Tutorial",
    logo: ArrowRight,
  },
  {
    label: "Competition",
    logo: Download,
  },
  {
    label: "Community",
    logo: Paper,
  },
];

export default function SideBar({}: Props): ReactElement {
  const [activeLink, setactiveLink] = useState("Discover");
  return (
    <>
      <h2 className="font-semibold  text-sm text-[#808191] mb-6">MENU</h2>
      <div className="flex flex-col mt-6 gap-8">
        {LinkList.slice(0, 5).map((list, i) => (
          <LinkSideBar
            key={i + "link1"}
            label={list.label}
            active={list.label === activeLink}
            Logo={list.logo}
            eventClick={() => {
              setactiveLink(list.label);
            }}
          />
        ))}
      </div>

      <span className="h-[1px] mt-12 w-36 block bg-[#34373C]" />
      <h2 className="font-semibold text-[#808191] text-sm mt-12">Category</h2>
      <div className="flex flex-col mt-6 gap-8">
        {LinkList.slice(5, 9).map((list, i) => (
          <LinkSideBar
            key={i + "link2"}
            label={list.label}
            active={list.label === activeLink}
            Logo={list.logo}
            eventClick={() => {
              setactiveLink(list.label);
            }}
          />
        ))}
      </div>
    </>
  );
}
