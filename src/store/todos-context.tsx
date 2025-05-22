import { createContext, useEffect, useState } from "react";
import type Todo from "../models/todo";

type TodoContextType = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
  editTodo: (id: string, updatedTodo: Todo) => void;
};

export const TodoContext = createContext<TodoContextType>({
  items: [],
  addTodo: () => {},
  removeTodo: () => {},
  toggleTodo: () => {},
  editTodo: () => {},
});

function TodoContextProvider({ children }: { children: React.ReactNode }) {
  const storageKey = "my-react-todos";
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem(storageKey);
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const addTodoHandler = (todoText: string) => {
    if (todoText.trim().length) {
      setTodos((prevTodos) => {
        const now = new Date();
        const newTodo: Todo = {
          id: now.toISOString() + Math.random().toString(),
          text: todoText,
          completed: false,
          createdAt: now.toISOString(),
          updatedAt: now.toISOString(),
          priority: "medium",
          tags: [],
          notes: "",
        };
        localStorage.setItem(
          storageKey,
          JSON.stringify([...prevTodos, newTodo])
        );
        return [...prevTodos, newTodo];
      });
    }
  };

  const removeTodoHandler = (id: string) => {
    setTodos((prevTodos) => {
      const result = prevTodos.filter((todo) => todo.id !== id);
      localStorage.setItem(storageKey, JSON.stringify(result));
      return result;
    });
  };

  const toggleTodoHandler = (id: string) => {
    setTodos((prevTodos) => {
      const result = prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      localStorage.setItem(storageKey, JSON.stringify(result));
      return result;
    });
  };

  const editTodoHandler = (id: string, updatedTodo: Todo) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) =>
        todo.id === id ? { ...todo, ...updatedTodo } : todo
      );
    });
  };

  const contextValue: TodoContextType = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
    toggleTodo: toggleTodoHandler,
    editTodo: editTodoHandler,
  };

  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
}

export default TodoContextProvider;
