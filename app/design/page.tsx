'use client';

import React from 'react';
import { Tree, TreeNode } from 'react-organizational-chart';
import Image from 'next/image';

const NodeBox = ({ name, imgSrc }: { name: string; imgSrc: string }) => (
  <div className="flex flex-col items-center  rounded-xl shadow-lg p-4 min-w-[120px]">
    <Image
      src={imgSrc}
      alt={name}
      width={100}
      height={60}
      className="object-cover"
    />
   <p className="mt-2 max-w-50 text-2xl font-medium text-center break-words whitespace-normal">
      {name}
    </p>
  </div>
);

const Design = () => {
  return (
    <div className="mt-30 flex-col items-center xl:px-30 px-10 justify-center">
      <section className="py-10 mb-20">
        <div className="xl:px-10 px-0">
          <h1 className="text-5xl md:text-8xl font-bold cursor-default text-center md:text-left">
            Designs That Inspire
          </h1>
          <div className="mt-5 flex flex-col-reverse md:flex-row md:justify-between gap-x-5 gap-y-7 items-center md:items-start">
            <p className="max-w-[90%] xl:max-w-[55%] text-xl text-justify">
              Our designs blend creativity with functionality, bringing your
              vision to life. Whether it’s sleek UI/UX, stunning visuals, or
              compelling branding, we create designs that leave a lasting
              impression.
            </p>
            <p className="text-5xl md:text-8xl font-bold cursor-default bg-gradient-to-r from-gradient1 to-gradient3 bg-clip-text text-transparent text-center md:text-left">
              Brands Rise
            </p>
          </div>
        </div>

        {/* Organizational Chart */}
        <div className="mt-20 justify-center overflow-x-auto md:block hidden">
          <Tree
            lineWidth="2px"
            lineColor="#ccc"
            lineBorderRadius="10px"
            nodePadding='20px'
            lineHeight='50px'
            label={
                <div className="p-4 min-w-[120px] text-center font-semibold text-4xl ">
                  Our Design Expertise
                </div>
              }
          >
            <TreeNode label={<NodeBox name="Logo & Branding" imgSrc="./images/Group 48.svg" />} />
            <TreeNode label={<NodeBox name="Marketing Materials" imgSrc="./images/Group 49.svg" />} />
            <TreeNode label={<NodeBox name="Packaging Design" imgSrc="./images/Group 50.svg" />} />
            <TreeNode label={<NodeBox name="Social Media Graphics" imgSrc="./images/Group 51.svg" />} />
            <TreeNode label={<NodeBox name="UI/UX Design" imgSrc="./images/Group 52.svg" />} />
          </Tree>
        </div>
      </section>
    </div>
  );
};

export default Design;
