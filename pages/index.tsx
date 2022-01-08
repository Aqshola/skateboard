import Head from "next/head";
import Image from "next/image";
import BannerCard from "../components/Card/BannerCard";
import Layout from "../components/Layout";
import Navbar from "../components/navbar/Navbar";
import SideBar from "components/sidebar/SideBar";

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <div className="grid grid-cols-12 h-full pl-6">
        <div className="col-span-2">
          <SideBar />
        </div>
        <div className="col-start-3 col-span-10">
          <div>
            <h1 className="font-semibold text-white text-5xl">Discover</h1>
            <div className="grid-cols-12 mt-7 gap-5 hidden lg:grid">
              <div className="col-span-8">
                <BannerCard
                  title="How to do Basic Jumping and how to landing safely"
                  videoThumb="/image/bigCard/image 1.png"
                  videoLength="7 Min"
                  person={{
                    name: "Thomas Hope",
                    img: "/image/profile/bigProfile2.png",
                    uploaded_at: "2 weeks ago",
                    views: "53k",
                  }}
                  baseColor=""
                />
              </div>
            </div>
          </div>
          <div className="mt-16">
            <h1 className="font-medium text-3xl text-white">Most Watched</h1>
          </div>
        </div>
      </div>
    </Layout>
  );
}
