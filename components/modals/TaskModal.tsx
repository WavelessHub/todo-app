"use client";

import { NextPage } from "next";
import { Modal } from "../ui/modal";

import { TaskForm } from "../forms/TaskForm";
import { useTask } from "@/hooks/useTask";

interface Props {}

const TaskModal: NextPage<Props> = ({}) => {
  const { isOpen, onClose } = useTask();

  return (
    <Modal
      title="Task"
      isOpen={isOpen}
      onClose={onClose}
      description="Description"
    >
      <TaskForm />
    </Modal>
  );
};

export default TaskModal;
