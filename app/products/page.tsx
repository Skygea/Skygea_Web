"use client";
import React from "react";

const products = () => {
  return (
    <div className="mt-30 flex-col items-center xl:px-30 px-10 justify-center">
      <section className="py-10 mb-20">
        <div className="xl:px-10 px-0">
          <h1 className="text-5xl md:text-8xl font-bold cursor-default text-center md:text-left">
            Best Software Solutions
          </h1>
          <div className="mt-5 flex flex-col-reverse md:flex-row md:justify-between gap-x-5 gap-y-7 items-center md:items-start">
            <p className="max-w-[90%] xl:max-w-[55%] text-xl text-justify">
              We create powerful, scalable software and intuitive apps that
              solve real-world problems while staying user-friendly and aligned
              with your business goals
            </p>
            <p className="text-5xl md:text-8xl font-bold cursor-default bg-gradient-to-r from-gradient1 to-gradient3 bg-clip-text text-transparent text-center md:text-left">
              Built for You
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default products;
