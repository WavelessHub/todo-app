"use client";

import { useEffect, useState } from "react";

import TaskModal from "@/components/modals/TaskModal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <TaskModal />
    </>
  );
};
