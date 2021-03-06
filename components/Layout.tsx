import React, { ReactElement } from "react";
import Navbar from "components/Navbar/Navbar";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props): ReactElement {
  return (
    <>
    <div className="grid grid-cols-12 lg:min-h-screen max-w-screen-2xl mx-auto relative items-start pb-96 md:pb-16 box-content">
      <div className="z-50 bg-[#1F1D2B] col-span-12 lg:relative sticky top-0">
        <Navbar />
      </div>
      {children}
    </div>

    </>
  );
}
