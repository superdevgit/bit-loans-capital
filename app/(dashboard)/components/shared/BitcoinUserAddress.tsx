"use client";
import { H2 } from "@/components/typography";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { HiOutlineDocumentDuplicate } from "react-icons/hi2";

const BitcoinUserAddress = ({ address }: { address: string }) => {
  const [copied, setCopied] = useState(false);

  // function to set timeout after successfully copy to clipboard
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="flex items-center gap-3">
      <H2 className="">
        Address: {address.slice(0, 6) + "..." + address.slice(-8)}
      </H2>
      <CopyToClipboard onCopy={handleCopy} text={address}>
        <button
          className={`${
            copied && "bg-green-100 text-green-500"
          } flex gap-2 items-center rounded-lg bg-gray-100 p-1`}
        >
          <span>{copied ? "Copied!" : "Copy"}</span>
          <HiOutlineDocumentDuplicate />
        </button>
      </CopyToClipboard>
    </div>
  );
};

export default BitcoinUserAddress;
