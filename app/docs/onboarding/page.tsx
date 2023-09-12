import { H2, H3, P2 } from "@/components/typography";

import Link from "next/link";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import { Heading } from "../components/shared";

const OnBoarding = () => {
  const navigationLeft = [
    {
      title: "Getting Started",
      description: "Get familiar with the platform UI",
      href: "/docs/onboarding/getting-started",
    },
    {
      title: "Profile",
      description: "Learn how to manage your profile",
      href: "/docs/onboarding/profile",
    },
    {
      title: "Account Settings",
      description: "Learn how to manage your account",
      href: "/docs/onboarding/account",
    },
    {
      title: "Borrowing process",
      description: "Learn how to borrow on Bitloanscapital",
      href: "/docs/onboarding/borrowing",
    },
  ];
  const navigationRight = [
    {
      title: "Lending process",
      description: "Learn how to lend on Bitloanscapital",
      href: "/docs/onboarding/lending",
    },

    {
      title: "Withdraw process",
      description: "Learn how to withdraw on Bitloanscapital",
      href: "/docs/onboarding/withdrawing",
    },
    {
      title: "Repay process",
      description: "Learn how to repay your loan",
      href: "/docs/onboarding/repaying",
    },
    // {
    //   title: "FAQ",
    //   description: "Learn how to get help",
    //   href: "/docs/onboarding/faq",
    // },
  ];

  return (
    <div className="">
      <Heading title="Bitloanscapital Platform On Boarding" />
      {/* content  */}
      <div className="py-3 md:p-5 pb-20 space-y-8 ">
        <div className="space-y-3">
          <H2>
            Welcome, get the guidance on how to effectively use our platform
          </H2>
          <P2>
            Welcome to Bitloanscapital, This section will guide users through
            the initial steps of using your app.
          </P2>
        </div>
        {/* navigation  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="grid grid-cols-1 gap-4">
            {navigationLeft.map((item, index) => (
              <LinkItem key={index} item={item} />
            ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {navigationRight.map((item, index) => (
              <LinkItem key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnBoarding;

const LinkItem = ({ item }: { item: any }) => (
  <Link
    href={item.href}
    className="rounded-md border border-gray-300 p-4 px-5 hover:shadow"
  >
    <div className="flex items-center justify-between">
      <H3>{item.title}</H3>
      <HiOutlineArrowTopRightOnSquare className="" />
    </div>
    <P2>{item.description}</P2>
  </Link>
);
