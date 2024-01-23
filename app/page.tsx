import React, { Suspense } from "react";
import { Forms } from "@/app/(form)/form";
import { GetTodo } from "./(form)/getTodo";

const page = async () => {
  return (
    <>
      <div className="h-full w-full container lg:px-44">
        <div className="mt-20 space-y-4">
          <h1 className="text-center font-bold text-4xl font-serif">
            Simple Todo Application
          </h1>
          <p className="text-muted-foreground text-center">created by server action and with type-safe validation</p>
          <Forms />
          <GetTodo />
        </div>
      </div>
    </>
  );
};

export default page;
