"use client";

import Link from "next/link";
import { ReactNode } from "react";

import {
  HiOutlineCog6Tooth,
  HiOutlineUser,
  HiOutlineUserGroup,
  HiOutlineUsers
} from "react-icons/hi2";

// COMPONENTS
// ASSETS
import { usePathname } from "next/navigation";
import DashboardHeader from "../components/layout/DashboardHeader";

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
      href: "/admin",
      label: "Clients",
      icon: <HiOutlineUserGroup className="h-6 w-6" />,
      active:
        pathname === "/admin" ||
        pathname === "/admin/view-job" ||
        pathname === "/admin/view-job/mobile",
    },
    {
      id: 0,
      href: "/admin/staff",
      label: "Staff",
      icon: <HiOutlineUsers className="h-6 w-6" />,
      active:
        pathname === "/admin/staff" ||
        pathname === "/admin/view-job" ||
        pathname === "/admin/view-job/mobile",
    },
  ];

  const bottomNav = [
    {
      id: 0,
      href: "/admin/profile",
      label: "Profile",
      icon: <HiOutlineUser className="h-6 w-6" />,
      active: pathname === "/admin/profile",
    },
    {
      id: 0,
      href: "/admin/settings",
      label: "Settings",
      icon: <HiOutlineCog6Tooth className="h-6 w-6" />,
      active: pathname === "/admin/settings",
    },
  ];

  // RETURN ///////////////////////////
  return (
    <div className="h-screen">
      <DashboardHeader nav={[...nav, ...bottomNav]} authNav='loggedIn' />
      <div className="flex h-[91.2vh]">
        <aside className="hidden md:flex w-[20%] border-r border-gray-300 p-5 flex-col justify-between h-full">
          <nav className="flex flex-col">
            {nav.map(item => (
              <Link
                href={item.href}
                key={item.href}
                className={` rounded flex items-center p-3 gap-3 ${
                  item.active && "bg-gray-200 "
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
          <nav className="flex flex-col mt-10">
            {bottomNav.map(item => (
              <Link
                href={item.href}
                key={item.href}
                className={` rounded flex items-center p-3 gap-3 ${
                  item.active && "bg-gray-200 "
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </aside>
        <main className="w-full md:w-[80%] h-full">{children}</main>
      </div>
    </div>
  );
}

////////////////////////////////////////
// EXTENDED COMPONENTS /////////////////
// const LinkItem = ({ item }: {item: { href: string; active: boolean}}) => (<Link
//   href={item.href}
//   key={item.href}
//   className={` rounded flex items-center p-3 gap-3 ${
//     item.active && "bg-gray-200 "
//   }`}
// >
//   {item.icon}
//   <span>{item.label}</span>
// </Link>)


