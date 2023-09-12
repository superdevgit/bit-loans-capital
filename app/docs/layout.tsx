"use client";

import Link from "next/link";
import { ReactNode, useState } from "react";

import {
  HiArrowRightOnRectangle,
  HiOutlineArrowPath,
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineChatBubbleLeftEllipsis,
  HiOutlineCubeTransparent,
  HiOutlineDocumentText,
  HiOutlineHandRaised,
  HiOutlineIdentification,
  HiOutlineNewspaper,
  HiOutlinePhone,
  HiOutlineUserGroup,
  HiOutlineUserPlus,
} from "react-icons/hi2";

// COMPONENTS
// ASSETS
import { MobileNav, NavItem, Popup } from "@/components/shared";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LoginForm, SignUpForm } from "../(website)/components/layout/Header";
// import DashboardHeader from "../components/layout/DashboardHeader";

type LayoutProps = {
  children: ReactNode;
};

// ========================================
// LAYOUT COMPONENT ///////////////////////
// ========================================
export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();

  const nav = [
    {
      id: 0,
      href: "/docs",
      label: "How it works",
      icon: <HiOutlineCubeTransparent className="h-6 w-6" />,
      active: pathname === "/docs",
      dropdown: true,
      dropdownMenu: [
        {
          href: "/docs#account-creation",
          label: "Account Creation",
          icon: "",
          active: pathname === "/docs#account-creation",
        },
        {
          href: "/docs#account-funding",
          label: "Account Funding",
          icon: "",
          active: pathname === "/docs#account-funding",
        },
        {
          href: "/docs#borrowing-process",
          label: "Borrowing Process",
          icon: "",
          active: pathname === "/docs#borrowing-process",
        },
        {
          href: "/docs#lending-process",
          label: "Lending Process",
          icon: "",
          active: pathname === "/docs#lending-process",
        },
        {
          href: "/docs#deposit-and-withdrawal",
          label: "Deposit and Withdrawal",
          icon: "",
          active: pathname === "/docs#deposit-and-withdrawal",
        },
        {
          href: "/docs#repayment-and-interest",
          label: "Repayment and Interest",
          icon: "",
          active: pathname === "/docs#repayment-and-interest",
        },
      ],
    },
    {
      id: 0,
      href: "/docs/onboarding",
      label: "Onboarding",
      icon: <HiOutlineHandRaised className="h-6 w-6" />,
      active: pathname === "/docs/onboarding",
      dropdown: true,
      dropdownMenu: [
        {
          label: "Getting Started",
          icon: "",
          href: "/docs/onboarding/getting-started",
          active: pathname === "/docs/onboarding/getting-started",
        },
        {
          label: "Profile",
          icon: "",
          href: "/docs/onboarding/profile",
          active: pathname === "/docs/onboarding/profile",
        },
        {
          label: "Account Settings",
          icon: "",
          href: "/docs/onboarding/account",
          active: pathname === "/docs/onboarding/account",
        },
        {
          label: "Borrowing process",
          icon: "",
          href: "/docs/onboarding/borrowing",
          active: pathname === "/docs/onboarding/borrowing",
        },
        {
          label: "Lending process",
          icon: "",
          href: "/docs/onboarding/lending",
          active: pathname === "/docs/onboarding/lending",
        },

        {
          label: "Withdraw process",
          icon: "",
          href: "/docs/onboarding/withdrawing",
          active: pathname === "/docs/onboarding/withdrawing",
        },
        {
          label: "Repay process",
          icon: "",
          href: "/docs/onboarding/repaying",
          active: pathname === "/docs/onboarding/repaying",
        },
      ],
    },
    {
      id: 0,
      href: "/docs/lending",
      label: "Lending",
      icon: <HiOutlineBanknotes className="h-6 w-6" />,
      active: pathname === "/docs/lending",
      dropdown: true,
      dropdownMenu: [
        {
          href: "/docs/lending#overview",
          label: "Overview",
          icon: "",
          active: pathname === "/docs/lending#overview",
        },
        {
          href: "/docs/lending#lending-pool",
          label: "Lending Pool",
          icon: "",
          active: pathname === "/docs/lending#lending-pool",
        },
        {
          href: "/docs/lending#benefits",
          label: "Benefits",
          icon: "",
          active: pathname === "/docs/lending#benefits",
        },
      ],
    },
    {
      id: 0,
      href: "/docs/borrowing",
      label: "Borrowing",
      icon: <HiOutlineArrowPath className="h-6 w-6" />,
      active: pathname === "/docs/borrowing",
      dropdown: true,
      dropdownMenu: [
        {
          href: "/docs/borrowing#student-loan",
          label: "Student Loans",
          icon: "",
          active: pathname === "/docs/borrowing#student-loan",
        },
        {
          href: "/docs/borrowing#medical-loan",
          label: "Medical Loans",
          icon: "",
          active: pathname === "/docs/borrowing#medical-loan",
        },
        {
          href: "/docs/borrowing#mortgage-loan",
          label: "Mortgage Loans",
          icon: "",
          active: pathname === "/docs/borrowing#mortgage-loan",
        },
        {
          href: "/docs/borrowing#standard-loan",
          label: "Standard Loans",
          icon: "",
          active: pathname === "/docs/borrowing#standard-loan",
        },
        {
          href: "/docs/borrowing#why-bitloancapital",
          label: "Why Bitloancapital",
          icon: "",
          active: pathname === "/docs/borrowing#why-bitloancapital",
        },
        {
          href: "/docs/borrowing#borrowing-process",
          label: "borrowing process",
          icon: "",
          active: pathname === "/docs/borrowing#borrowing-process",
        },
        {
          href: "/docs/borrowing#repayment-terms",
          label: "repayment terms",
          icon: "",
          active: pathname === "/docs/borrowing#repayment-terms",
        },
        {
          href: "/docs/borrowing#payment-policy",
          label: "payment policy",
          icon: "",
          active: pathname === "/docs/borrowing#payment-policy",
        },
        {
          href: "/docs/borrowing#privacy",
          label: "privacy & security",
          icon: "",
          active: pathname === "/docs/borrowing#privacy",
        },
      ],
    },
    {
      id: 0,
      href: "/docs/about-us",
      label: "About us",
      icon: <HiOutlineBriefcase className="h-6 w-6" />,
      active: pathname === "/docs/about-us",
      dropdown: false,
    },
    {
      id: 0,
      href: "/docs/team",
      label: "Team",
      icon: <HiOutlineUserGroup className="h-6 w-6" />,
      active: pathname === "/docs/team",
      dropdown: false,
    },
    {
      id: 0,
      href: "/docs/career",
      label: "Career",
      icon: <HiOutlineIdentification className="h-6 w-6" />,
      active: pathname === "/docs/career" || pathname.includes("/docs/career/"),
      dropdown: false,
    },
    {
      id: 0,
      href: "/docs/faq",
      label: "FAQ",
      icon: <HiOutlineChatBubbleLeftEllipsis className="h-6 w-6" />,
      active: pathname === "/docs/faq",
      dropdown: false,
    },
    {
      id: 0,
      href: "/docs/terms-of-service",
      label: "Terms of service",
      icon: <HiOutlineNewspaper className="h-6 w-6" />,
      active: pathname === "/docs/terms-of-service",
      dropdown: false,
    },
    {
      id: 0,
      href: "/docs/privacy-policy",
      label: "Privacy Policy",
      icon: <HiOutlineDocumentText className="h-6 w-6" />,
      active: pathname === "/docs/privacy-policy",
      dropdown: false,
    },
    {
      id: 0,
      href: "/docs/contact-us",
      label: "Contact us",
      icon: <HiOutlinePhone className="h-6 w-6" />,
      active: pathname === "/docs/contact-us",
      dropdown: false,
    },
  ];

  // RETURN ///////////////////////////
  return (
    <>
      <div className="h-screen">
        {/* <DashboardHeader /> */}
        <div className="flex h-screen">
          <aside className="hidden xl:flex w-[20%] border-r border-gray-300 p-5 flex-col gap-5 h-full overflow-y-auto">
            <Header nav={nav} />
          </aside>
          <main className="w-full xl:w-[80%] h-screen overflow-y-auto p-5">
            {/* mobile header */}
            <div className="xl:hidden relative">
              <MobileNav nav={nav} />
            </div>
            {children}
          </main>
        </div>
      </div>
    </>
  );
}

