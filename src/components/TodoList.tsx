import type Todo from "@/models/todo";
import TodoItem from "./TodoItem";

export default function TodoList({ items }: { items: Todo[] }) {
  return (
    <ul className="w-full max-w-md p-4 bg-white rounded-lg shadow-md flex flex-col gap-4">
      {items.map((item) => (
        <TodoItem key={item.id} todo={item} />
      ))}
      {items.length === 0 && <li>Nothing!</li>}
    </ul>
  );
}
