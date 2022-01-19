import Layout from "components/Layout";
import React, { ReactElement } from "react";
import ReactPlayer from "react-player/lazy";

interface Props {}

export default function video({}: Props): ReactElement {
  return (
    <Layout>
      <div className="w-full flex justify-center px-6 rounded-xl overflow-hidden relative">
        <ReactPlayer
          width={"100%"}
          height={"100%"}
          url="https://test-videos.co.uk/vids/bigbuckbunny/webm/vp8/360/Big_Buck_Bunny_360_10s_1MB.webm"
          controls={false}
        />
        <div id="control-video"></div>
      </div>
    </Layout>
  );
}
