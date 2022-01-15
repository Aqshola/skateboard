import React, { ReactElement } from "react";
import { IconProps } from "react-iconly";
import clsx from "clsx";

interface Props {
  Logo: React.FC<IconProps>;
  label: string;
  url: string;
  active?: boolean;
}

export default function BottomLinkNav({
  Logo,
  label,
  url,
  active = false,
}: Props): ReactElement {
  return (
    <a
      href={url}
      className={clsx(
        "flex flex-col items-center ",
        active && ["text-white"],
        !active && [" text-[#808191]"]
      )}
    >
      <div className={active ? "text-[#6C5ECF] " : "text-[#808191]"}>
        <Logo
          filled
          style={{
            color: "inherit",
          }}
        />
      </div>
      <span className="mt-2 font-medium text-xs">{label}</span>
    </a>
  );
}
