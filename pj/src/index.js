import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import App from './App';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Main from './pages/Main/Main';
import WriteScrap from './pages/WriteScrap';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/WriteScrap",
        element: <WriteScrap />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);