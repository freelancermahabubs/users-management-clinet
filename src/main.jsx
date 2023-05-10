import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Main from "./components/Main/Main.jsx";
import NewUsers from "./components/Page/NewUsers/NewUsers.jsx";
import Users from "./components/Page/Users/Users.jsx";
import UpdateUsers from "./components/Page/UpdateUsers/UpdateUsers.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Users />,
        loader: () =>
          fetch("https://user-manegment-curd-server.vercel.app/usersm"),
      },
      {
        path: "/newUsers",
        element: <NewUsers />,
      },
      {
        path: "/updateUsers/:id",
        element: <UpdateUsers />,
        loader: ({ params }) =>
          fetch(
            `https://user-manegment-curd-server.vercel.app/usersm/${params.id}`
          ),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
