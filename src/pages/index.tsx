import type { NextPage } from "next";
import { TiLocationArrow } from "react-icons/ti";
import { BsKeyboardFill } from "react-icons/bs";
import { TbArrowUpRight } from "react-icons/tb";
import { GoMailRead } from "react-icons/go";
import { AiFillGithub } from "react-icons/ai";

const Home: NextPage = () => {
  return (
    <div className="flex flex-row justify-center items-center h-screen bg-[#F7F7F7]">
      <div className="bg-white shadow-md rounded-[1.5rem] p-12 mb-16 relative mx-8">
        <div className="absolute top-6 right-6 flex flex-row items-center gap-x-1.5 bg-green-400/20 px-2.5 py-1 rounded-full">
          <span className="bg-green-400 h-1.5 w-1.5 rounded-full" />
          <p className="text-xs text-green-400 tracking-wide font-medium">
            Hire Me!
          </p>
        </div>
        <div className="bg-gradient-to-br from-orange-200 to-yellow-200 h-14 w-14 rounded-full shadow-sm align-baseline" />
        <p className="font-medium text-2xl tracking-wide mt-4">
          Abhinav Palacharla
        </p>
        <p className="mt-2">Crafting digital experiences with code</p>
        <div className="flex flex-row mt-4">
          <div className="flex flex-row items-center gap-x-1">
            <TiLocationArrow className="h-5 w-5 mb-[2px]" />
            <p>San Diego, CA</p>
          </div>
        </div>
        <div className="flex flex-row gap-x-2 mt-4 pl-0.5">
          <BsKeyboardFill className="h-5 w-5 mb-[2px]" />
          <p>Projects</p>
        </div>
        <div className="flex flex-col gap-y-3 mt-1">
          <button
            className="flex flex-row items-center w-full bg-black/5 py-1.5 px-3 rounded-lg gap-x-1"
            onClick={() => {
              window.open(
                "https://github.com/AbhinavPalacharla/nba-game-viewer",
                "_blank"
              );
            }}
          >
            <p>🏀 NBA Viewer</p>
            <TbArrowUpRight className="h-4 w-4 mb-0.5 text-gray-700" />
          </button>
          <button
            className="flex flex-row items-center w-full bg-black/5 py-1.5 px-3 rounded-lg gap-x-1"
            onClick={() => {
              window.open(
                "https://github.com/AbhinavPalacharla/plainweather",
                "_blank"
              );
            }}
          >
            <p>🌧 Plain Weather</p>
            <TbArrowUpRight className="h-4 w-4 mb-0.5 text-gray-700" />
          </button>
          <div
            className="flex flex-row items-center w-full bg-black/5 py-1.5 px-3 rounded-lg gap-x-1"
            onClick={() => {
              window.open(
                "https://github.com/AbhinavPalacharla/shortly",
                "_blank"
              );
            }}
          >
            <p>🔗 Shortly</p>
            <TbArrowUpRight className="h-4 w-4 mb-0.5 text-gray-700" />
          </div>
        </div>
        <div className="flex flex-row justify-center gap-x-6 mt-10">
          <button
            className="px-3 py-1.5 w-full bg-black/5 rounded-lg flex flex-row items-center justify-center gap-x-2"
            onClick={() => {
              window.open("https://www.github.com/AbhinavPalacharla", "_blank");
            }}
          >
            <AiFillGithub className="h-5 w-5" />
            <p className="text-lg">Github</p>
          </button>
          <button
            className="px-3 py-1.5 w-full bg-black/5 rounded-lg flex flex-row items-center justify-center gap-x-2"
            onClick={() => {
              window.open("https://www.github.com/AbhinavPalacharla", "_blank");
            }}
          >
            <GoMailRead className="h-5 w-5" />
            <p className="text-lg">Email</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
