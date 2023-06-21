const Navbar: React.FC = () => {
  return (
    <div className="flex flex-row items-center justify-between pt-16 pb-16">
      <h1 className="font-serif text-3xl">Abhinav Palacharla</h1>
      {/* <h1 className="font-serif text-3xl">AP</h1> */}
      <div className="flex flex-row items-center gap-x-8">
        <h1 className="underline underline-offset-2">About</h1>
        <h1>Projects</h1>
        <h1>Photography</h1>
      </div>
    </div>
  );
};

export { Navbar };
