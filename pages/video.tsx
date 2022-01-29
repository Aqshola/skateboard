import Layout from "components/Layout";
import React, { ReactElement, useState } from "react";

import NextHead from "next/head";
import Player from "components/Video/Player";
import VideoDesc from "components/Video/VideoDesc";
import CommentSection from "components/Section/CommentSection";

export default function Video(): ReactElement {
  return (
    <>
      <NextHead>
        <title>Sketboard | Video</title>
        <meta name="description" content="Video about skateboard related" />
      </NextHead>
      <Layout>
        <div className="relative col-span-12 min-h-screen">
          <Player />
          <VideoDesc />
          <div className="pl-6">
            <hr className="opacity-5" />
          </div>
          <CommentSection />
        </div>
      </Layout>
    </>
  );
}
