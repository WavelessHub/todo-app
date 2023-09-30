import { zodResolver } from "@hookform/resolvers/zod";
import { useForm as getForm } from "react-hook-form";
import { z } from "zod";

import { useTask } from "@/hooks/useTask";

import toast from "react-hot-toast";

const schema = z.object({
  dueDate: z.date({ required_error: "A due date is required." }),
  priority: z.string({ required_error: "Please select a priority." }),
  task: z.string({ required_error: "Task Name is required." }).min(2).max(50),
});

type SchemaType = z.infer<typeof schema>;

export const useForm = () => {
  const { data, addTask } = useTask();

  const form = getForm<SchemaType>({
    resolver: zodResolver(schema),
    defaultValues: {
      task: "",
      dueDate: undefined,
    },
  });

  function onSubmit(task: SchemaType) {
    try {
      addTask({
        id: data.length + 1,
        ...task,
        dueDate: task.dueDate.toString().slice(0, 16),
      });

      toast.success("Successfully added the task!");
    } catch (error) {
      toast.error("Something went wrong!");
    }
  }

  return { form, onSubmit, ...form };
};
