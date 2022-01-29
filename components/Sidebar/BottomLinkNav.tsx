import React, { ReactElement } from "react";
import { IconProps } from "react-iconly";
import clsx from "clsx";

interface Props {
  Logo: React.FC<IconProps>;
  label: string;
  onClick:()=>void
  active?: boolean;

}

export default function BottomLinkNav({
  Logo,
  label,
  active = false,
  onClick
}: Props): ReactElement {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "flex flex-col items-center transition-all",
        active && ["text-white"],
        !active && [" text-[#808191]"]
      )}
    >
      <div className={"transition-all "+ (active ? "text-[#6C5ECF] " : "text-[#808191]")}>
        <Logo
          filled
          style={{
            color: "inherit",
          }}
        />
      </div>
      <span className="mt-2 tracking-wider font-medium text-xs">{label}</span>
    </button>
  );
}
