"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="px-6 sm:px-10 md:px-20 lg:px-32 xl:px-40 2xl:px-50 py-20 text-white flex flex-col">
      <div className="flex flex-col gap-10 lg:gap-20 lg:flex-row flex-wrap justify-between">
        {/* Brand Info */}
        <div className="flex flex-col max-w-md">
          
          <Image src={"./images/logo.svg"} alt="logo" width={180} height={50} className="mt-2" />
          <p className="text-lg font-semibold mt-10">
            Empowering Your Digital Journey
          </p>
          <p className="mt-2 text-sm">
            Skigea delivers cutting-edge software development, intuitive app
            solutions, and impactful digital marketing to help businesses grow
            and innovate in the digital world.
          </p>
        </div>

        {/* Company */}
        <div>
          <p className="text-lg font-semibold">Company</p>
          <ul className="mt-5 flex flex-col gap-2 text-sm text-[#CCCACA]">
            <li>
              <Link href="/about" className="cursor-pointer no-underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/careers" className="cursor-pointer no-underline">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/faqs" className="cursor-pointer no-underline">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/team" className="cursor-pointer no-underline">
                Teams
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <p className="text-lg font-semibold">Services</p>
          <ul className="mt-5 flex flex-col gap-2 text-sm text-[#CCCACA]">
            <li>
              <Link href="/marketing" className="cursor-pointer no-underline">
                Marketing
              </Link>
            </li>
            <li>
              <Link href="/design" className="cursor-pointer no-underline">
                Design
              </Link>
            </li>
            <li>
              <Link href="/products" className="cursor-pointer no-underline">
                Products
              </Link>
            </li>
          </ul>
        </div>

        {/* Documentation */}
        <div>
          <p className="text-lg font-semibold">Documentation</p>
          <ul className="mt-5 flex flex-col gap-2 text-sm text-[#CCCACA]">
            <li>
              <Link
                href="/privacy-policy"
                className="cursor-pointer no-underline"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/work-system" className="cursor-pointer no-underline">
                Our Work System
              </Link>
            </li>
            <li>
              <Link href="/networks" className="cursor-pointer no-underline">
                Networks
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="mt-20 text-center text-xs text-[#CCCACA]">
        © {new Date().getFullYear()} All Rights Reserved
      </p>
    </div>
  );
}
