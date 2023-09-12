"use client";

import { H2, H3, P2 } from "@/components/typography";

import { Popup } from "@/components/shared";
import Link from "next/link";
import { useState } from "react";
import { Heading } from "../components/shared";

const Career = () => {
  

  return (
    <>
      <div className="">
        <Heading title="Career" />
        {/* content  */}
        <div className="py-3 md:p-5 pb-20 space-y-8 ">
          <P2>
            Explore our career opportunities and join our team of highly skilled
          </P2>
          {/*  */}
          <div className="space-y-3">
            <H2>Available positions</H2>
            <P2>
              We are looking for talented individuals to join our team. If you
              think you have what it takes, please apply
            </P2>
            {/* jobs  */}
            <div className="space-y-4">
              <Job
                title="1. Customer Support"
                href="/docs/career/customer-support"
              />
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Career;

const Job = ({ title, href }: { title: string; href: string }) => {
  return (
    <Link href={href}>
      <H3 className="capitalize">{title}</H3>
    </Link>
  );
};

const ApplicationForm = ({
  closeModal,
}: {
  closeModal: (state: boolean) => void;
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [upload, setUpload] = useState("");
  const [whyApplying, setWhyApplying] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ name, email, upload, whyApplying });
    closeModal(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 ">
      {/* name */}
      <div className="space-y-1">
        <label htmlFor="name" className="block  font-medium text-gray-700">
          Full Name
        </label>

        <input
          type="text"
          name="name"
          id="name"
          className="p-3 border shadow-sm block w-full sm: border-gray-300 focus:border-[#0f3a70] focus:outline-none rounded-md"
          placeholder="John Doe"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      {/* email */}
      <div className="space-y-1">
        <label htmlFor="email" className="block  font-medium text-gray-700">
          Email
        </label>

        <input
          type="text"
          name="email"
          id="email"
          className="p-3 border shadow-sm block w-full sm: border-gray-300 focus:border-[#0f3a70] focus:outline-none rounded-md"
          placeholder="name@example.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      {/* upload */}
      <div className="space-y-1">
        <label htmlFor="upload" className="block  font-medium text-gray-700">
          Upload CV/Resume
        </label>

        <input
          type="file"
          name="upload"
          id="upload"
          className="p-3 border shadow-sm block w-full sm: border-gray-300 focus:border-[#0f3a70] focus:outline-none rounded-md"
          value={upload}
          onChange={e => setUpload(e.target.value)}
        />
      </div>
      {/* whyApplying */}
      <div className="space-y-1">
        <label
          htmlFor="whyApplying"
          className="block  font-medium text-gray-700"
        >
          Why you should work with us
        </label>

        <textarea
          rows={8}
          name="whyApplying"
          id="whyApplying"
          className="p-3 border shadow-sm block w-full sm: border-gray-300 focus:border-[#0f3a70] focus:outline-none rounded-md"
          // placeholder="John Doe"
          value={whyApplying}
          onChange={e => setWhyApplying(e.target.value)}
        />
      </div>
      {/* button  */}

      <button className="text-white bg-[#052131] px-8 !mt-8 py-4 rounded-lg text-xl">
        Submit
      </button>
    </form>
  );
};
