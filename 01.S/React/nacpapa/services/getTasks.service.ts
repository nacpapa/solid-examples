import axios from "axios";
import { TodoType } from "../Models/Todo";

export const getTasks = async (): Promise<TodoType[]> => {
  let todos: TodoType[] = [];
  try {
    const response = await axios.get<TodoType[]>(
      `https://jsonplaceholder.typicode.com/todos`
    );
    if (response.data) {
      todos = response.data;
    }
  } catch (e) {
    console.log(e);
  }

  return todos;
};
