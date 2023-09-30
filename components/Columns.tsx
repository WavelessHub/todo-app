"use client";

import { ColumnDef } from "@tanstack/react-table";
import CellActions from "./CellActions";

export type Task = {
  id: number;
  task: string;
  dueDate: string;
  priority: string;
};

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "task",
    header: "Task",
  },
  {
    accessorKey: "dueDate",
    header: "Due Date",
  },
  {
    accessorKey: "priority",
    header: "Priority",
  },
  {
    header: "Actions",
    cell: ({ row }) => <CellActions taskId={row.original.id} />,
  },
];
