import React, { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import useBlurData from "utils/useBlurData";
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
  const blurData = useBlurData(120, 93);
  return (
    <Link href={"/video"} aria-label="open video">
      <div className="grid cursor-pointer grid-cols-3 gap-3">
        <div className="relative  col-span-1 h-24">
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
        <div className="col-span-2 col-start-2 flex flex-col gap-2 tracking-[0.3px] text-white">
          <h2 className="text-sm font-medium ">{title}</h2>
          <p className="text-xs tracking-[0.3px] opacity-50">{uploader}</p>
          <p className="text-xs tracking-[0.3px] opacity-50">
            {numberReadable(viewCount)} views . {uploadedAt}
          </p>
        </div>
      </div>
    </Link>
  );
}
