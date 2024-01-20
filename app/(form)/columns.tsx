"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Edit } from "./Edit";
import { Cancel } from "./Cancel";

export const columns: ColumnDef<Message>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "message",
    header: "Message",
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
