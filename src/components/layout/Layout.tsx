import { Navbar, Footer } from ".";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={`${inter.variable} bg-[#1C1C1C] min-h-screen text-white`}>
      <meta
        name="theme-color"
        content={
          "#1C1C1C, width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        }
        style={{ backgroundColor: "#1C1C1C" }}
      />
      <div className="px-36">
        <Navbar />
      </div>
      <div className="flex flex-row items-center px-36">{children}</div>
      <div className="sticky top-[100vh] w-full">
        <Footer />
      </div>
    </div>
  );
};

export { Layout };
