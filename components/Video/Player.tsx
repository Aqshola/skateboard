import React, { useRef, useState } from "react";
import ReactPlayer from "react-player/youtube";
import screenfull from "screenfull";
import { Play, VolumeUp, Filter, Category } from "react-iconly";
import { AnimatePresence, motion } from "framer-motion";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";


export default function Player() {
  const [played, setplayed] = useState<number>(0);
  const [playVid, setplayVid] = useState<boolean>(false);
  const player = useRef<any>();
  const playerContainer = useRef<HTMLDivElement>(null);
  const [seek, setseek] = useState<boolean>(true);

  const timePlayed =  player.current?player.current.getCurrentTime() : 0;
  const durationPlay =  player.current?player.current.getDuration() : 0;

  const handleMouseIn = () => {
    setseek(true);
  };

  const handleMouseOut = () => {
    setseek(false);
  };
  const handleFullscreen = () => {
    screenfull.toggle(playerContainer.current);
  };

  const handleSeek = (value: number) => {
    setplayed(value);
  };

  const handleCommitSeek = () => {
    player.current.seekTo(parseFloat((played / 100).toString()));
  };

  const handleStop = () => {
    setplayVid(false);
    setseek(true);
  };

  const handlePlay = () => {
    setplayVid(true);

    setTimeout(() => {
      setseek(false);
    }, 2000);
  };

  const formatPlayedTime = (seconds: number): string => {
    const date = new Date(seconds * 1000);
    const hh = date.getUTCHours();
    const mm = date.getUTCMinutes();
    const ss = date.getUTCSeconds().toString().padStart(2, "0");
    if (hh) {
      return `${hh}:${mm.toString().padStart(2, "0")}:${ss}`;
    }
    return `${mm}:${ss}`;
  };

  return (
    <div
      ref={playerContainer}
      onMouseEnter={handleMouseIn}
      onMouseLeave={handleMouseOut}
      className="z-10 w-[95%] mx-auto h-[261px]  md:h-[500px]  rounded-2xl flex justify-center  overflow-hidden relative"
    >
      <ReactPlayer
        ref={player}
        onProgress={({ played: Played }) => {
          setplayed(Played * 100);
        }}
        width={"100%"}
        height={"100%"}
        url="https://youtu.be/h9wualcJuE4"
        controls={false}
        className="react-player"
        playing={playVid}
        onPause={handleStop}
        onEnded={handleStop}
        onPlay={handlePlay}
      />

      {/* Control */}
      <AnimatePresence>
        {seek && (
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
            <div className="w-full px-2 p-0 h-fit ">
              <Slider
                min={0}
                max={100}
                onChange={handleSeek}
                onAfterChange={handleCommitSeek}
                value={played}
                railStyle={{
                  backgroundColor: "white",
                  opacity: "0.5",
                }}
                trackStyle={{
                  backgroundColor: "white",
                }}
                handleStyle={{ border: "none" }}
              />
            </div>

            <div className="bg-[#252836] w-full flex items-center p-1 px-2 lg:p-2">

              {/* Text and button Play */}
              <div className="flex-grow relative">
                <p className={"text-white px-2 transition-all absolute top-0"+ (playVid?' visible opacity-100':' invisible opacity-0  ')}>
                  {formatPlayedTime(timePlayed)} /{" "}
                  {formatPlayedTime(durationPlay - timePlayed)}
                </p>

                <button
                className={"transition-all"+ (playVid?" invisible w-0 overflow-hidden opacity-0":" w-fit opacity-100 visible")}
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

              {/* Other Button */}
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
