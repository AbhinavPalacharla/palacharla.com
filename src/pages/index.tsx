import { NextPage } from "next";
import { Divider } from "@/components/shared";
import Link from "next/link";

const Index: NextPage = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-y-8 font-light">
        <h1>
          Hey, I'm Abhinav. I'm a student developer and designer based in San
          Diego, CA.
        </h1>
        <h1>
          Previously: developed AI integrated solutions at <u>Okulis</u>, Web3
          interfaces at <u>Mintra</u> and <u>Unsung</u>, and
          <br />
          blockchain based protocols at <u>SDSC</u>.
        </h1>
        <h1 className="leading-relaxed">
          Currently developing web apps with{" "}
          <i>Next.js + Typescript + TailwindCSS</i>, exploring design with
          <br /> <i>Figma</i>, and dabbling with AI integration through{" "}
          <i>OpenAI</i>.
        </h1>
        <h1>Feel free to reach out to me on any of my socials.</h1>
      </div>
      <Divider className="pt-16 pb-8" />
      <div className="flex flex-row gap-x-12 italic font-light">
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
