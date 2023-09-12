"use client";
import { Popup, Reveal } from "@/components/shared";
import { P2 } from "@/components/typography";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  FaDiscord,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaReddit,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import { HiPhone } from "react-icons/hi2";
import { AtIcon, GlobIcon } from "../icons";
import { LoginForm } from "./Header";

// ASSETS =============================================
// import logo from "/assets/logo.png"

// COMPONENTS =========================================

// ===================================================
// FOOTER LAYOUT COMPONENT (app/page.tsx) ============
// ===================================================
export default function Footer() {
  const [showResetPasswordForm, setShowResetPasswordForm] = useState(false);
  const pathname = usePathname();

  const usefulLinks = [
    {
      label: "Home",
      href: "/",
      active: pathname === "/",
    },
    {
      label: "About",
      href: "/docs/about-us",
      active: pathname === "/docs/about-us",
    },
    {
      label: "Contact Us",
      href: "/docs/contact-us",
      active: pathname === "/docs/contact-us",
    },
    {
      label: "Admin Dashboard",
      href: "/admin",
      active: pathname === "/admin",
    },
    {
      label: "Client Dashboard",
      href: "/client",
      active: pathname === "/client",
    },
    {
      label: "Staff Dashboard",
      href: "/staff",
      active: pathname === "/staff",
    },
  ];

  const socials = [
    {
      label: "Facebook",
      href: "https://web.facebook.com/profile.php?id=100093215115161",
      icon: <FaFacebookSquare />,
    },
    {
      label: "Twitter",
      href: "https://twitter.com/Bitloanscapital",
      icon: <FaTwitter />,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/bitloans-capital-627121279/",
      icon: <FaLinkedin />,
    },
    {
      label: "Pinterest",
      href: "https://www.pinterest.com/BitloansCapital/",
      icon: <FaPinterest />,
    },
    {
      label: "Reddit",
      href: "https://www.reddit.com/user/BitloansCapital",
      icon: <FaReddit />,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/bitloanscapital/",
      icon: <FaInstagram />,
    },
    {
      label: "Tiktok",
      href: "www.tiktok.com/@bitloanscapital",
      icon: <FaTiktok />,
    },
    {
      label: "Discord",
      href: "https://discord.gg/tKFjgzsCgb",
      icon: <FaDiscord />,
    },
  ];

  const year = new Date().getFullYear();

  // RETURN ==========================================
  return (
    <>
      <footer className="border-b border-b-gray-300 shadow-sm bg-[#05243a] text-white py-14 ">
        <div className="container w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[75%]">
          {/* top  */}
          <div className=" flex flex-col lg:flex-row justify-between gap-3 pb-14">
            {/* company intro  */}
            <div className="lg:w-1/3 space-y-8 bg-white text-black p-8 rounded-lg">
              <Reveal>
                <Image
                  src="/assets/logo.png"
                  alt="logo"
                  width={200}
                  height={50}
                  // className="rounded-full"
                />
                <P2 className="mt-4 mb-6">
                  Bitloanscapital is not a bank, depository institution, or
                  fiduciary. Assets are not insured or covered by compensation
                  schemes. Holding and trading crypto assets involve risks.
                  Bitloanscapital does not provide financial, legal, or tax
                  advice. This website does not offer inducement for financial
                  decisions.
                </P2>

                {/* social medias */}
                <div className="flex items-center gap-4">
                  {socials.map(social => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="text-2xl hover:text-gray-500"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* useful links */}
            <div className="p-8 lg:w-1/3">
              <Reveal delay={0.35}>
                <h3 className="text-xl font-bold mb-4">Useful Links</h3>
                <div className="flex flex-col gap-2">
                  {usefulLinks.map(link => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={`${
                        link.active ? "hover:text-gray-500" : null
                      } hover:text-gray-500`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <p
                    className="cursor-pointer"
                    onClick={() => setShowResetPasswordForm(true)}
                  >
                    Forgot password
                  </p>
                </div>
              </Reveal>
            </div>
            {/* company info */}
            <div className="p-8 md:pt-8 pt-2 lg:w-1/3">
              <Reveal delay={0.45}>
                <h3 className="text-xl font-bold mb-4">Company Info</h3>
                <div className="flex flex-col gap-8 md:gap-4">
                  <P2 className="h-6 flex flex-col md:flex-row gap-2 md:items-center">
                    <span className="h-5 w-5">
                      <HiPhone fill="#fff" />
                    </span>
                    <span>+1 (928) 328-8764</span>
                  </P2>
                  <P2 className="h-6 flex flex-col md:flex-row gap-2 md:items-center">
                    <span className="h-5 w-5">
                      <GlobIcon fill="#fff" />
                    </span>
                    <span>
                      161 Shedden Rd, George Town 1105, Cayman Islands
                    </span>
                  </P2>
                  <P2 className="h-6 flex flex-col md:flex-row gap-2 md:items-center">
                    <span className="h-5 w-5 pt-4 md:pt-0">
                      <AtIcon fill="#fff" />
                    </span>
                    <span> support@bitloanscapital.com</span>
                  </P2>
                </div>
              </Reveal>
            </div>
          </div>
          <Reveal delay={0.55}>
            {/* bottom */}
            <>
              <small className="text-sm">
                © {year} Bitloanscapital. All rights reserved. Bitloanscapital
              </small>
            </>
          </Reveal>
        </div>
      </footer>
      {/* resetPassword */}
      {showResetPasswordForm && (
        <Popup closePopup={setShowResetPasswordForm}>
          <LoginForm
            closeModal={setShowResetPasswordForm}
            resetPassword={true}
          />
        </Popup>
      )}
    </>
  );
}

// EXTENDED COMPONENTS =================================
