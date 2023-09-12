"use client";
import {
  LoginForm,
  SignUpForm,
} from "@/app/(website)/components/layout/Header";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  HiArrowRightOnRectangle,
  HiBars3,
  HiOutlineUserPlus,
  HiXMark,
} from "react-icons/hi2";
import NavItem from "./NavItem";
import Popup from "./Popup";

const MobileNav = ({
  nav,
  authNav = "notLoggedIn",
}: {
  nav: any[];
  authNav?: string;
}) => {
  const [mobileNav, setMobileNav] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const pathname = usePathname();

  return (
    <>
      <div className="flex items-center justify-between border-b-gray-200">
        <Link href="/">
          <Image src={"/assets/logo.png"} alt="logo" width={200} height={50} />
        </Link>
        <span onClick={() => setMobileNav(!mobileNav)} className="xl:hidden ">
          {mobileNav ? (
            <HiXMark className="h-6 w-6" />
          ) : (
            <HiBars3 className="h-6 w-6" />
          )}
        </span>
      </div>
      {/* menu  */}
      <div
        className={`absolute bg-white w-full shadow-md transition-all ease-in z-20 px-2 ${
          mobileNav ? "top-14" : "-top-[90vh]"
        } left-0`}
      >
        <nav className={`flex-col mt-5 ${mobileNav ? "flex" : "hidden"} xl:flex`}>
          {nav.map(item => (
            <NavItem setMobileNav={setMobileNav} key={item.label} item={item} />
          ))}
        </nav>
        <nav
          className={`${
            mobileNav ? "flex" : "hidden"
          } xl:flex gap-2 flex-col mt-6`}
        >
          {authNav === "notLoggedIn" ? (
            <>
              <button
                onClick={() => {
                  setShowLoginForm(true);
                }}
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
            </>
          ) : (
            <button
              onClick={() => {
                // setShowLoginForm(true);
              }}
              className="border border-red-500 text-red-500 rounded flex items-center p-4 gap-4"
            >
              <HiArrowRightOnRectangle className="h-6 w-6" />
              <span>logout</span>
            </button>
          )}
        </nav>
      </div>

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

export default MobileNav;
