import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import React from "react";
import { Button } from "../ui/button";
import { Session } from "next-auth";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { GetAll } from "@/lib/action";
import { BackpackIcon } from "@radix-ui/react-icons";

type DrawerData = {
    get: Session | null
}

export const DrawerPop = async ({get}: DrawerData) => {

    const data = await GetAll()

  return (
    <Drawer>
      <DrawerTrigger>
        {get?.user.role == "Admin"? <BackpackIcon/> : null}
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
        <div className="text-center">
          {/* {get?.user.name && <DrawerTitle>{get?.user.name}</DrawerTitle>}
          {get?.user.email && <DrawerDescription>{get?.user.email}</DrawerDescription>} */}
          <DrawerTitle>Task</DrawerTitle>
          <DrawerDescription>you can view all data in task</DrawerDescription>
        </div>
        </DrawerHeader>
        <DrawerFooter>
            {data && <DataTable data={data} columns={columns} />}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
