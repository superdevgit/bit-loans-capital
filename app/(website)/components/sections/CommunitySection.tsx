"use client";
import { Popup, Reveal } from "@/components/shared";
import { H2, H3, P2, SubH1 } from "@/components/typography";
import Link from "next/link";
import { useState } from "react";
import { FaDiscord } from "react-icons/fa";
import { HiOutlineUserPlus } from "react-icons/hi2";
import { SignUpForm } from "../layout/Header";

const CommunitySection = () => {
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  return (
    <section className="text- py-14 pb-20">
      <Reveal>

      <div className="rounded-2xl flex flex-col md:flex-row justify-between px-8 mt-8">
        {/* headings  */}
        <div className="md:w-2/3">
          <SubH1 className="p-1 !bg-gray-400 text-white rounded inline">
            Our community
          </SubH1>
          <H2 className="mb-4 mt-2">Join the Bitloanscapital Community</H2>
          <P2>
            Bitloanscapital is more than just a lending platform. it is a
            thriving community of like-minded individuals who believe in the
            power of Bitcoin and decentralized finance. We encourage active
            participation and value community feedback. Together, we can shape
            the future of lending and redefine opportunities for financial
            growth. Ready to get started? Create an account today and experience
            the seamless and profitable world of Bitloanscapital.
          </P2>
        </div>
        {/* buttons  */}
        <div className="flex-1 flex justify-center items-center mt-8">
          <div className="space-y-8 flex flex-col justify-center">
            <button
              onClick={() => setShowSignUpForm(true)}
             className="text-white bg-[#052131] px-6 py-2 rounded-lg flex gap-2 items-center">
              <HiOutlineUserPlus />
              <span>Create account</span>
            </button>
            <Link
              href="https://discord.gg/tKFjgzsCgb"
              className="flex gap-2 items-center px-6 py-2 border border-[#052131] rounded-lg"
            >
              <FaDiscord />
              <span>Join Discord</span>
            </Link>
          </div>
        </div>
      </div>
      {/* sign up  */}
      {showSignUpForm && (
        <Popup closePopup={setShowSignUpForm}>
          <SignUpForm closeModal={setShowSignUpForm} />
        </Popup>
      )}
      </Reveal>
    </section>
  );
};

export default CommunitySection;

// EXTENDED COMPONENTS =================================

const Card = ({
  title,
  description,
  icon,
  className,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}) => (
  <div className="flex gap-3">
    <div className="h-14 w-60 flex">{icon}</div>
    <div className="space-y-2 pt-2">
      <H3>{title}</H3>
      <P2>{description}</P2>
    </div>
  </div>
);