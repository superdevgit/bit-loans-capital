import { MobileNav } from "@/components/shared";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowRightOnRectangle, HiUserCircle } from "react-icons/hi2";

const DashboardHeader = ({ nav, authNav }: { nav: any[], authNav?: string }) => {
  return (
    <header className="border-b border-b-gray-300 shadow-sm bg-white py-3 px-5">
      <div className="hidden xl:flex items-center justify-between gap-3">
        <div className="flex gap-14 items-center">
          {/* logo */}
          <Link href="/" className="text-2xl font-bold">
            <Image src="/assets/logo.png" alt="logo" width={200} height={50} />
          </Link>
        </div>
        {/* buttons  */}
        <div className="flex gap-4 items-center">
          <div className="flex">
            <HiUserCircle className="h-12 w-12 text-gray-400" />
          </div>

          <Link
            href="/login"
            className="bg-[#033f5d] hover:bg-[#07202d] flex gap-2 items-center text-white px-4 py-2 rounded-lg"
          >
            <HiOutlineArrowRightOnRectangle />
            <span>Logout</span>
          </Link>
        </div>
        {/* mobile */}
      </div>
      <div className="xl:hidden">
        <MobileNav nav={nav} authNav={authNav} />
      </div>
    </header>
  );
};

export default DashboardHeader;
