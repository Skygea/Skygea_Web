"use client";

import { ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

const marketing = () => {
  return (
    <div className="mt-30 flex items-center xl:px-30 px-10 justify-center">
      <section>
      <div className="xl:px-30 px-0">
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
            <p className="text-2xl font-bold text-center">SEO & Content<br />Marketing</p>
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
            <p className="text-2xl font-bold text-center">Social Media<br />Management</p>
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
            <p className="text-2xl font-bold text-center">Digital<br />Advertising</p>
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
            <p className="text-2xl font-bold text-center">Brand Strategy<br />& Identity</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default marketing;
