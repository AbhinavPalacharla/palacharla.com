import { NextPage } from "next";
import { Divider } from "@/components/shared";
import Link from "next/link";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Index: NextPage = () => {
  const { isLoading, isError, data } = useQuery(["projects"], async () => {
    return axios.get("/api/getProjects");
  });

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-y-6 lg:gap-y-8 font-light tracking-wide text-sm lg:text-base">
        <h1 className="leading-relaxed">
          Hey, I&apos;m <i>Abhinav</i>. I&apos;m a student developer and
          designer based in San Diego, CA.
        </h1>

        <h1 className="sm: visible lg:invisible lg:hidden sm:leading-relaxed lg:leading-normal">
          Previously: developed AI integrated solutions at <u>Okulis</u>, Web3
          interfaces at <u>Mintra</u> and <u>Unsung</u>, and blockchain based
          protocols at <u>SDSC</u>.
        </h1>
        <h1 className="sm: hidden lg:visible lg:inline-block">
          Previously: developed AI integrated solutions at <u>Okulis</u>, Web3
          interfaces at <u>Mintra</u> and <u>Unsung</u>, and <br /> blockchain
          based protocols at <u>SDSC</u>.
        </h1>

        <h1 className="sm: visible lg:invisible lg:hidden leading-relaxed">
          Currently developing web apps with{" "}
          <i>Next.js + Typescript + TailwindCSS</i>, exploring design with{" "}
          <i>Figma</i>, and dabbling with AI integration through <i>OpenAI</i>.
        </h1>

        <h1 className="sm: hidden lg:visible lg:inline-block">
          Currently developing web apps with{" "}
          <i>Next.js + Typescript + TailwindCSS</i>, exploring design with
          <br /> <i>Figma</i>, and dabbling with AI integration through{" "}
          <i>OpenAI</i>.
        </h1>

        <h1 className="sm:leading-relaxed lg:leading-normal">
          Feel free to reach out to me on any of my socials.
        </h1>
      </div>
      <Divider className="pt-8 lg:pt-16 pb-4 lg:pb-8" />
      <div className="flex flex-row items-center gap-x-4 lg:gap-x-12 italic font-light text-sm lg:text-base">
        <Link className="hover:underline" href="">
          LinkedIn
        </Link>
        <Link className="hover:underline" href="">
          Email
        </Link>
        <Link className="hover:underline" href="">
          Github
        </Link>
        <Link className="hover:underline" href="">
          Read.CV
        </Link>
        <Link className="hover:underline" href="">
          Twitter
        </Link>
      </div>
    </div>
  );
};

export default Index;
