"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { motion } from "motion/react"; // ✅ fix import here

interface HeaderProps {
  className?: string;
}
const navItems = ["Marketing", "Design", "Products"];

const Header = ({ className }: HeaderProps) => {
  return (
    <header
      className={cn(
        `fixed px-20 top-0 w-full z-50 backdrop-blur items-center`, className
      )}
    >
      <div className="flex h-20 items-center justify-between">
        <Link
          href="/"
          className="flex items-center space-x-2 font-bold text-xl hover:text-primary transition-colors"
        >
          Skygea
        </Link>

        <div className="flex items-center gap-10">
          <nav>
            <ul className="flex gap-10 text-white text-sm font-medium">
              {navItems.map((item) => (
                <motion.li
                  key={item}
                 
                  className="cursor-pointer hover:text-[#A93FFD] transition-colors duration-300"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </nav>

          <div className="border-l pl-4 dark:border-gray-800 cursor-pointer space-x-5">
            <Button variant="outline" className="rounded-2xl">
              Contact us
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
