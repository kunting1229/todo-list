import { createBrowserRouter } from "react-router";

import RootLayout from "../pages/RootLayout";
import TodoPage from "../pages/TodoPage";

const router = createBrowserRouter([
  {
    path: "/todo-list/",
    element: <RootLayout />,
    children: [
      {
        path: "/todo-list/",
        element: <TodoPage filter="all" />,
      },
      {
        path: "/todo-list/active",
        element: <TodoPage filter="active" />,
      },
      {
        path: "/todo-list/completed",
        element: <TodoPage filter="completed" />,
      },
    ],
  },
]);

export default router;
