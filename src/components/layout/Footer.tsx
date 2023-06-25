import { useEffect, useState } from "react";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({
  weight: ["300"],
  subsets: ["latin"],
  style: ["italic"],
});

const Footer: React.FC = () => {
  const [time, setTime] = useState({ hour: "0", minute: "0", second: "0" });
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    const interval1 = setInterval(() => {
      const time = new Date(
        new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles" })
      );

      const hour =
        time.getHours().toLocaleString().length == 1
          ? "0" + time.getHours().toLocaleString()
          : time.getHours().toLocaleString();
      // time.getHours().toString();
      const minute =
        time.getMinutes().toLocaleString().length == 1
          ? "0" + time.getMinutes().toLocaleString()
          : time.getMinutes().toLocaleString();
      const second =
        time.getSeconds().toLocaleString().length == 1
          ? "0" + time.getSeconds().toLocaleString()
          : time.getSeconds().toLocaleString();
      setTime({ hour, minute, second });
    }, 0);

    const interval2 = setInterval(() => {
      setBlink(!blink);
    }, 500);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, [blink, setBlink]);

  return (
    <div className="flex items-center justify-between text-xs lg:text-sm px-8 pb-6 pt-12 lg:pb-6 lg:pt-16 lg:px-36 bg-[#1C1C1C]">
      <h1 className="font-light">2023 © Abhinav Palacharla</h1>

      <div className="flex flex-row items-center gap-x-2">
        <div className={`flex flex-row items-center ${robotoMono.className}`}>
          <h1>{time.hour}</h1>
          <h1 className={` ${blink ? "text-[#A4A4A5]" : ""}`}>:</h1>
          <h1>{time.minute}</h1>
          <h1 className={` ${blink ? "text-[#A4A4A5]" : ""}`}>:</h1>
          <h1>{time.second}</h1>
        </div>

        <h1 className={`${robotoMono.className}`}>— SD, CA</h1>
      </div>
    </div>
  );
};

export { Footer };
