import React, { Suspense } from "react";
import { Forms } from "@/app/(form)/form";
import { GetTodo } from "./(form)/getTodo";

const page = async () => {
  return (
    <>
      <div className="h-full w-full container lg:px-44">
        <div className="mt-20 space-y-4">
          <h1 className="text-center font-bold text-4xl font-serif">
            Create a Message
          </h1>
          <Forms />
          <GetTodo />
        </div>
      </div>
    </>
  );
};

export default page;
