import BottomLinkNav from "components/sidebar/BottomLinkNav";
import React, { ReactElement } from "react";
import { Home, Video, Bookmark, Category } from "react-iconly";

interface Props {}

export default function BottomNav({}: Props): ReactElement {
  return (
    <nav className="p-5 justify-between lg:hidden bg-[#252836] flex ">
      <BottomLinkNav label="Discover" Logo={Home} url="#" active={true} />
      <BottomLinkNav label="Browse" Logo={Video} url="#" />
      <BottomLinkNav label="Bookmark" Logo={Bookmark} url="#" />
      <BottomLinkNav label="More" Logo={Category} url="#" />
    </nav>
  );
}
