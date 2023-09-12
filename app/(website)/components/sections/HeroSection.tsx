import { Reveal } from "@/components/shared";
import { H1, P1 } from "@/components/typography";
import Link from "next/link";
import { HiOutlineChevronRight } from "react-icons/hi2";

const HeroSection = () => {
  return (
    <section className="!text-white text-center pb-8">
      <div className="bg-gradient-to-br from-[#033f5c] to-[#052131] md:h-[70vh] flex justify-center items-center">
        <div className="p-4 py-14 md:p-0 md:w-[50%] space-y-4 md:space-y-14">
          <Reveal>
            <H1 className="!text-white">Welcome to Bitloanscapital</H1>
          </Reveal>
          <Reveal delay={0.35}>
            <P1>
              Welcome to Bitloanscapital, your premier Bitcoin lending platform
              for anonymous and secure borrowing solutions. With our diverse
              loan categories, competitive interest rates, and dedicated
              customer support, we provide the means to achieve your financial
              goals while maintaining confidentiality. Experience the freedom of
              anonymous lending and borrowing.
            </P1>
          </Reveal>
          {/* buttons  */}
          <div className="flex justify-center space-x-4">
            <Reveal delay={0.45}>
              <Link
                href="/docs/contact-us"
                className="capitalize bg-white text-[#052131] px-6 py-2 rounded-lg flex gap-2 items-center"
              >
                <span>contact us</span>
                <HiOutlineChevronRight />
              </Link>
            </Reveal>

            <Reveal delay={0.55}>
              <Link
                href="/docs/about-us"
                className="capitalize flex gap-2 items-center px-6 py-2 rounded-lg"
              >
                <span>about us</span>
                <HiOutlineChevronRight />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
