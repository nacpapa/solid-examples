import { TodoType } from "../../Models/Todo";

export const TaskItem = ({ todo }: { todo: TodoType }) => {
  return (
    <span>
      {todo.id}. {todo.title}
    </span>
  );
};
