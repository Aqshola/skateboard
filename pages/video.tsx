import Layout from "components/Layout";
import React, { ReactElement, useState } from "react";
import ReactPlayer from "react-player/lazy";
import { Show, ChevronDown, Send, Heart, MoreCircle } from "react-iconly";
import Image from "next/image";
import clsx from 'clsx';

interface Props {}

export default function Video({}: Props): ReactElement {
  const [showDesc, setshowDesc] = useState<boolean>(false);
  return (
    <Layout>
      {/* 
          Video Player
      */}
      <div className="w-full h-[261px] flex justify-center px-6 rounded-xl overflow-hidden relative">
        <ReactPlayer
          width={"100%"}
          height={"100%"}
          url="https://youtu.be/h9wualcJuE4"
          controls={false}
        />
        <div id="control-video"></div>
      </div>

      {/* 
          Video Desc
      */}
      <div className="pb-6 px-6 mt-6 text-white">
        <div className="flex items-start justify-between">
          <h1 className="text-xl w-72">
            How to ride your skateboard and Basic Equipment
          </h1>
          <button
            className={clsx("w-max flex justify-center items-center bg-white bg-opacity-10 rounded-full p-1 transition-all transform ", showDesc && ["rotate-180"])}
            onClick={() => setshowDesc(!showDesc)}
          >
            <ChevronDown primaryColor="white" size={"small"}  />
          </button>
        </div>

        <div className="mt-4 flex gap-6">
          <div id="views" className="flex gap-1 items-center">
            <Show primaryColor="#808191" size={"small"} />

            <p className="text-[#808191] text-xs">125.908 views</p>
          </div>
          <div id="likes" className="flex items-center gap-1">
            <Heart primaryColor="#808191" size={"small"} />
            <p className="text-xs text-[#808191]">47,987 likes</p>
          </div>
        </div>
        {showDesc && <p className="text-xs font-extralight leading-4 tracking-wide mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          soluta laboriosam nulla provident modi recusandae quod obcaecati iste
          unde officiis minus rerum fuga illum perferendis, dolorum, iusto ad
          quis quidem quisquam! Odio excepturi reprehenderit repellendus
          possimus, mollitia laboriosam consequatur laborum hic tenetur rem sint
          adipisci cumque ducimus. Sunt distinctio facilis laborum, saepe dicta
          recusandae officiis repellat beatae dignissimos cupiditate dolores,
          illum accusantium delectus, nesciunt neque voluptates. Sed quasi
          consequatur consectetur fugiat temporibus! Voluptas ullam temporibus
          ipsam, eveniet quos magni perferendis qui, veritatis natus nemo
          quidem, vel itaque aut quas commodi accusamus assumenda dicta?
          Accusantium quos enim eum asperiores placeat quasi!
        </p>}
        
      </div>

      <div className="pl-6">
        <hr className="opacity-5" />
      </div>
      <div className="px-6 mt-6">
        <div className="flex gap-2">
          <div
            id="comment-face"
            className="basis-12 relative flex-shrink-0 h-12 rounded-full bg-gray-400 overflow-hidden"
          >
            <Image
              src="/image/profile/image 13.png"
              layout="fill"
              objectFit="cover"
              alt="comment profile"
              objectPosition={"center"}
            />
          </div>
          <div
            id="comment-detail"
            className="p-4 rounded-bl-xl rounded-r-xl bg-[#252836]"
          >
            <h2 className="text-sm text-white">
              Wijaya Abadi{" "}
              <span className="bg-[#22B07D] inline-block w-2 ml-1 h-2 rounded-full "></span>
            </h2>
            <p className="text-xs text-[#808191] mt-2 leading-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum,
              harum?
            </p>
          </div>
        </div>
      </div>

      <div className="px-6 absolute bottom-0 mb-2 left-0 right-0 mt-auto">
        <div className="p-2 box-border mt-8  rounded-full bg-[#252836] flex items-center">
          <div id="icon-more">
            <MoreCircle filled primaryColor="#666872" />
          </div>
          <input
            type="text"
            name=""
            id=""
            placeholder="Write your message"
            className="text-xs text-white bg-transparent placeholder:text-xs placeholder:text-[#808191] basis-full min-w-0 ml-3"
          />
          <button className="p-2 rounded-full bg-[#6C5ECF] justify-center items-center">
            <Send size={"small"} filled primaryColor="white" />
          </button>
        </div>
      </div>
    </Layout>
  );
}
