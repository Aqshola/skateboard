import Layout from "components/Layout";
import React, { ReactElement, useState } from "react";
import ReactPlayer from "react-player/youtube";
import { Show, ChevronDown, Send, Heart, MoreCircle } from "react-iconly";
import clsx from "clsx";
import CommentCard from "components/Card/CommentCard";
import PersonList from "data/Person";
import { AnimatePresence, motion } from "framer-motion";

interface Props {}

export default function Video({}: Props): ReactElement {
  const [showDesc, setshowDesc] = useState<boolean>(false);
  return (
    <Layout>
      <div className="col-span-12 relative min-h-screen">
        {/* 
          Video Player
      */}
        <div className="z-10 w-full h-[261px] lg:h-[500px]  flex justify-center px-6 rounded-3xl overflow-hidden relative">
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
            <h1 className="text-xl lg:text-2xl w-72 lg:w-full">
              How to ride your skateboard and Basic Equipment
            </h1>
            <button
              className={clsx(
                "w-max flex justify-center items-center bg-white bg-opacity-10 rounded-full p-1 transition-all transform ",
                showDesc && ["rotate-180"]
              )}
              onClick={() => setshowDesc(!showDesc)}
            >
              <ChevronDown primaryColor="white" size={"small"} />
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
          <AnimatePresence>
            {showDesc && (
              <motion.p
                initial={{
                  height: 0,
                  opacity: 0,
                }}
                animate={{
                  height: "fit-content",
                  opacity: 1,
                }}
                exit={{
                  height: 0,
                  opacity: 0,
                }}
                className="text-xs font-extralight leading-4 tracking-wide mt-2"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae soluta laboriosam nulla provident modi recusandae quod
                obcaecati iste unde officiis minus rerum fuga illum perferendis,
                dolorum, iusto ad quis quidem quisquam! Odio excepturi
                reprehenderit repellendus possimus, mollitia laboriosam
                consequatur laborum hic tenetur rem sint adipisci cumque
                ducimus. Sunt distinctio facilis laborum, saepe dicta recusandae
                officiis repellat beatae dignissimos cupiditate dolores, illum
                accusantium delectus, nesciunt neque voluptates. Sed quasi
                consequatur consectetur fugiat temporibus! Voluptas ullam
                temporibus ipsam, eveniet quos magni perferendis qui, veritatis
                natus nemo quidem, vel itaque aut quas commodi accusamus
                assumenda dicta? Accusantium quos enim eum asperiores placeat
                quasi!
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <div className="pl-6">
          <hr className="opacity-5" />
        </div>

        
        <div className="px-6 mt-6 gap-4 flex flex-col ">
          {PersonList.slice(0, 2).map((person) => (
            <CommentCard profileImg={person.img} name={person.name} text={""} />
          ))}
        </div>

        <div className="fixed bottom-10 lg:bottom-5 px-6 mb-2 w-full max-w-screen-2xl">
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
      </div>
    </Layout>
  );
}
