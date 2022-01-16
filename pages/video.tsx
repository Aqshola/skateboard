import Layout from "components/Layout";
import React, { ReactElement } from "react";
import ReactPlayer from "react-player/lazy";

interface Props {}

export default function video({}: Props): ReactElement {
  return (
    <Layout>
      <div className="w-full flex justify-center">
        <ReactPlayer
          width={335}
          height={261}
          url="https://test-videos.co.uk/vids/bigbuckbunny/webm/vp8/360/Big_Buck_Bunny_360_10s_1MB.webm"
          controls
        />
      </div>
    </Layout>
  );
}
