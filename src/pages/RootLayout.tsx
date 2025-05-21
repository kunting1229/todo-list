import { Outlet } from "react-router";

import TodoContextProvider from "../store/todos-context";

export default function RootLayout() {
  return (
    <TodoContextProvider>
      <div className="flex flex-col items-center mt-10">
        <main className="flex flex-col items-center gap-4 p-4 bg-gray-100 rounded-lg shadow-md">
          <Outlet />
        </main>
      </div>
    </TodoContextProvider>
  );
}
