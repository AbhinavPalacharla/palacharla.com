import { useState } from "react";
import Link from "next/link";

import { NavArrowDown, NavArrowRight } from "iconoir-react";
import { Divider } from "@/components/shared";

const Project: React.FC<{ name: string; description: string }> = ({
  name,
  description,
}) => {
  const [viewDetails, setViewDetails] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <div
      className="flex flex-row gap-x-4 lg:gap-x-8 w-full lg:w-[85%]"
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      {viewDetails ? (
        <NavArrowDown
          className="w-5 h-5 lg:w-5.5 lg:h-5.5 text-[#777777] bg-red-200"
          onClick={() => {
            setViewDetails(!viewDetails);
          }}
        />
      ) : (
        <NavArrowRight
          className="w-5 h-5 lg:w-5.5 lg:h-5.5 text-[#777777]"
          onClick={() => {
            setViewDetails(!viewDetails);
          }}
        />
      )}
      <div className="flex flex-col w-full">
        <div
          className="flex flex-row justify-between"
          onClick={() => {
            setViewDetails(!viewDetails);
          }}
        >
          <h1 className="text-sm lg:text-base pr-6">{name}</h1>
          <h1 className="text-[#A4A4A4] font-light text-sm lg:text-base">
            {description}
          </h1>
        </div>
        {viewDetails && (
          <div className="pt-6">
            <div className="flex flex-row items-center overflow-x-scroll scroll-smooth scrollbar-hide">
              <img
                className="max-w-[150%] w-auto max-h-[24rem]"
                src="https://d2wx6rahy8yxgr.cloudfront.net/filters:format(webp)/389d4223-c6b2-459a-bfee-5343c67fe426-Screen-Shot-2023-02-21-at-3-06-27-PM.png"
              />
              <img
                className="max-w-[150%] w-auto max-h-[24rem]"
                src="https://d2wx6rahy8yxgr.cloudfront.net/filters:format(webp)/06940cc1-ef7f-4967-bcb6-62c1e7fb4068-Screen-Shot-2023-02-21-at-3-07-37-PM.png"
              />
              <img
                className="max-w-[150%] w-auto max-h-[24rem]"
                src="https://d2wx6rahy8yxgr.cloudfront.net/filters:format(webp)/356e4303-06ae-48a1-ba99-511271ce3483-Screen-Shot-2023-02-21-at-3-09-31-PM.png"
              />
              <img
                className="max-w-[150%] w-auto max-h-[24rem]"
                src="https://d2wx6rahy8yxgr.cloudfront.net/filters:format(webp)/69c3d5da-cf6c-4540-b9d9-e7afebfa93a1-Screen-Shot-2023-02-21-at-3-10-05-PM.png"
              />
            </div>
            <div className="flex flex-col sm: gap-y-4 lg:flex-row lg:items-center justify-between px-2">
              <Link
                className="text-sm font-light italic text-[#A4A4A4]"
                href="https://github.com/AbhinavPalacharla/curate-personal"
              >
                View on <u className="underline-offset-1">Github</u>
              </Link>
              <h1 className="text-sm font-light text-[#A4A4A4] w-full whitespace-nowrap overflow-x-scroll scrollbar-hide">
                Built with Next.js · React · TailwindCSS · Typescript · Node.js
                · Prisma ORM · PostgreSQL
              </h1>
            </div>
          </div>
        )}
        <Divider
          className={`pt-6 pb-6 ${
            hover ? "divide-[#444444]" : "divide-[#2A2C2D]"
          }`}
        />
      </div>
    </div>
  );
};

export { Project };
