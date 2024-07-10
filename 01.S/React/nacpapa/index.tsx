import { TodoType } from "./Models/Todo";
import { TaskItem } from "./components/TaskItem/TaskItem";
import { useTasks } from "./hooks/useTasks";

const TodoList = () => {
  const { tasks, isFetching } = useTasks();

  if (isFetching) {
    return <p>...Loading</p>;
  }

  return (
    <ul>
      {tasks?.map((task: TodoType) => {
        return (
          <li>
            <TaskItem todo={task} />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
