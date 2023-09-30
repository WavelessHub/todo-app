"use client";

import { NextPage } from "next";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import TaskModal from "../modals/TaskModal";
import { useTask } from "@/hooks/useTask";

interface Props {
  table: any;
  searchKey: string;
}

const ListBar: NextPage<Props> = ({ table, searchKey }) => {
  const { onOpen } = useTask();

  return (
    <div className="flex items-center justify-between pb-4">
      <Input
        placeholder="Search..."
        value={(table.getColumn(searchKey)?.getFilterValue() as string) ?? ""}
        onChange={(event: any) =>
          table.getColumn(searchKey)?.setFilterValue(event.target.value)
        }
        className="max-w-xs px-4 h-12"
      />

      <Button className="h-12 px-6" variant="outline" onClick={onOpen}>
        Add Task
      </Button>

      <TaskModal />
    </div>
  );
};

export default ListBar;
