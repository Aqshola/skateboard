import Head from "next/head";

import Layout from "components/Layout";
import Navbar from "components/navbar/Navbar";
import SideBar from "components/sidebar/SideBar";

import DiscoverSection from "components/section/DiscoverSection";
import MostWatchedSection from "components/section/MostWatchedSection";
import BottomNav from "components/navbar/BottomNav";

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <div className="grid grid-cols-12  min-h-screen  relative items-start ">
        <div className="col-span-2 lg:block hidden sticky top-0  pl-6 lg:px-6">
          <SideBar />
        </div>
        {/* <div className="col-start-3 col-span-10  pl-6 lg:px-6">
          
          <DiscoverSection />
          
          <MostWatchedSection />
        </div> */}
        <div className="col-span-12 fixed w-full bottom-0">
          <BottomNav />
        </div>
      </div>
    </Layout>
  );
}
