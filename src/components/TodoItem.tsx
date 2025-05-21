import type Todo from "@/models/todo";
import { Checkbox } from "./ui/checkbox";
import { useContext } from "react";
import { TodoContext } from "@/store/todos-context";
import { Button } from "./ui/button";

export default function TodoItem({ todo }: { todo: Todo }) {
  const todoCtx = useContext(TodoContext);

  return (
    <li className="">
      <div className="flex items-center justify-between p-2 bg-gray-50 hover:bg-gray-100 rounded-lg shadow-md">
        <p className="flex items-center gap-2">
          <Checkbox
            id={todo.id}
            className="bg-white cursor-pointer"
            checked={todo.completed}
            onCheckedChange={() => todoCtx.toggleTodo(todo.id)}
          />
          <label htmlFor={todo.id} className="text-gray-800 cursor-pointer">
            {todo.text}
          </label>
        </p>
        <Button
          variant="ghost"
          className="cursor-pointer"
          onClick={() => todoCtx.removeTodo(todo.id)}
        >
          X
        </Button>
      </div>
    </li>
  );
}
