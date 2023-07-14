import { NextPage } from "next";

import { Project } from "@/components/project";
import type { Project as ProjectType } from "@/pages/api/getProjects";

import { Gelasio } from "next/font/google";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const gelasio = Gelasio({
  weight: ["400"],
  subsets: ["latin"],
  style: ["italic"],
});

const Projects: NextPage = () => {
  const { isLoading, isError, data } = useQuery(["projects"], async () => {
    return axios.get("/api/getProjects");
  });

  return (
    <div className="w-full">
      <h1 className="font-light tracking-wide text-sm lg:text-base">
        Here are a couple projects I&apos;ve worked on in my free time. Some
        finished, others a <i>work in progress ...</i>
      </h1>
      {isLoading ? (
        <></>
      ) : (
        data && (
          <>
            <div className="pt-8 lg:pt-16">
              {data.data
                .sort((a: ProjectType, b: ProjectType) => {
                  return a.order > b.order;
                })
                .map((project: ProjectType, i: number) => (
                  <Project
                    key={project.name}
                    name={project.name}
                    description={project.description}
                    images={project.image_links}
                    source_link={project.source_link}
                    technologies={project.technologies}
                    noImgPadding={i === 0}
                  />
                ))}
            </div>
            <h1 className={`${gelasio.className} text-[#A4A4A5] pl-8 lg:pl-14`}>
              More ideas and stuff comin&apos; ...
            </h1>
          </>
        )
      )}
    </div>
  );
};

export default Projects;
