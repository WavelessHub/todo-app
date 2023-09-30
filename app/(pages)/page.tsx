"use client";

import { Calendar } from "@/components/ui/calendar";
import { DataTable } from "@/components/DataTable";
import { columns } from "@/components/Columns";

import { useTask } from "@/hooks/useTask";

import { useEffect, useState } from "react";

export default function DemoPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const { data } = useTask();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="p-8 flex items-start justify-between gap-x-6">
      <div className="flex-1">
        <DataTable searchKey="task" columns={columns} data={data} />
      </div>

      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    </div>
  );
}
