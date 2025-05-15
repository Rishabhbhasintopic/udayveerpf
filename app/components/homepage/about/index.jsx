// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";


function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
<div className="order-2 lg:order-1 bg-[#0d0d0d] border border-[#333] rounded-lg p-5 shadow-lg">
  {/* Terminal top bar */}
  <div className="flex items-center space-x-2 mb-4">
    <span className="w-3 h-3 rounded-full bg-red-500"></span>
    <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
    <span className="w-3 h-3 rounded-full bg-green-500"></span>
  </div>

  {/* Terminal content */}
  <p className="font-mono mb-4 text-[#16f2b3] text-lg">
    <span className="text-white">rishabh@elvora:~$</span> whoami
  </p>
  <p className="text-gray-300 font-mono text-sm lg:text-base leading-relaxed">
    {personalData.description}
  </p>
</div>

        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={personalData.profile}
            width={300}
            height={300}
            alt="Rishabh Bhasin"
            className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer rounded-xl object-cover w-full h-auto max-w-[300px]"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;