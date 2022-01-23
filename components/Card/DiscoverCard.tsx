import React, { ReactElement } from "react";
import Image from "next/image";

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

export default function DiscoverCard({...props}: Props): ReactElement {
  return (
    <div className="bg-[#252836] flex w-full flex-col rounded-xl overflow-hidden">
      <div className="relative h-[160px] w-full">
        <div className="w-max rounded-full py-1 px-2 bg-[#242730] bg-opacity-20 absolute top-0 right-0 mt-2 mr-2 z-20 text-white text-[10px] ">
          {props.videoLength}
        </div>
        <Image
          layout="fill"
          alt="discover image"
          src={props.videoThumb}
          objectFit="cover"
        />
      </div>
      <div className="p-5 relative">
        <div id="account name" className="flex gap-5 items-center">
          <p className="text-[#B7B9D2] font-light text-sm ">{props.person.name}</p>
          <div
            id="circle"
            className="w-2 h-2 block rounded-full bg-[#22B07D]"
          ></div>
        </div>
        <div id="video detail">
          <h2 className="font-medium text-white mt-4 mb-3">
            {props.title}
          </h2>
          <p className="text-xs text-[#808191]"> {props.person.views} views • {props.person.uploaded_at} ago </p>
        </div>

        <div
          id="profile-circle"
          className="w-14 h-14 rounded-full overflow-hidden p-1 border border-white border-opacity-10 absolute top-0 right-0 -translate-y-7 mr-5"
        >
          <div className="w-full h-full flex relative rounded-full overflow-hidden">
            <Image
              src={props.person.img}
              layout="fill"
              alt="profile"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
