"use client";

import { useTask } from "@/hooks/useTask";
import { Button } from "./ui/button";
import { NextPage } from "next";

import toast from "react-hot-toast";

interface Props {
  taskId: number;
}

const CellActions: NextPage<Props> = ({ taskId }) => {
  const { removeTask } = useTask();

  const deleteTask = () => {
    removeTask(taskId);
    toast.success("Successfully deleted the task!");
  };

  return (
    <Button onClick={deleteTask} variant="destructive">
      DELETE
    </Button>
  );
};

export default CellActions;
