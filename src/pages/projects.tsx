import { NextPage } from "next";

import { Project } from "@/components/project";

import { Gelasio } from "next/font/google";

const gelasio = Gelasio({
  weight: ["400"],
  subsets: ["latin"],
  style: ["italic"],
});

const Projects: NextPage = () => {
  return (
    <div className="w-full">
      <h1 className="font-light tracking-wide">
        Here are a couple projects I&apos;ve worked on in my free time. Some
        finished, others a <i>work in progress ...</i>
      </h1>
      <div className="pt-16">
        <Project
          name="Curate"
          description="A personal service I made for myself to curate design inspiration from twitter."
        />
        <Project
          name="Scheme"
          description="A collaborative API prototyping platform to increase collaborate between teams."
        />
        <Project
          name="NBA Viewer"
          description="A Raycast extension to access live NBA information at your fingertips. ~680 Downloads"
        />
        <Project
          name="AI Docs"
          description="An AI chatbot that can parse documentation and generate answers to questions."
        />
      </div>
      <h1 className={`${gelasio.className} text-[#A4A4A5] pl-14`}>
        More ideas and stuff comin&apos; ...
      </h1>
    </div>
  );
};

export default Projects;
