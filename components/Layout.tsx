import React, { ReactElement } from "react";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props): ReactElement {
  return (
    <div className="min-h-screen bg-[#1F1D2B] max-w-screen-2xl relative mx-auto pb-16">
      {children}
    </div>
  );
}
