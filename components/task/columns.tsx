"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Edit } from "./edit";
import { Cancel } from "./cancel";
import { useTransition } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { isUpdate } from "@/lib/action";
import { CheckCircledIcon } from "@radix-ui/react-icons";

export const columns: ColumnDef<Message>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <CheckCircledIcon/>
    ),
    cell: ({ row }) => {
      const checked = row.original;
      const [isLoading, startTransition] = useTransition();

      return (
        <Checkbox
          id={checked.id}
          checked={checked.isCompleted}
          disabled={checked.isCompleted || isLoading}
          onCheckedChange={() =>
            startTransition(async () => {
              await isUpdate(checked.id);
            })
          }
        />
      );
    },
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "message",
    header: "Task",
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const patient = row.original;

      return (
        <div className="flex items-center gap-3">
          <Edit data={patient} />
          <Cancel data={patient} />
        </div>
      );
    },
  },
];
