import React, { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link"

interface Props {
  title: string;
  uploader: string;
  viewCount: string;
  uploadedAt: string;
  img: string;
}

export default function DiscoverCardMobile({
  title,
  uploader,
  uploadedAt,
  viewCount,
  img,
}: Props): ReactElement {
  return (
    <Link href={"/video"} aria-label="open video">
    <div className="grid grid-cols-3 gap-3">
      <div className="col-span-1  h-24 relative">
        <Image
          src={img}
          alt="thumb"
          className="rounded-xl"
          layout="fill"
          objectFit="cover"
          objectPosition={"center left"}
        />
      </div>
      <div className="col-span-2 col-start-2 flex flex-col gap-2 text-white tracking-[0.3px]">
        <h2 className="font-medium text-sm ">{title}</h2>
        <p className="text-xs opacity-50 tracking-[0.3px]">{uploader}</p>
        <p className="text-xs opacity-50 tracking-[0.3px]">
          {viewCount} views . {uploadedAt}
        </p>
      </div>
    </div>
    </Link>
  );
}
