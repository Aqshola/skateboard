import React, { ReactElement } from "react";
import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";
import useBlurData from "utils/useBlurData";
import numberReadable from "utils/numberReadable";

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

export default function BannerCard({
  type = "big",
  ...props
}: Props): ReactElement {
  const dataBlur = useBlurData(725, 366);

  return (
    <>
      <Link href={"/video"} aria-label="open video">
        <div className="relative h-[230px]  w-full overflow-hidden rounded-xl text-xl hover:cursor-pointer md:h-[400px] lg:max-h-[350px] lg:min-h-[350px]">
          <div
            className={clsx(
              "relative top-0 bottom-0 z-0  min-h-[500px] w-full object-cover object-left-top lg:object-none",
              type === "small" && ["order-2"]
            )}
          >
            <Image
              loading="eager"
              layout="fill"
              src={props.videoThumb}
              alt="big"
              objectFit="cover"
              objectPosition={"left top"}
              placeholder="blur"
              blurDataURL={dataBlur}
            />
          </div>

          <div
            className={clsx(
              "absolute top-0 bottom-0 z-10 flex h-full w-full flex-col"
            )}
          >
            <h2 className="w-[230px] px-6  pt-10 text-lg font-semibold text-white  lg:w-[310px]  lg:px-10 lg:text-3xl">
              {props.title}
            </h2>

            <div
              className={clsx(
                "relative mt-7 flex w-max  flex-row flex-wrap px-6  lg:pl-10",
                type === "small" && ["flex-col"],
                type === "big" && ["items-center"]
              )}
            >
              {/**Image Section */}
              <div
                className={clsx(
                  "relative mr-3 box-border hidden h-14 w-14 items-center  justify-center rounded-full border-2 border-white border-opacity-70  p-1 lg:block",
                  type === "small" && ["order-2 mt-2"]
                )}
              >
                <Image
                  src={props.person.img}
                  alt="Uploader Profile"
                  layout="responsive"
                  objectFit="cover"
                  width={54}
                  height={54}
                  className="overflow-hidden rounded-full"
                />

                {/** Verified Section*/}
                <div
                  className="absolute -right-2 -bottom-1  rounded-full p-1"
                  style={{
                    backgroundColor: props.baseColor,
                  }}
                >
                  <div className=" box-border  rounded-full bg-white p-1">
                    <svg
                      width="6"
                      height="5"
                      viewBox="0 0 6 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-2 w-2 stroke-current text-[#40b1c3]"
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
                <h3 className="text-sm font-medium">{props.person.name}</h3>
                <p className="text-xs opacity-80">
                  <span className="hidden lg:inline">
                    {numberReadable(props.person.views)} views .
                  </span>
                  <span> {props.person.uploaded_at}</span>
                </p>
              </div>
            </div>

            <p className="absolute bottom-0 mr-10 mb-5 hidden w-max self-end rounded-3xl bg-[#242730] bg-opacity-50 py-1 px-2 text-[10px] font-medium text-white lg:block">
              {props.videoLength}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}
