"use client";
import { ReactNode, useState } from "react";
import { H4 } from "../typography";
import Image from "next/image";
// import upIcon from "../../assets/up_collapse-icon.svg";
// import downIcon from "../../assets/down_collapse-icon.svg";

type CollapseProps = {
  heading: string;
  children: ReactNode;
};

export default function Collapse({ heading, children }: CollapseProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-300 rounded">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen ? "bg-gray-100 border-b border-b-gray-300" : ""
        } p-2.5 flex items-center justify-between cursor-pointer`}
      >
        <H4>{heading}</H4>
        {/* {isOpen ? (
          <Image src={upIcon} alt={"up icon"} />
        ) : (
          <Image src={downIcon} alt={"down icon"} />
        )} */}
      </div>
      {isOpen && <div className="px-3 py-5">{children}</div>}
    </div>
  );
}
