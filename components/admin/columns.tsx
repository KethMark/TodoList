"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Cancel } from "./cancel";
import { CommitIcon } from "@radix-ui/react-icons";

export const columns: ColumnDef<Message>[] = [
  {
    accessorKey: 'isCompleted',
    header: 'Completed',
    cell: ({ row }) => {
      const task = row.original;

      return (
        <div>
          {task.isCompleted? <Cancel task={task}/>: <CommitIcon/> }
        </div>
      )
    }
  },
  {
    accessorKey: 'name',
    header: 'Account',
    cell: ({ row }) => {
      const task = row.original;

      return (
        <div>
          {task.user?.name}
        </div>
      )
    }
  },
  {
    accessorKey: 'emailVerified',
    header: 'Email',
    cell: ({ row }) => {
      const task = row.original;

      return (
        <div>
          { task.user?.email}
        </div>
      )
    }
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "message",
    header: "Task",
  },
];
