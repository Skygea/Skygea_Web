"use client";

import { ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

const marketing = () => {
  return (
    <div className="mt-30 flex-col items-center xl:px-30 px-10 justify-center">
      <section className=" py-10 mb-20">
        <div className="xl:px-30 px-0 ">
          <h1 className="text-5xl md:text-8xl font-bold cursor-default text-center md:text-left ">
            Smart Strategies
          </h1>
          <div className="mt-5 flex flex-col-reverse md:flex-row md:justify-between gap-x-5 gap-y-7 items-center md:items-start">
            <p className="max-w-[90%] xl:max-w-[55%] text-xl text-justify">
              We craft data-driven strategies that captivate, engage, and
              convert. From digital campaigns to social media magic, we help
              your brand rise above the noise and connect with the right
              audience.
            </p>
            <p className="text-5xl md:text-8xl font-bold cursor-default bg-gradient-to-r from-gradient1 to-gradient3 bg-clip-text text-transparent text-center md:text-left">
              Big Impact
            </p>
          </div>
        </div>

        <div className="flex flex-wrap mt-30 px-40 gap-y-20 gap-x-5 justify-center items-center sm:justify-between">
          <motion.div className="flex flex-col items-center gap-8 font-semibold">
            <motion.div whileHover={{ opacity: 0.6 }}>
              <Image
                src={"./images/SEO.svg"}
                alt="SEO image"
                width={110}
                height={100}
              />{" "}
            </motion.div>
            <p className="text-2xl font-bold text-center">
              SEO & Content
              <br />
              Marketing
            </p>
          </motion.div>
          <motion.div className="flex flex-col items-center gap-8 font-semibold">
            <motion.div whileHover={{ opacity: 0.6 }}>
              <Image
                src={"./images/Social_Media.svg"}
                alt="SEO image"
                width={90}
                height={50}
              />{" "}
            </motion.div>
            <p className="text-2xl font-bold text-center">
              Social Media
              <br />
              Management
            </p>
          </motion.div>
          <motion.div className="flex flex-col items-center gap-8 font-semibold">
            <motion.div whileHover={{ opacity: 0.6 }}>
              <Image
                src={"./images/Digital_Ad.svg"}
                alt="SEO image"
                width={90}
                height={50}
              />{" "}
            </motion.div>
            <p className="text-2xl font-bold text-center">
              Digital
              <br />
              Advertising
            </p>
          </motion.div>
          <motion.div className="flex flex-col items-center gap-8 font-semibold">
            <motion.div whileHover={{ opacity: 0.6 }}>
              <Image
                src={"./images/Identity.svg"}
                alt="SEO image"
                width={90}
                height={50}
              />{" "}
            </motion.div>
            <p className="text-2xl font-bold text-center">
              Brand Strategy
              <br />& Identity
            </p>
          </motion.div>
        </div>
      </section>
      <section className="min-h-screen py-20">
        <div className="xl:px-30 px-0">
          <h1 className="text-5xl md:text-8xl font-bold cursor-default text-center md:text-left ">
            Our{" "}
            <span className="text-5xl md:text-8xl font-bold cursor-default bg-gradient-to-r from-gradient1 to-gradient3 bg-clip-text text-transparent text-center md:text-left">
              Winning Formula
            </span>
          </h1>

          <div className="relative mt-25  grid grid-cols-1 md:grid-cols-2 gap-15 2xl:px-40 px-20 ">
            <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl md:text-8xl font-bold cursor-default bg-gradient-to-r from-gradient1 to-gradient3 bg-clip-text text-transparent md:block hidden">
              +
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="py-15 px-2 flex justify-center  text-center border border-gradient1/60 hover:border-gradient1  rounded-4xl bg-gradient-to-r from-gradientcard1 to-gradientcard2 "
            >
              <p className="text-4xl text-center">
                Research &<br />
                Strategy
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="py-15 px-2 flex justify-center  text-center border border-gradient1/60 hover:border-gradient1  rounded-4xl bg-gradient-to-r from-gradientcard1 to-gradientcard2 "
            >
              <p className="text-4xl text-center">
                Creative
                <br />
                Development
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="py-15 px-2 flex justify-center  text-center border border-gradient1/60 hover:border-gradient1  rounded-4xl bg-gradient-to-r from-gradientcard1 to-gradientcard2 "
            >
              <p className="text-4xl text-center">
                Execution &<br />
                Launch
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="py-15 px-2 flex justify-center  text-center border border-gradient1/60 hover:border-gradient1  rounded-4xl bg-gradient-to-r from-gradientcard1 to-gradientcard2 "
            >
              <p className="text-4xl text-center">
                Performance
                <br />
                Tracking
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default marketing;
