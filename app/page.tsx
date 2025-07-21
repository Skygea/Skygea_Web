"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { CalendarCheck2, ClockFading, ShieldCheck } from "lucide-react";
export default function Home() {
  return (
    <div className="font-sans items-center justify-items-center  bg-[linear-gradient(to_right,rgb(8,0,43),rgb(0,0,0))] ">
      <section className="relative w-full flex flex-col items-center justify-center min-h-screen px-6 ">
        <div
          className="absolute inset-0 bg-[url('/images/bg1.png')] bg-cover bg-center opacity-6"
          aria-hidden="true"
        />

        <Image
          src="/images/Ellipse.png"
          alt="ellipse"
          width={420}
          height={300}
          className="absolute right-0 "
        />
        <div className="relative z-10 ">
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="text-center  text-5xl md:text-8xl font-bold cursor-default"
          >
            Your Vision + Our Expertise <br />
            <span className="text-[#A93FFD] text-7.5xl">Premier Solution</span>
          </motion.h1>
          <p className="text-center px-9 md:px-0 text-2xl mt-7">
            Skygea takes your business from concept to completion, delivering
            <br />
            comprehensive solutions that drive growth and efficiency.
          </p>
          <div className="flex justify-evenly mt-20 px-30">
            <motion.div className="flex flex-col items-center gap-8 font-semibold">
              <motion.div whileHover={{ opacity: 0.6 }}>
                <ShieldCheck size={80} />{" "}
              </motion.div>
              <p className="text-2xl text-[#A93FFD]">Trusted Security</p>{" "}
            </motion.div>
            <motion.div className="flex flex-col items-center gap-8 font-semibold">
              <motion.div whileHover={{ opacity: 0.6 }}>
                <ClockFading size={80} />
              </motion.div>
              <p className="text-2xl text-[#A93FFD]">24/7 Assistance</p>{" "}
            </motion.div>
            <motion.div className="flex flex-col items-center gap-8 font-semibold">
              <motion.div whileHover={{ opacity: 0.6 }}>
                <CalendarCheck2 size={80} />{" "}
              </motion.div>
              <p className="text-2xl text-[#A93FFD]">Always on Time</p>{" "}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
