import { useState } from "react";
import Link from "next/link";

import { NavArrowDown, NavArrowRight } from "iconoir-react";

import { Divider } from "@/components/shared";

const Project: React.FC<{
  name: string;
  description: string;
  images: Array<string>;
  source_link: string;
  technologies: Array<string>;
}> = ({ name, description, images, source_link, technologies }) => {
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
          className="w-5 h-5 lg:w-5.5 lg:h-5.5 text-[#777777]"
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
          <div>
            <div className="flex flex-row items-center overflow-x-scroll scroll-smooth scrollbar-hide">
              {images.map((image) => {
                return (
                  <img
                    className="max-w-[150%] w-auto max-h-[24rem]"
                    src={image}
                  />
                );
              })}
            </div>
            <div className="flex flex-col sm: gap-y-4 lg:flex-row lg:items-center justify-between px-2">
              <Link
                className="text-sm font-light italic text-[#A4A4A4] w-full"
                href={source_link}
              >
                View on <u className="underline-offset-1">Github</u>
              </Link>
              <h1 className="text-sm font-light text-[#A4A4A4] w-full whitespace-nowrap overflow-x-scroll scrollbar-hide">
                Built with: {technologies.join(" · ")}
              </h1>
            </div>
          </div>
        )}
        <Divider
          className={`pt-6 pb-6 ${
            hover ? "divide-[#444444]" : "divide-[#2A2C2D]"
          }`}
          onClick={() => {
            setViewDetails(!viewDetails);
          }}
        />
      </div>
    </div>
  );
};

export { Project };
