"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion"; // fixed import
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

interface HeaderProps {
  className?: string;
}

const navItems = ["Marketing", "Design", "Products"];

const Header = ({ className }: HeaderProps) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <header
      className={cn(
        `fixed px-20 top-0 w-full z-50 backdrop-blur items-center bg-[linear-gradient(to_right,rgb(8,0,43),rgb(0,0,0))]`,
        className
      )}
    >
      <div className="flex h-20 items-center justify-between">
        <Link
          href="/"
          className="flex items-center space-x-2 font-bold text-xl hover:text-primary transition-colors"
        >
          <Image
            src={"/images/logo.svg"}
            alt="logo"
            width={130}
            height={50}
            className="ml-2"
          />
        </Link>

        <div className="flex items-center gap-10">
          <nav>
            <ul className="flex gap-10 text-white text-sm font-medium">
              {navItems.map((item) => {
                const path = `/${item.toLowerCase()}`;
                const isActive = pathname === path;

                return (
                  <motion.li
                    key={item}
                    onClick={() => router.push(path)}
                    className={cn(
                      "cursor-pointer transition-colors duration-300",
                      isActive ? "text-gradient1 " : "hover:text-[#A93FFD]"
                    )}
                  >
                    {item}
                  </motion.li>
                );
              })}
            </ul>
          </nav>

          <div className="border-l pl-4 dark:border-gray-800 cursor-pointer space-x-5">
            <Link href="/#contact" scroll={true}>
              <Button
                variant="outline"
                className="rounded-2xl bg-gradient-to-r from-gradient1 to-gradient2 group transition-all duration-500 bg-[length:200%_100%] bg-left hover:bg-right cursor-pointer"
              >
                Contact us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
