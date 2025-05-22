import { NavLink } from "react-router";

import { Button } from "./ui/button";

export default function FilterBar() {
  return (
    <>
      <header className="w-full p-4 bg-blue-600 text-white text-center">
        <h1 className="text-2xl font-bold">Todo List</h1>
      </header>
      <div className="flex gap-4">
        <NavLink to="/todo-list/" end>
          {({ isActive }) => (
            <Button
              variant="outline"
              className={
                (isActive ? "bg-blue-500 text-white" : undefined) +
                " cursor-pointer hover:bg-blue-400 hover:text-white"
              }
            >
              所有
            </Button>
          )}
        </NavLink>
        <NavLink to="/todo-list/active">
          {({ isActive }) => (
            <Button
              variant="outline"
              className={
                (isActive ? "bg-blue-500 text-white" : undefined) +
                " cursor-pointer hover:bg-blue-400 hover:text-white"
              }
            >
              執行中
            </Button>
          )}
        </NavLink>
        <NavLink to="/todo-list/completed">
          {({ isActive }) => (
            <Button
              variant="outline"
              className={
                (isActive ? "bg-blue-500 text-white" : undefined) +
                " cursor-pointer hover:bg-blue-400 hover:text-white"
              }
            >
              已完成
            </Button>
          )}
        </NavLink>
      </div>
    </>
  );
}