////////////////////////////////////////
// EXTENDED COMPONENTS /////////////////

const Header = ({ nav }: { nav: any[] }) => {
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  return (
    <>
      {/* Logo */}
      <div className="md:border-b flex items-center justify-between border-b-gray-200 pb-5">
        <Link href="/">
          <Image src={"/assets/logo.png"} alt="logo" width={200} height={50} />
        </Link>
      </div>
      <nav className={`flex-col flex`}>
        {nav.map(item => (
          <NavItem setMobileNav={() => {}} key={item.href} item={item} />
        ))}
      </nav>
      <nav className={`flex gap-2 flex-col mt-6`}>
        <button
          onClick={() => setShowLoginForm(true)}
          className="bg-gray-50 rounded flex items-center p-4 gap-4"
        >
          <HiArrowRightOnRectangle className="h-6 w-6" />
          <span>login</span>
        </button>
        <button
          onClick={() => {
            setShowSignUpForm(true);
          }}
          className="bg-gray-50 rounded flex items-center p-4 gap-4"
        >
          <HiOutlineUserPlus className="h-6 w-6" />
          <span>Sign up</span>
        </button>
      </nav>
      {/* sign up  */}
      {showSignUpForm && (
        <Popup closePopup={setShowSignUpForm}>
          <SignUpForm closeModal={setShowSignUpForm} />
        </Popup>
      )}
      {/* login */}
      {showLoginForm && (
        <Popup closePopup={setShowLoginForm}>
          <LoginForm closeModal={setShowLoginForm} />
        </Popup>
      )}
    </>
  );
};
