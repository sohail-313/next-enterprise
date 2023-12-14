"use client";

import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Who We Are", link: "#about-us" },
    { name: "Our Expertise", link: "#services" },
    { name: "Career", link: "#career" },
    { name: "Contact", link: "#contact" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-white sticky top-0 inset-x-0 z-50 border-b border-gray-200">
      <MaxWidthWrapper>
        <div className="flex items-center justify-between py-2">
          <div className="">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Arapco Logo"
                width={128}
                height={64}
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link href={item.link} key={item.name}>
                {item.name}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <button
              className="focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        <div
          className={`${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } fixed inset-x-0 z-40 flex justify-center w-full h-full transition-transform duration-300 ease-in-out bg-white md:hidden
          `}
        >
          <div className="flex flex-col space-y-6 pt-6 text-center">
            {menuItems.map((item) => (
              <Link
                href={item.link}
                key={item.name}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Navbar;
