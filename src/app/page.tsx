"use client";
import Navbar from "@/components/Navbar";
import Wrapper from "@/components/wrapper";
import { db } from "@/firebase/config";
import { ref, set } from "firebase/database";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col max-h-screen">
      <Wrapper
        title="Book your stay from Staybook"
        description="Where Every Stay Tells a Story. Premium Hotels, Travel Packages, Your Chapter of Luxury"
      />
      <div className="flex flex-col md:flex-row justify-center gap-10 items-center w-full">
        <div className="w-full h-[30rem] mt-20 md:mt-0  object-cover">
          <Image
            src={`https://th.bing.com/th/id/OIP.Lqn4j0Hp9yrEyoniec1-_QHaHa?w=691&h=691&rs=1&pid=ImgDetMain`}
            width={1000}
            height={500}
            alt="travel"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  </>
  );
}
