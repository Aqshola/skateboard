import BottomLinkNav from "components/Sidebar/BottomLinkNav";
import React, { ReactElement } from "react";
import { Home, Video, Bookmark, Category } from "react-iconly";


export default function BottomNav(): ReactElement {
  return (
    <nav className="p-5 pt-3 justify-between lg:hidden bg-[#252836] flex z-50">
      <BottomLinkNav label="Discover" Logo={Home} url="#" active={true} />
      <BottomLinkNav label="Browse" Logo={Video} url="#" />
      <BottomLinkNav label="Bookmark" Logo={Bookmark} url="#" />
      <BottomLinkNav label="More" Logo={Category} url="#" />
    </nav>
  );
}