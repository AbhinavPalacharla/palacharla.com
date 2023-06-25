import Link from "next/link";
import { useRouter } from "next/router";

const Route: React.FC<{ name?: string; alias: string }> = ({ name, alias }) => {
  const router = useRouter();

  return (
    <Link
      href={name || ""}
      className={
        router.pathname === name
          ? "underline underline-offset-2"
          : "text-[#A4A4A5]"
      }
      // prefetch={true}
    >
      {alias}
    </Link>
  );
};

const Navbar: React.FC = () => {
  return (
    <div className="flex flex-row items-center justify-between pt-16 pb-16">
      {/* <h1 className="font-serif text-3xl">Abhinav Palacharla</h1> */}
      <h1 className="font-serif text-3xl">AP</h1>
      <div className="flex flex-row items-center gap-x-4 lg:gap-x-8 text-sm">
        <Route name="/" alias="About" />
        <Route name="/projects" alias="Projects" />
        <Route alias="Photography" />
      </div>
    </div>
  );
};

export { Navbar };
