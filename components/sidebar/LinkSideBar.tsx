import React, { ReactElement } from "react";
import clsx from "clsx";
import { IconProps } from "react-iconly";

interface Props {
  label: string;
  active?: boolean;
  Logo?: React.FC<IconProps>;
}

export default function LinkSideBar({
  label,
  active,
  Logo,
}: Props): ReactElement {
  return (
    <div
      className={clsx(
        " flex items-center",
        active && ["text-white"],
        !active && ["text-[#808191]"]
      )}
    >
      {Logo && (
        <div
          className={clsx(
            "p-2 rounded-xl ",
            active && [" bg-[#FF7551]  text-white"],
            !active && ["text-[#808191] bg-white bg-opacity-10"]
          )}
        >
          <Logo
            set="bold"
            style={{
              color: "inherit",
            }}
            size="small"
          />
        </div>
      )}

      <p className="font-medium tracking-wider  text-xs ml-4">{label}</p>
    </div>
  );
}
