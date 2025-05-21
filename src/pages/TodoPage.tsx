import { useContext, useRef } from "react";

import { TodoContext } from "@/store/todos-context";
import FilterBar from "@/components/FilterBar";
import TodoList from "@/components/TodoList";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function TodoPage({ filter }: { filter: string }) {
  const ref = useRef<HTMLInputElement>(null);
  const todoCtx = useContext(TodoContext);
  const items = todoCtx.items.filter((item) => {
    if (filter === "active") {
      return !item.completed;
    } else if (filter === "completed") {
      return item.completed;
    }
    return true;
  });

  return (
    <>
      <FilterBar />
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input
          type="text"
          placeholder="請輸入任務內容"
          className="bg-white"
          ref={ref}
        />
        <Button
          type="button"
          className="bg-blue-500 hover:bg-blue-400 cursor-pointer"
          onClick={() => {
            if (ref.current) {
              todoCtx.addTodo(ref.current.value);
              ref.current.value = "";
            }
          }}
        >
          新增
        </Button>
      </div>
      <TodoList items={items} />
    </>
  );
}
