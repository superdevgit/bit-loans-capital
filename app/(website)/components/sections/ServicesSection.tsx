"use client";

import { Reveal } from "@/components/shared";
import { H2, H3, P2, SubH1 } from "@/components/typography";
import { useRouter } from "next/navigation";
import { ClipboardIcon, GlobIcon, ReturnsIcon, SecurityIcon } from "../icons";

const ServicesSection = () => {
  const services = [
    {
      icon: <ReturnsIcon fill="#043a5f" />,
      title: "Industry-Leading Returns",
      description:
        "As a lender, you can enjoy attractive returns on your Bitcoin investment. Our interest rates are above 15%, allowing us to offer you competitive returns of 14% per annum. We strive to provide industry-leading returns while prioritizing the profitability of our lenders.",
      href: "/docs/lending",
    },
    {
      icon: <ClipboardIcon fill="#043a5f" />,
      title: "Flexible Terms and Conditions",
      description:
        "Unlike automated crypto lending platforms, our terms and conditions are set by the company and frequently updated based on community feedback. This flexibility allows us to adapt and meet the evolving needs of our clients. We take community response seriously and value the input of our users.",
      href: "/docs/terms-of-service",
    },
    {
      icon: <GlobIcon fill="#043a5f" />,
      title: "Global Accessibility",
      description:
        "Bitloanscapital operates fully online, eliminating the need for physical operations. This allows us to serve clients globally, providing access to our services from anywhere in the world. Wherever you are in the world, you can participate in the future of decentralized finance.",
    },
    {
      icon: <SecurityIcon fill="#043a5f" />,
      title: "Privacy and Security",
      description:
        "We prioritize the privacy and security of our clients. Our platform operates fully online, and user data is highly encrypted to provide the highest level of privacy. Our anonymous wallet system ensures that your transactions remain private and secure. Additionally, we operate out of a tax haven jurisdiction, further enhancing privacy and minimizing regulatory obligations.",
    },
  ];

  return (
    <section className="text- pb-8">
      <Reveal>
        <div className="rounded-2xl bg-[#d3e0f0] flex flex-col lg:flex-row justify-between p-8  lg:py-14">
          {/* headings  */}
          <div className="lg:w-1/3 lg:pt-10">
            <SubH1 className="p-1 !bg-gray-400 text-white rounded inline">
              Our services
            </SubH1>
            <H2 className="mb-4 mt-2">Why Choose Bitloanscapital?</H2>
            <P2>
              At Bitloanscapital, we are dedicated to revolutionizing the
              lending industry by harnessing the power of Bitcoin. Founded in
              2019 by industry leaders and backed by years of experience, our
              platform is designed to provide a seamless and secure lending
              experience for both lenders and borrowers. Welcome and experience:
            </P2>
          </div>
          {/* cards  */}
          <div className="flex-1">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-8 lg:p-8">
              {services.map((service, index) => (
                <Reveal key={service.title} delay={0.1 * index}>
                  <Card
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    href={service.href}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default ServicesSection;

// EXTENDED COMPONENTS =================================

const Card = ({
  title,
  description,
  icon,
  className,
  href,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  href?: string;
}) => {
  const router = useRouter();

  return (
    <div
      onClick={() => href && router.push(href)}
      className={`flex justify-start flex-col lg:flex-row gap-3 ${
        href && "cursor-pointer"
      }`}
    >
      <div className="h-14 w-12 lg:w-60 flex ">{icon}</div>
      <div className="space-y-2 pt-2">
        <H3>{title}</H3>
        <P2>{description}</P2>
      </div>
    </div>
  );
};
