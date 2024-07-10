import { useEffect, useState } from "react";
import { TodoType } from "../Models/Todo";
import { getTasks } from "../services/getTasks.service";

export const useTasks = () => {
  const [tasks, setTasks] = useState<TodoType[]>();
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    getTasks().then((data: TodoType[]) => {
      setTasks(data);
      setIsFetching(false);
    });
  }, []);

  return {
    tasks,
    isFetching,
  };
};
