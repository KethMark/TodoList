import React from "react";
import { DataTable } from "@/components/task/data-table";
import { columns } from "./columns";
import { Get } from "@/lib/action";
import { unstable_noStore as noStore } from "next/cache";

export const GetTodo = async () => {
  noStore();
  const data = await Get();

  return (
    <div>
      <DataTable data={data} columns={columns} />
    </div>
  );
};
