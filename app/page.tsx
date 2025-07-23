"use client";
import Image from "next/image";
import { motion } from "motion/react";
import {
  CalendarCheck2,
  ClockFading,
  Handshake,
  Rocket,
  ShieldCheck,
  Star,
  Target,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const chooseUs = [
    {
      icon: <Target size={80} />,
      title: "Client-Centric Approach",
      description:
        "Your success is our priority. We take the time to understand your goals and provide personalized services that help you achieve them. Whether you need a new website, branding design, or SEO campaign, we are dedicated to exceeding your expectations.",
    },
    {
      icon: <Rocket size={80} />,
      title: "Innovative Solutions",
      description:
        "We provide cutting-edge software and graphic design services tailored to meet your business needs. Our team stays ahead of the curve with the latest trends and technologies, ensuring that you get solutions that are not only functional but also future-proof.",
    },
    {
      icon: <Star size={80} />,
      title: "Experienced & Creative Team",
      description:
        "Our team is made up of highly skilled developers, designers, and SEO experts with a passion for innovation. We pride ourselves on delivering exceptional results, and our years of industry experience give us an edge in providing value to our clients.",
    },
    {
      icon: <Handshake size={80} />,
      title: "End-to-End Support",
      description:
        "From consultation to delivery, we offer full support throughout the project lifecycle. Our dedicated project managers ensure that every aspect of the project is handled with care and precision, so you can focus on what matters most – growing your business.",
    },
  ];

  return (
    <div className="relative font-sans items-center justify-items-center  bg-[linear-gradient(to_right,rgb(8,0,43),rgb(0,0,0))] ">
        <Image
          src="/images/Ellipse.png"
          alt="ellipse"
          width={529}
          height={340}
          className="absolute right-0 top-35 z-0"
        />
      <section className="relative w-full flex flex-col items-center justify-center min-h-screen px-6 z-10">
        <div
          className="absolute inset-0 bg-[url('/images/bg1.png')] bg-cover bg-center opacity-6"
          aria-hidden="true"
        />

        <div className="relative z-10 ">
          <motion.h1
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.9, ease: "easeInOut" },
            }}
            className="text-center  text-5xl md:text-8xl font-bold cursor-default"
          >
            Your Vision + Our Expertise <br />
            <span className="text-maintheme text-7.5xl">Premier Solution</span>
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
              <p className="text-2xl font-bold bg-gradient-to-r from-gradient1 to-gradient2 bg-[length:130%] bg-left bg-clip-text text-transparent transition-all duration-500 ease-in-out hover:bg-right">
                Trusted Security
              </p>
            </motion.div>
            <motion.div className="flex flex-col items-center gap-8 font-semibold">
              <motion.div whileHover={{ opacity: 0.6 }}>
                <ClockFading size={80} />
              </motion.div>
              <p className="text-2xl font-bold bg-gradient-to-r from-gradient1 to-gradient2 bg-[length:130%] bg-left bg-clip-text text-transparent transition-all duration-500 ease-in-out hover:bg-right">
                24/7 Assistance
              </p>{" "}
            </motion.div>
            <motion.div className="flex flex-col items-center gap-8 font-semibold">
              <motion.div whileHover={{ opacity: 0.6 }}>
                <CalendarCheck2 size={80} />{" "}
              </motion.div>
              <p className="text-2xl font-bold bg-gradient-to-r from-gradient1 to-gradient2 bg-[length:130%] bg-left bg-clip-text text-transparent transition-all duration-500 ease-in-out hover:bg-right">
                Always on Time
              </p>{" "}
            </motion.div>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col items-center justify-center  px-30 ">
        <h1 className="text-8xl font-semibold">
          Why Choose{" "}
          <span className="bg-gradient-to-r from-gradient1 to-gradient3 bg-clip-text text-transparent">
            Us
          </span>
        </h1>
        <div className="flex flex-col justify-around mt-30" >
          <div className="flex justify-between flex-wrap gap-10">
            {chooseUs.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="w-full  sm:w-[45%] lg:w-[23%] rounded-[35px] border border-white/10 shadow-[0px_20px_40px_rgba(0,0,0,0.05)] backdrop-blur-[15px]  flex flex-col items-center text-center"
                style={{
                  background:
                    "radial-gradient(372.84% 141.42% at 0% 0%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.03) 100%)",
                }}
              >
                <div className="text-primary mb-4 mt-10">{item.icon}</div>
                <h2 className="text-4xl bg-gradient-to-r from-gradient1 to-gradient3 bg-clip-text text-transparent font-bold mb-2">{item.title}</h2>
                <p className="mt-5 text-lg bg-[rgba(249,247,247,0.04)] rounded-[35px]  p-6 text-gray-300 text-justify">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col items-center justify-center px-30 mt-30">
      <h1 className="text-8xl font-semibold">
          Contact{" "}
          <span className="bg-gradient-to-r from-gradient1 to-gradient3 bg-clip-text text-transparent">
            Us
          </span>
        </h1>
        <ContactForm/>
      </section>
    </div>
  );
}
