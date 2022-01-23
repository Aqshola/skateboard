import React, { ReactElement } from "react";
import Navbar from "components/navbar/Navbar";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props): ReactElement {
  return (
    <>
    <div className="grid grid-cols-12 lg:min-h-screen max-w-screen-2xl mx-auto relative items-start pb-16 box-content">
      <div className="col-span-12 lg:relative sticky top-0">
        <Navbar />
      </div>
      {children}
    </div>

    </>
  );
}
