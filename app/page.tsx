import React from "react";
import { Forms } from "@/components/task/form";
import { GetTodo } from "../components/task/getTodo";
import { Navbar } from "@/components/task/navbar";
import { auth } from "@/lib/auth";
import { AlertTriangle } from "lucide-react";
import Image from "next/image";
import { TypewriterEffectNav } from "@/components/task/typewriter-effect";

const page = async () => {

  const data = await auth()

  if(!data) {
    return (
      <div className="h-full w-full container">
        <div className="">
          <Navbar/>
        </div>
        <TypewriterEffectNav/>
      </div>
    )
  }

  return (
    <>
      <div className="h-full w-full container lg:px-44">
        <div>
          <Navbar/>
        </div>
        <div className="mt-20 space-y-4">
          <Forms />
          <GetTodo />
        </div>
      </div>
    </>
  );
};

export default page;
