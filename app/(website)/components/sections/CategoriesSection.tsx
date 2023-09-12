"use client";
import { Reveal } from "@/components/shared";
import { H2, H3, P2, SubH1 } from "@/components/typography";
import Link from "next/link";
import { MedicalIcon, MortgageIcon, StandardIcon, UserIcon } from "../icons";

const CategoriesSection = () => {
  const categories = [
    {
      icon: <MedicalIcon fill="#043a5f" />,
      title: "Medical Loans",
      description:
        "Financial assistance for medical treatments, procedures, or healthcare-related expenses.",
      href: "/docs/borrowing#medical-loan",
    },
    {
      icon: <UserIcon fill="#043a5f" />,
      title: "Student Loans",
      description:
        "Funding for educational expenses to support your academic journey.",
      href: "/docs/borrowing#student-loan",
    },
    {
      icon: <MortgageIcon fill="#043a5f" />,
      title: "Mortgage Loans",
      description:
        "Loans specifically designed for homebuyers or homeowners looking to refinance.",
      href: "/docs/borrowing#mortgage-loan",
    },
    {
      icon: <StandardIcon fill="#043a5f" />,
      title: "Standard Loans",
      description:
        "General-purpose loans for various personal or business needs.",
      href: "/docs/borrowing#standard-loan",
    },
  ];

  return (
    <section className="pb-8">
      <Reveal>
        <div className="rounded-2xl flex flex-col lg:flex-row justify-between p-8 lg:py-14">
          {/* headings  */}
          <div className="lg:w-1/3 lg:pt-10">
            <SubH1 className="p-1 !bg-gray-400 text-white rounded inline">
              Our benefits
            </SubH1>
            <H2 className="mb-4 mt-2">Our Loan Categories</H2>
            <P2>
              We offer a range of loan categories to suit different financial
              needs. Whether you&rsquo;re a student looking for educational
              financing, a medical professional in need of funding, or a
              homeowner seeking a mortgage, we have tailored loan options for
              you. Our loan categories include:
            </P2>
          </div>
          {/* cards  */}
          <div className="flex-1">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-8 lg:p-8">
              {categories.map((service, index) => (
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

export default CategoriesSection;

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
  href: string;
}) => {
  return (
    <Link
      href={href}
      scroll={false}
      className={`flex gap-3 ${href && "cursor-pointer"}`}
    >
      <div className="h-14 w-16 flex">{icon}</div>
      <div className="space-y-2 pt-2">
        <H3>{title}</H3>
        <P2>{description}</P2>
      </div>
    </Link>
  );
};
