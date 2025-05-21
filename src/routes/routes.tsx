import { createBrowserRouter } from "react-router";

import RootLayout from "../pages/RootLayout";
import TodoPage from "../pages/TodoPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <TodoPage filter="all" />,
      },
      {
        path: "active",
        element: <TodoPage filter="active" />,
      },
      {
        path: "completed",
        element: <TodoPage filter="completed" />,
      },
    ],
  },
]);

export default router;
