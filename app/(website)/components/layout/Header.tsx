"use client";
import { MobileNav, Popup } from "@/components/shared";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  HiChevronDown,
  HiChevronUp,
  HiOutlineArrowRightOnRectangle,
  HiOutlineUserPlus,
} from "react-icons/hi2";

// ASSETS =============================================
// import logo from "/assets/logo.png"

// COMPONENTS =========================================

// ===================================================
// HEADER LAYOUT COMPONENT (app/page.tsx) ============
// ===================================================
export default function Header() {
  // handle logout
  const handleLogOut = () => {
    // dispatch(logoutUser());
  };

  const pathname = usePathname();

  const navigation = [
    {
      label: "Home",
      href: "/",
      dropdown: false,

      active: pathname === "/",
    },
    {
      label: "About",
      href: "/docs/about-us",
      dropdown: false,

      active: pathname === "/docs/about-us",
    },

    {
      label: "Contact Us",
      href: "/docs/contact-us",
      dropdown: false,

      active: pathname === "/docs/contact-us",
    },
    {
      label: "More Links",
      dropdown: true,
     
      dropdownMenu: [
        {
          label: "Lending",
          href: "/docs/lending",
          active: pathname === "/docs/lending",
        },
        {
          label: "Borrowing",
          href: "/docs/borrowing",
          active: pathname === "/docs/borrowing",
        },
        {
          label: "FAQ",
          href: "/docs/faq",
          active: pathname === "/docs/faq",
        },
      ],
    },
  ];

  const [loggedIn, setLoggedIn] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  // RETURN ==========================================
  return (
    <>
      <header className="border-b border-b-gray-300 shadow-sm bg-white py-3">
        <div className="container hidden w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[75%] lg:flex items-center justify-between gap-3">
          <div className="hidden lg:block">
            {/* navigation  */}
            <nav className="flex gap-8 items-center">
              {navigation.map(nav => (
                <NavItem key={nav.label} item={nav} setMobileMenu={() => {}} />
              ))}
            </nav>
          </div>
          {/* logo */}
          <Link href="/" className="text-2xl font-bold lg:-ml-[14rem]">
            <Image src="/assets/logo.png" alt="logo" width={200} height={50} />
          </Link>

          {/* buttons  */}
          <div className="hidden lg:flex gap-4 items-center">
            <button
              onClick={() => setShowLoginForm(true)}
              className="bg-[#033f5d] hover:bg-[#07202d] flex gap-2 items-center text-white px-4 py-2 rounded-lg"
            >
              <HiOutlineArrowRightOnRectangle />
              <span>Login</span>
            </button>
            <button
              onClick={() => setShowSignUpForm(true)}
              className="bg-[#033f5d] hover:bg-[#07202d] flex gap-2 items-center text-white px-4 py-2 rounded-lg"
            >
              <HiOutlineUserPlus />
              <span>Register</span>
            </button>
          </div>
          {/* hamburger menu */}
          {/* <div className="lg:hidden">
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="text-2xl"
            >
              {showMobileMenu ? <HiXMark /> : <HiBars3 />}
            </button>
          </div> */}
        </div>
        <div className="px-4 md:hidden">
          {/* mobile navigation  */}
          <MobileNav nav={navigation} />
          {/* <div
            className={`fixed md:hidden ${
              showMobileMenu ? "top-[4rem]" : "-top-[25rem]"
            } left-0 w-full h-[25rem] bg-white shadow-md transition-all ease-in`}
          >
            <div className="container w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[75%] flex flex-col gap-4 py-10">
            </div>
          </div> */}
        </div>
      </header>
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
}

// EXTENDED COMPONENTS =================================

const NavItem = ({
  item,
  setMobileMenu,
}: {
  item: any;
  setMobileMenu: (arg: boolean) => void;
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return item.dropdown ? (
    <div
      onClick={() => setDropdownOpen(!dropdownOpen)}
      key={item.href}
      className={`${
        item.active && "lg:border-b-2 lg:border-b-[#033f5d]"
      } relative cursor-pointer flex gap-4 items-center px-4 lg:p-0 w-[10rem]`}
    >
      {item.label} {dropdownOpen ? <HiChevronUp /> : <HiChevronDown />}
      {/* dropdown */}
      {dropdownOpen && (
        <div className="absolute top-10 left-0 w-full lg:bg-white lg:shadow-md">
          <div className="w-full flex flex-col gap-4 py-4">
            {item.dropdownMenu.map((menu: any) => (
              <DropDownItem
                key={menu.label}
                label={menu.label}
                href={menu.href}
                active={menu.active}
                handleClick={() => setMobileMenu(false)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  ) : (
    <Link
      href={item.href!}
      key={item.href}
      className={`${
        item.active &&
        "lg:border-b-2 lg:border-b-[#033f5d] bg-gray-100 lg:bg-none p-4 lg:p-0"
      } px-4 lg:p-0`}
    >
      {item.label}
    </Link>
  );
};

type Navigation =
  | {
      label: string;
      href?: string;
      active: boolean;
      dropdown: boolean;
      dropdownMenu?: undefined;
    }
  | {
      label: string;
      dropdown: boolean;
      dropdownMenu: {
        label: string;
        href: string;
        active: boolean;
      }[];
      href?: undefined;
      active?: undefined;
    };

const MobileNavigation = ({ navigation }: { navigation: Navigation[] }) => {
  return (
    <div className="flex flex-col gap-4">
      {navigation.map(nav => (
        <NavItem key={nav.label} item={nav} setMobileMenu={() => {}} />
      ))}
    </div>
  );
};

export const SignUpForm = ({
  closeModal,
}: {
  closeModal: (state: boolean) => void;
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [upload, setUpload] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [newsLetter, setNewsLetter] = useState("");
  const [agreedWithTerms, setAgreedWithTerms] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ name, email, upload, dob });
    closeModal(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 ">
      {/* name */}
      <div className="space-y-1">
        <label htmlFor="name" className="block  font-medium text-gray-700">
          Username
        </label>

        <input
          type="text"
          name="name"
          id="name"
          className="p-3 border shadow-sm block w-full sm: border-gray-300 focus:border-[#0f3a70] focus:outline-none rounded-md"
          placeholder="John Doe"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      {/* email */}
      <div className="space-y-1">
        <label htmlFor="email" className="block  font-medium text-gray-700">
          Email
        </label>

        <input
          type="text"
          name="email"
          id="email"
          className="p-3 border shadow-sm block w-full sm: border-gray-300 focus:border-[#0f3a70] focus:outline-none rounded-md"
          placeholder="name@example.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      {/* password */}
      <div className="space-y-1">
        <label htmlFor="password" className="block  font-medium text-gray-700">
          Password
        </label>

        <input
          type="text"
          name="password"
          id="password"
          className="p-3 border shadow-sm block w-full sm: border-gray-300 focus:border-[#0f3a70] focus:outline-none rounded-md"
          placeholder="Xyz@13gg2we"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      {/* upload */}
      <div className="space-y-1">
        <label htmlFor="upload" className="block  font-medium text-gray-700">
          Upload profile picture
        </label>

        <input
          type="file"
          name="upload"
          id="upload"
          className="p-3 border shadow-sm block w-full sm: border-gray-300 focus:border-[#0f3a70] focus:outline-none rounded-md"
          value={upload}
          onChange={e => setUpload(e.target.value)}
        />
      </div>
      {/* dob */}
      <div className="space-y-1">
        <label htmlFor="dob" className="block  font-medium text-gray-700">
          Birthday
        </label>

        <input
          type="date"
          name="dob"
          id="dob"
          className="p-3 border shadow-sm block w-full sm: border-gray-300 focus:border-[#0f3a70] focus:outline-none rounded-md"
          // placeholder="John Doe"
          value={dob}
          onChange={e => setDob(e.target.value)}
        />
      </div>
      {/* gender */}
      <div className="space-y-1">
        <label htmlFor="gender" className="block  font-medium text-gray-700">
          Gender
        </label>

        <select
          name="gender"
          id="gender"
          className="p-3 border shadow-sm block w-full sm: border-gray-300 focus:border-[#0f3a70] focus:outline-none rounded-md"
          // placeholder="John Doe"
          value={gender}
          onChange={e => setGender(e.target.value)}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="others">Others</option>
        </select>
      </div>
      {/* newsLetter */}
      <div className="flex gap-2.5 items-center">
        <label
          htmlFor="newsLetter"
          className="font-medium text-gray-700 mt-1.5"
        >
          Subscribe to our Newsletter
        </label>

        <input
          type="checkbox"
          name="newsLetter"
          id="newsLetter"
          className="p-3"
          // placeholder="John Doe"
          value={newsLetter}
          onChange={e => setNewsLetter(e.target.value)}
        />
      </div>
      {/* agreedWithTerms */}
      <div className="flex gap-2.5 items-center">
        <label
          htmlFor="agreedWithTerms"
          className="font-medium text-gray-700 mt-1.5"
        >
          I agree to the terms and conditions
        </label>

        <input
          type="checkbox"
          name="agreedWithTerms"
          id="agreedWithTerms"
          className="p-3"
          // placeholder="John Doe"
          value={agreedWithTerms}
          onChange={e => setAgreedWithTerms(e.target.value)}
        />
      </div>

      {/* button  */}

      <button className="text-white bg-[#052131] px-8 !mt-8 py-4 rounded-lg text-xl">
        Submit
      </button>
    </form>
  );
};

export const LoginForm = ({
  closeModal,
  resetPassword = false,
}: {
  closeModal: (state: boolean) => void;
  resetPassword?: boolean;
}) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [forgotPassword, setForgotPassword] = useState(resetPassword);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    closeModal(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 ">
      {forgotPassword ? (
        <>
          <div className="space-y-1">
            <label htmlFor="email" className="block  font-medium text-gray-700">
              Email
            </label>

            <input
              type="text"
              name="email"
              id="email"
              className="p-3 border shadow-sm block w-full sm: border-gray-300 focus:border-[#0f3a70] focus:outline-none rounded-md"
              placeholder="name@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
        </>
      ) : (
        <>
          {/* email */}
          <div className="space-y-1">
            <label htmlFor="email" className="block  font-medium text-gray-700">
              Email
            </label>

            <input
              type="text"
              name="email"
              id="email"
              className="p-3 border shadow-sm block w-full sm: border-gray-300 focus:border-[#0f3a70] focus:outline-none rounded-md"
              placeholder="name@example.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          {/* password */}
          <div className="space-y-1">
            <label
              htmlFor="password"
              className="block  font-medium text-gray-700"
            >
              Password
            </label>

            <input
              type="password"
              name="password"
              id="password"
              className="p-3 border shadow-sm block w-full sm: border-gray-300 focus:border-[#0f3a70] focus:outline-none rounded-md"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <button
            className="text-[#04436d] block text-lg"
            onClick={() => setForgotPassword(true)}
          >
            Forgot password ?
          </button>
          {/* <br /> */}
        </>
      )}

      {/* button  */}

      <button className="text-white bg-[#052131] px-8 !mt-8 py-4 rounded-lg text-xl">
        Submit
      </button>
    </form>
  );
};

const DropDownItem = ({
  label,
  href,
  active,
  handleClick,
}: {
  label: string;
  href: string;
  active: boolean;
  handleClick: () => void;
}) => {
  return (
    <Link
      onClick={handleClick}
      href={href}
      className={`hover:bg-gray-50 rounded flex items-center px-4 gap-4 ${
        active && "bg-gray-100 py-4"
      }`}
    >
      <span>{label}</span>
    </Link>
  );
};