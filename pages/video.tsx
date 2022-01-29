import Layout from "components/Layout";
import React, { ReactElement, useState } from "react";

import NextHead from "next/head";
import Player from "components/Video/Player";
import VideoDesc from "components/Video/VideoDesc";
import CommentSection from "components/Section/CommentSection";
interface Props {}

export default function Video({}: Props): ReactElement {
  const [showDesc, setshowDesc] = useState<boolean>(false);  

  return (
    <>
      <NextHead>
        <title>Sketboard | Video</title>
        <meta name="description" content="Video about skateboard related" />
      </NextHead>
      <Layout>
        <div className="col-span-12 relative min-h-screen">
          <Player/>
          <VideoDesc/>
          <div className="pl-6">
            <hr className="opacity-5" />
          </div>
          <CommentSection/>
        </div>
      </Layout>
    </>
  );
}
