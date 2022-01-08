import React, { ReactElement } from "react";
import Image from "next/image";

interface Props {
  title: string;
  videoLength: string;
  videoThumb: string;
  person: {
    img: string;
    name: string;
    views: string;
    uploaded_at: string;
  };
  baseColor: string;
}

export default function BannerCard(props: Props): ReactElement {
  return (
    <div className="w-full h-[230px] max-h-[250px] relative rounded-xl text-xl overflow-hidden lg:min-h-[350px] lg:max-h-[350px]">
      <div className="absolute w-full object-cover lg:object-none  object-left-top top-0 bottom-0 z-0 min-h-[500px]">
        <Image
          layout="responsive"
          width={500}
          height={500}
          src={props.videoThumb}
          alt="big"
          objectFit="cover"
        />
      </div>

      <div className="relative z-10 w-full flex flex-col h-full">
        <h2 className="px-10  pt-10 w-[310px] font-semibold  lg:text-3xl text-white">
          {props.title}
        </h2>

        <div className="flex pl-10 w-max relative flex-wrap flex-row items-center mt-7">
          <div className="hidden box-border p-1 border-2 rounded-full border-white border-opacity-70  w-14 h-14 justify-center items-center relative  mr-3 lg:block">
            <Image
              src={props.person.img}
              alt="Uploader Profile"
              layout="responsive"
              objectFit="cover"
              width={54}
              height={54}
            />

            {/** Verified Section*/}
            <div
              className="absolute p-1 rounded-full  -right-2 -bottom-1"
              style={{
                backgroundColor: props.baseColor,
              }}
            >
              <div className=" bg-white  box-border p-1 rounded-full">
                <svg
                  width="6"
                  height="5"
                  viewBox="0 0 6 5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current text-[#40b1c3] w-2 h-2"
                  style={{
                    color: props.baseColor,
                  }}
                >
                  <path
                    d="M1 2.82843L2.41422 4.24264L5.24264 1.41421"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/** User Info Section*/}
          <div className="text-white ">
            <h3 className="font-medium text-sm">{props.person.name}</h3>
            <p className="text-xs opacity-80">
              <span className="hidden lg:inline">
                {props.person.views} views .
              </span>
              <span>{props.person.uploaded_at}</span>
            </p>
          </div>
        </div>

        <p className="mr-10 absolute bottom-0 font-medium text-[10px] bg-[#242730] bg-opacity-50 rounded-3xl py-1 px-2 text-white w-max self-end mb-5">
          {props.videoLength}
        </p>
      </div>
    </div>
  );
}