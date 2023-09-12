import { H2, P2 } from "@/components/typography";
import Image from "next/image";

import { Reveal } from "@/components/shared";
import { Heading } from "../components/shared";

const Team = () => {
  const topManagement = [
    {
      title: "CEO",
      image: "/assets/team/CEO.png",
      name: "Ethan Johnson",
      description:
        "With a passion for cryptocurrencies and a vision for decentralized finance, Ethan leads the Bitloanscapital team towards revolutionizing the lending industry.",
    },
    {
      title: "CFO",
      image: "/assets/team/CFO.png",
      name: "Emma Reynolds",
      description:
        "Emma brings her finance and strategic planning expertise to Bitloanscapital.",
    },
  ];
  const otherStaff = [
    {
      title: "CTO",
      image: "/assets/team/CTO.png",
      name: "Caleb Thompson",
      description:
        "As the CTO, Caleb is the driving force behind the platform's technological advancements.",
    },
    {
      title: "Customer Relations Manager",
      image: "/assets/team/Customer_Relations_Manager.png",
      name: "Mia Foster",
      description:
        "fosters strong relationships with Bitloanscapital's valued customers.",
    },
    {
      title: "Financial Analyst",
      image: "/assets/team/Financial_Analyst.png",
      name: "Lucas Davis",
      description:
        "With a sharp analytical mind, Lucas plays a vital role in evaluating market trends, assessing risk, and optimizing financial strategies for Bitloanscapital.",
    },
    {
      title: "Head of Business Development",
      image: "/assets/team/Head_of_Business_Development.png",
      name: "Benjamin Morgan",
      description:
        "Benjamin leads the business development efforts at Bitloanscapital, forging partnerships and expanding the platform's reach.",
    },
    {
      title: "HR Manager",
      image: "/assets/team/HR_Manager.png",
      name: "Charlotte Hughes",
      description:
        "Charlotte is responsible for building a talented and motivated team at Bitloanscapital.",
    },
    {
      title: "Operations Manager",
      image: "/assets/team/Operations_Manager.png",
      name: "Liam Anderson",
      description:
        "Liam oversees the day-to-day operations at Bitloanscapital, ensuring smooth and efficient processes.",
    },
  ];

  return (
    <div className="">
      <Heading title="Our Team" />
      {/* content  */}
      <div className="py-3 md:p-5 pb-20 space-y-10">
        {/* users 3 in a row  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {topManagement.map((user, index) => (
            <Reveal key={user.name} delay={0.1 * index}>
              <User data={user} />
            </Reveal>
          ))}
        </div>
        {/* users 3 in a row  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {otherStaff.map((user, index) => (
            <Reveal key={user.name} delay={0.2 * index}>
              <User data={user} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;

const User = ({
  data,
}: {
  data: { name: string; title: string; image: string; description: string };
}) => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="w-[10rem] h-[10rem] rounded-full overflow-hidden">
        <Image
          src={data.image}
          alt={data.name}
          width={100}
          height={100}
          layout="responsive"
        />
        {/* <HiUserCircle className="h-full w-full fill-gray-300" /> */}
      </div>
      <div className="flex flex-col items-center space-y-1">
        <H2>{data.name}</H2>
        <P2>{data.title}</P2>
      </div>
      <P2 className="text-center text-gray-500">{data.description}</P2>
    </div>
  );
};
