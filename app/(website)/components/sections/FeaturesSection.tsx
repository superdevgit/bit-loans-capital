import CountUp from "react-countup";

import { Card, Reveal } from "@/components/shared";
import { H1, H2, P2 } from "@/components/typography";
import Link from "next/link";
import {
  HiOutlineCheckCircle,
  HiOutlineChevronRight,
  HiOutlineCubeTransparent,
  HiOutlineDocumentText,
  HiOutlineHandRaised,
  HiOutlineNewspaper,
  HiOutlineUserGroup,
} from "react-icons/hi2";

const FeaturesSection = () => {
  const features = [
    {
      icon: (
        <HiOutlineCubeTransparent className="h-full w-full text-[#043a5f]" />
      ),
      href: "/docs",
      title: "HOW",
      description:
        "Click here to discover how BitloansCapital works: from loan application to fund disbursement.",
    },
    {
      icon: <HiOutlineUserGroup className="h-full w-full text-[#043a5f]" />,
      href: "/docs/team",
      title: "TEAM",
      description:
        "Click here to meet our dedicated team committed to providing exceptional service and support to our users.",
    },
    {
      icon: <HiOutlineNewspaper className="h-full w-full text-[#043a5f]" />,
      href: "/docs/terms-of-service",
      title: "TERMS OF SERVICE",
      description:
        "Click here to review our comprehensive terms of service to understand the guidelines and agreements.",
    },
    {
      icon: <HiOutlineDocumentText className="h-full w-full text-[#043a5f]" />,
      href: "/docs/privacy-policy",
      title: "PRIVACY POLICY",
      description:
        "Click here to Your privacy matters. Click here to explore our privacy policy to understand how we protect your information.",
    },
  ];

  return (
    <section>
      {/* top bar */}
      <Reveal delay={1.05}>
        <div className="rounded-lg bg-[#d3e0f0] grid grid-cols-1 md:grid-cols-3 justify-between p-8 divide-y md:divide-y-0 md:divide-x divide-gray-300">
          <div className="flex flex-col justify-center items-center p-8">
            <H1 className="md:text-center lg:text-start">
              <CountUp delay={1} start={2000} end={3500} /> BTC
            </H1>
            <P2>Paid out to lenders</P2>
          </div>
          <div className="flex flex-col justify-center items-center p-8">
            <H1 className="md:text-center lg:text-start">
              $<CountUp delay={2} start={100} end={600} /> Million
            </H1>
            <P2>Handled</P2>
          </div>
          <div className="flex flex-col justify-center items-center p-8">
            <H1 className="md:text-center lg:text-start">
              $<CountUp delay={3} start={1} end={4} /> Million
            </H1>
            <P2>Loaned a day</P2>
          </div>
        </div>
      </Reveal>
      {/* Investment card  */}
      <Reveal>
        <InvestmentCard />
      </Reveal>
      {/* Loan card  */}
      <Reveal>
        <LoanCard />
      </Reveal>
      {/* onboarding  */}
      <Reveal>
        <Link
          href="/docs/onboarding"
          className="flex flex-col md:flex-row justify-between gap-3 md:items-center p-8 md:px-4 md:p-3 rounded-md box-shadow border border-gray-200 hover:shadow transition-all mt-8"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="h-6 w-6">
              <HiOutlineHandRaised className="h-6 w-6 text-[#043a5f]" />
            </div>
            <H2>Welcome onboarding. Get familiar with using our platform.</H2>
          </div>
          {/* link  */}
          <div className="flex gap-2 items-center">
            <span>Learn More</span>
            <HiOutlineChevronRight />
          </div>
        </Link>
      </Reveal>
      {/* bottom cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:gap-8 md:gap-4 gap-2 py-8">
        {/* cards */}
        {features.map((feature, index) => (
          <Reveal key={feature.title} delay={0.1 * index}>
            <Card
              id=""
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              href={feature.href}
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;

const InvestmentCard = () => {
  const investmentInfo = [
    {
      item: "High Returns: Earn up to 14% p.a. on your investments, providing you with attractive and competitive returns.",
    },
    {
      item: "Security: Our platform prioritizes the security of your investments, implementing robust measures to safeguard your funds and personal information.",
    },
    {
      item: "Privacy: We ensure the privacy of your data, employing advanced encryption protocols and strict confidentiality practices to protect your sensitive information.",
    },
    {
      item: "Customer Service and User-Friendliness: Experience dedicated customer support and a user-friendly interface, making your lending journey seamless and hassle-free.",
    },
  ];

  return (
    <div className="p-8  rounded-md border border-gray-200 flex flex-col lg:flex-row justify-between items-center mt-8">
      {/* numbers  */}
      <div className="lg:w-[40%] flex flex-col gap-6 mb-4 lg:mb-0 justify-center items-center">
        <H2 className="text-center">Investment rates as high as</H2>
        <span className="flex gap-2 lg:gap-4 items-baseline">
          <H1 className="!text-[6rem] lg:!text-[16rem]">
            <CountUp start={1} end={14} enableScrollSpy />
          </H1>
          <small className="lg:text-6xl">%</small>
          <small className="lg:text-2xl">P.A</small>
        </span>
      </div>
      {/* info  */}
      <div className="lg:w-[57%] lg:pl-4 xl:pl-0">
        <div className="space-y-2">
          {investmentInfo.map(info => (
            <div
              key={info.item}
              className="lg:grid space-y-3 gap-4 grid-flow-col auto-cols-min"
            >
              <span className="w-6 pt-3.5">
                <HiOutlineCheckCircle className="w-6 h-6 text-[#043a5f]" />
              </span>
              <P2 className="lg:w-[23rem] xl:w-[33rem] 2xl:w-[40rem] whitespace-normal">
                {info.item}
              </P2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const LoanCard = () => {
  const loanInfo = [
    {
      item: "Flexible Loan Categories: Choose from a diverse range of loan categories tailored to meet your specific financial needs, including student loans, medical loans, mortgage loans, and standard loans.",
    },
    {
      item: "Streamlined Application Process: Enjoy a straightforward and hassle-free borrowing experience with our user-friendly application process, allowing you to submit your loan application quickly and easily.",
    },
    {
      item: "Competitive Interest Rates: Benefit from competitive interest rates tailored to each loan category, ensuring you can access funding at affordable rates.",
    },
    {
      item: "Dedicated Customer Support: Receive personalized assistance throughout your borrowing journey from our experienced customer support team, who are available to address any questions or concerns you may have.",
    },
  ];

  return (
    <div className="p-8 rounded-md border border-gray-200 flex flex-col lg:flex-row justify-between items-center mt-8">
      {/* numbers  */}
      <div className="lg:w-[40%] flex flex-col gap-6 mb-4 lg:mb-0 justify-center items-center">
        <H2 className="text-center">Loan rates as low as</H2>
        <span className="flex gap-2 lg:gap-4 items-baseline">
          <H1 className="!text-[6rem] lg:!text-[16rem]">
            <CountUp start={20} end={5} enableScrollSpy />
          </H1>
          <small className="lg:text-6xl">%</small>
          <small className="lg:text-2xl">P.A</small>
        </span>
      </div>
      {/* info  */}
      <div className="lg:w-[57%] lg:pl-4 xl:pl-0">
        <div className="space-y-2">
          {loanInfo.map(info => (
            <div
              key={info.item}
              className="lg:grid space-y-3 gap-4 grid-flow-col auto-cols-min"
            >
              <span className="w-6 pt-3.5">
                <HiOutlineCheckCircle className="w-6 h-6 text-[#043a5f]" />
              </span>
              <P2 className="lg:w-[23rem] xl:w-[33rem] 2xl:w-[40rem]">
                {info.item}
              </P2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
