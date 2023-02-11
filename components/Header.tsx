import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div>
        <Image
          className="rounded-full"
          src="/logo.png"
          width={50}
          height={50}
          alt="Parvez Musharaf"
        />
      </div>

      <div>
        <Link
          href="wasimart.vercel.app"
          className="px-5 py-3 md:text-base bg-gray-900 text-[#F7ABBA] flex items-center rounded-full text-center   "
        >
          Visit Wsi Mart for Buy
        </Link>
      </div>
    </div>
  );
};

export default Header;
