"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { HiOutlineChevronDown, HiOutlineChevronRight } from "react-icons/hi2";

const NavItem = ({
  item,
  setMobileNav,
}: {
  item: any;
  setMobileNav: (arg: boolean) => void;
}) => {
  const [dropdown, setDropdown] = useState(false);
  const router = useRouter();

  return (
    <>
      {item.dropdown ? (
        <>
          <button
            key={item.href}
            className={`hover:bg-gray-50 rounded flex items-center p-4 gap-4 ${
              item.active && "bg-gray-100 "
            }`}
            onClick={() => {
              setDropdown(!dropdown);
              router.push(item.href);
            }}
          >
            {item.icon}
            <span className="mr-auto">{item.label}</span>
            {dropdown ? <HiOutlineChevronDown /> : <HiOutlineChevronRight />}
          </button>
          {dropdown && (
            <nav className="flex flex-col mt-2 bg-gray-50">
              {item.dropdownMenu.map((item: any) => (
                <Link
                  href={item.href}
                  key={item.href}
                  className={`hover:bg-white rounded flex items-center p-4 pl-6 gap-4 capitalize ${
                    item.active && "bg-gray-100 "
                  }`}
                  onClick={() => setMobileNav(false)}
                >
                  <span> - </span>
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
          )}
        </>
      ) : (
        <Link
          href={item.href}
          key={item.href}
          className={`hover:bg-gray-50 rounded flex items-center p-4 gap-4 ${
            item.active && "bg-gray-100 "
          }`}
          onClick={() => setMobileNav(false)}
        >
          {item.icon}
          <span>{item.label}</span>
        </Link>
      )}{" "}
    </>
  );
};

export default NavItem;
