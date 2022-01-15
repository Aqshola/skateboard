import React, { ReactElement } from "react";
import LinkSideBar from "./LinkSideBar";
import { Home, ArrowRight, Download, Wallet, Paper } from "react-iconly";

interface Props {}

export default function SideBar({}: Props): ReactElement {
  return (
    <>
      <h2 className="font-semibold  text-sm text-[#808191] mb-6">MENU</h2>
      <div className="flex flex-col mt-6 gap-8">
        <LinkSideBar label="Discover" active={true} Logo={Home} />
        <LinkSideBar label="Trending" Logo={ArrowRight} />
        <LinkSideBar label="Streaming" Logo={Download} />
        <LinkSideBar label="Playlist" Logo={Paper} />
        <LinkSideBar label="Bookmark" Logo={Wallet} />
      </div>

      <span className="h-[1px] mt-12 w-36 block bg-[#34373C]" />
      <h2 className="font-semibold text-[#808191] text-sm mt-12">Category</h2>
      <div className="flex flex-col mt-6 gap-8">
        <LinkSideBar label="Live Stream" active={true} Logo={Home} />
        <LinkSideBar label="Tutorial" Logo={ArrowRight} />
        <LinkSideBar label="Competition" Logo={Download} />
        <LinkSideBar label="Community" Logo={Paper} />
      </div>
    </>
  );
}
