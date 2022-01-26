import Layout from "components/Layout";
import React, { ReactElement, useRef, useState } from "react";
import { findDOMNode } from "react-dom";
import ReactPlayer from "react-player/youtube";
import screenfull from "screenfull";
import {
  Show,
  ChevronDown,
  Send,
  Heart,
  MoreCircle,
  Play,
  VolumeUp,
  Filter,
  Category,
} from "react-iconly";
import { AnimatePresence, motion } from "framer-motion";

export default function Player() {
  const [playVid, setplayVid] = useState<boolean>(false);
  const player = useRef();

  const handleFullscreen = () => {
    screenfull.request(findDOMNode(player.current));
  };

  return (
    <div className="z-10 w-[95%] mx-auto h-[261px] lg:h-[500px]  rounded-2xl flex justify-center  overflow-hidden relative">
      <ReactPlayer
        ref={player}
        width={"100%"}
        height={"100%"}
        url="https://youtu.be/h9wualcJuE4"
        controls={false}
        className="react-player"
        playing={playVid}
        onPause={() => setplayVid(false)}
        onEnded={() => setplayVid(false)}
        onPlay={() => setplayVid(true)}
      />

      {/* Ccntrol */}
      <AnimatePresence>
        {!playVid && (
          <motion.div
            initial={{
              opacity: 0,
              translateY: 100,
            }}
            transition={{
              duration: 0.5,
            }}
            animate={{
              opacity: 1,
              translateY: 0,
            }}
            exit={{
              opacity: 0,
              translateY: 100,
            }}
            id="control-video"
            className="z-50 absolute bottom-0 flex flex-col w-full right-0 left-0 
            "
          >
            {/* <input type="range" min={0} max={20} value={5} className="text-white m-0"/> */}
            <div className="bg-[#252836] w-full flex items-center p-2">
              <div className="flex-grow">
                <button
                  onClick={() => {
                    setplayVid(!playVid);
                  }}
                >
                  <Play
                    filled
                    primaryColor="white"
                    style={{
                      opacity: 0.5,
                    }}
                  />
                </button>
              </div>
              <div className="flex gap-7">
                <VolumeUp
                  filled
                  primaryColor="white"
                  style={{
                    opacity: 0.5,
                  }}
                />
                <Filter
                  filled
                  primaryColor="white"
                  style={{
                    opacity: 0.5,
                  }}
                />

                <button onClick={handleFullscreen}>
                  <Category
                    filled
                    primaryColor="white"
                    style={{
                      opacity: 0.5,
                    }}
                  />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
