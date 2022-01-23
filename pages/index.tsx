import Head from "next/head";

import Layout from "components/Layout";

import SideBar from "components/sidebar/SideBar";
import DiscoverSection from "components/section/DiscoverSection";
import MostWatchedSection from "components/section/MostWatchedSection";
import BottomNav from "components/navbar/BottomNav";
import Stories from "components/section/Stories";

export default function Home() {
  return (
    <Layout>
      <div className="col-span-12">
        <Stories />
      </div>
      
      <div className="col-span-2 lg:block hidden sticky  top-0  pl-6 lg:px-6">
        <SideBar />
      </div>
      <div className="col-span-12 mt-6 lg:mt-0 lg:col-start-3 lg:col-span-10 pl-6 lg:px-6">
        <DiscoverSection />

        <MostWatchedSection />
        
      </div>
      <div className="col-span-12 fixed w-full bottom-0">
        <BottomNav />
      </div>
      
    </Layout>
  );
}
