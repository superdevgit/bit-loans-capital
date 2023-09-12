import { H2, P2 } from "@/components/typography";

import Image from "next/image";
import { Heading } from "../../components/shared";

import image from "./getting-started.png";

const GettingStarted = () => {
  const navigationDescription = [
    {
      title: "Profile",
      description:
        "You can check your profile information and change them if needed.",
    },
    {
      title: "Account",
      description:
        "You find your settings under this section. These settings control your interactions with the platform.",
    },
  ];

  return (
    <div className="">
      <Heading title="Getting Started" />
      {/* content  */}
      <div className="py-3 md:p-5 pb-20 space-y-8 ">
        <div className="space-y-3">
          <H2>Welcome. Learn how to use your dashboard.</H2>
          <P2>
            Welcome to Bitloanscapital. After sign-up you will get a personal
            dashboard. This section is an introduction to your dashboard.
          </P2>
        </div>
        {/* image  */}
        <div className="flex justify-center shadow-md border ">
          <Image
            src={image}
            // width={1000}
            // height={500}
            alt="getting started"
            quality={100}
          />
        </div>
        {/* description  */}
        {/* Navigation  */}
        <div className="space-y-3">
          <H2>1. Navigation</H2>
          {navigationDescription.map((item, index) => (
            <DescriptionItem key={index} item={item} />
          ))}
        </div>
        {/* address  */}
        <div className="space-y-3">
          <H2>2. Address</H2>
          <P2>
            Your Bitloanscapital bitcoin wallet address with a quick action
            button to copy it.
          </P2>
        </div>
        {/* profile Information  */}
        <div className="space-y-3">
          <H2>3. Profile Information</H2>
          <P2>Your profile information</P2>
        </div>
        {/* profile Information  */}
        <div className="space-y-3">
          <H2>4. Balance</H2>
          <P2>Here are your balances</P2>
        </div>
        {/* user perform actions  */}
        <div className="space-y-3">
          <H2>5. Perform Transactions</H2>
          <P2>You can perform a transaction here.</P2>
        </div>
        {/* user perform actions  */}
        <div className="space-y-3">
          <H2>6. Navbar</H2>
          <P2>You go home or logout here.</P2>
        </div>
          <P2>Please check section specific pages for more information. Welcome.
</P2>
      </div>
    </div>
  );
};

export default GettingStarted;

const DescriptionItem = ({ item }: { item: any }) => (
  <div className="flex gap-2">
    <P2 className=""> - {item.title}: </P2>
    <P2 className="">{item.description}</P2>
  </div>
);
