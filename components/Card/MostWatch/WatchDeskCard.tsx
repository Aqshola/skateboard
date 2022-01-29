import React, { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import numberReadable from "utils/numberReadable";
import useBlurData from "utils/useBlurData";

interface Props {
  title: string;
  videoLength: string;
  videoThumb: string;
  person: {
    img: string;
    name: string;
    views: number;
    uploaded_at: string;
  };
  type?: "small" | "big";
  baseColor: string;
}

export default function DiscoverCard({ ...props }: Props): ReactElement {
  const blurData = useBlurData(120, 93);
  return (
    <Link href={"/video"} aria-label="open video">
      <div className="flex w-full cursor-pointer flex-col overflow-hidden rounded-xl bg-[#252836]">
        <div className="relative h-[160px] w-full">
          <div className="absolute top-0 right-0 z-20 mt-2 mr-2 w-max rounded-full bg-[#242730] bg-opacity-20 py-1 px-2 text-[10px] text-white ">
            {props.videoLength}
          </div>
          <Image
            layout="fill"
            alt="discover image"
            src={props.videoThumb}
            objectFit="cover"
          />
        </div>
        <div className="relative p-5">
          <div id="account name" className="flex items-center gap-5">
            <p className="text-sm font-light text-[#B7B9D2] ">
              {props.person.name}
            </p>
            <div
              id="circle"
              className="block h-2 w-2 rounded-full bg-[#22B07D]"
            ></div>
          </div>
          <div id="video detail">
            <h2 className="mt-4 mb-3 font-medium text-white">{props.title}</h2>
            <p className="text-xs text-[#808191]">
              {numberReadable(props.person.views)} views •{" "}
              {props.person.uploaded_at} ago{" "}
            </p>
          </div>

          <div
            id="profile-circle"
            className="absolute top-0 right-0 mr-5 h-14 w-14 -translate-y-7 overflow-hidden rounded-full border border-white border-opacity-10 p-1"
          >
            <div className="relative flex h-full w-full overflow-hidden rounded-full">
              <Image
                src={props.person.img}
                layout="fill"
                alt="profile"
                objectFit="cover"
                placeholder="blur"
                blurDataURL={blurData}
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
