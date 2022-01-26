import React, { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link"
import useBlurData from "utils/useBlurData"
import numberReadable from "utils/numberReadable";

interface Props {
  title: string;
  uploader: string;
  viewCount: number;
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

  const blurData=useBlurData(120,93)
  return (
    <Link href={"/video"} aria-label="open video">
    <div className="grid grid-cols-3 gap-3 cursor-pointer">
      <div className="col-span-1  h-24 relative">
        <Image
          src={img}
          alt="thumb"
          className="rounded-xl"
          layout="fill"
          objectFit="cover"
          objectPosition={"center left"}
          placeholder="blur"
          blurDataURL={blurData}
        />
      </div>
      <div className="col-span-2 col-start-2 flex flex-col gap-2 text-white tracking-[0.3px]">
        <h2 className="font-medium text-sm ">{title}</h2>
        <p className="text-xs opacity-50 tracking-[0.3px]">{uploader}</p>
        <p className="text-xs opacity-50 tracking-[0.3px]">
          {numberReadable(viewCount) } views . {uploadedAt}
        </p>
      </div>
    </div>
    </Link>
  );
}
