import React, { useRef, useState } from "react";
import ReactPlayer from "react-player/youtube";

import screenfull from "screenfull";
import { Play, VolumeUp, Filter, Category, VolumeOff } from "react-iconly";
import { AnimatePresence, motion } from "framer-motion";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export default function Player() {
  const [played, setplayed] = useState<number>(0);
  const [playVid, setplayVid] = useState<boolean>(false);
  const [seek, setseek] = useState<boolean>(true);
  const [volume, setvolume] = useState<number>(100);

  const playerContainer = useRef<HTMLDivElement>(null);
  const player = useRef<any>(null);

  const timePlayed = player.current ? player.current.getCurrentTime() : 0;
  const durationPlay = player.current ? player.current.getDuration() : 0;

  const handleMouseIn = () => {
    setseek(true);
  };

  const handleMouseOut = () => {
    setTimeout(() => {
      setseek(false);
    }, 2000);
  };
  const handleFullscreen = () => {
    if (screenfull.isEnabled) {
      screenfull.request(playerContainer.current);
    }
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

  const handleVolume = (value: number) => {
    setvolume(parseFloat((value / 100).toString()));
  };

  const handleMute = () => {
    if (volume === 0) {
      setvolume(100);
    } else {
      setvolume(0);
    }
  };

  return (
    <div
      ref={playerContainer}
      onMouseEnter={handleMouseIn}
      onMouseLeave={handleMouseOut}
      className="relative z-10 mx-auto flex  h-[261px]  w-[95%] justify-center overflow-hidden  rounded-2xl md:h-[500px]"
    >
      <ReactPlayer
        ref={player}
        onProgress={({ played: Played }) => {
          setplayed(Played * 100);
        }}
        width={"100%"}
        height={"100%"}
        url="https://youtu.be/OOg-4mtA3Zo"
        controls={false}
        className="react-player"
        volume={volume}
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
            className="absolute bottom-0 right-0 left-0 z-50 flex w-full flex-col 
            "
          >
            <div className="h-fit w-full p-0 px-2 ">
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

            <div className="flex w-full items-center bg-[#252836] p-1 px-2 lg:p-2">
              {/* Text and button Play */}
              <div className="relative flex-grow">
                <p
                  className={
                    "absolute top-0 px-2 text-white transition-all" +
                    (playVid
                      ? " visible opacity-100"
                      : " invisible opacity-0  ")
                  }
                >
                  {formatPlayedTime(timePlayed)} /{" "}
                  {formatPlayedTime(durationPlay - timePlayed)}
                </p>

                <button
                  className={
                    "transition-all" +
                    (playVid
                      ? " invisible w-0 overflow-hidden opacity-0"
                      : " visible w-fit opacity-100")
                  }
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
                <div className="group flex items-center transition-all hover:gap-2">
                  <button onClick={handleMute}>
                    {volume == 0 ? (
                      <VolumeOff
                        filled
                        primaryColor="white"
                        style={{
                          opacity: 0.5,
                        }}
                      />
                    ) : (
                      <VolumeUp
                        filled
                        primaryColor="white"
                        style={{
                          opacity: 0.5,
                        }}
                      />
                    )}
                  </button>

                  <div className="invisible w-0 opacity-0 outline-hidden  transition-all group-hover:visible group-hover:w-10 group-hover:opacity-100">
                    <Slider
                      min={0}
                      max={100}
                      railStyle={{
                        backgroundColor: "white",
                        opacity: "0.5",
                      }}
                      trackStyle={{
                        backgroundColor: "white",
                      }}
                      handleStyle={{
                        border: "none",
                      }}
                      value={volume * 100}
                      onChange={handleVolume}
                    />
                  </div>
                </div>
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
