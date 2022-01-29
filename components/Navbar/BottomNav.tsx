import BottomLinkNav from "components/Sidebar/BottomLinkNav";
import React, { ReactElement, useState } from "react";
import { Home, Video, Bookmark, Category } from "react-iconly";

const bottomURL = [
  {
    label: "Discover",
    logo: Home,
  },
  {
    label: "Browse",
    logo: Video,
  },
  {
    label: "Bookmark",
    logo: Bookmark,
  },
  {
    label: "More",
    logo: Category,
  },
];

export default function BottomNav(): ReactElement {
  const [active, setactive] = useState<string>("Discover");
  return (
    <nav className="z-50 flex justify-between bg-[#252836] p-5 pt-3 lg:hidden">
      {bottomURL.map((link) => (
        <BottomLinkNav
          key={link.label}
          onClick={() => setactive(link.label)}
          label={link.label}
          Logo={link.logo}
          active={active == link.label}
        />
      ))}
    </nav>
  );
}
