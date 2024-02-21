import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import './util/Constants.css';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Select from "./pages/Select";
import Notice from "./pages/Notice";
import TodoList from "./pages/TodoList";
import Photo from "./pages/Photo";
import Upload from "./pages/Upload";
import Places from "./pages/Places";
import UploadPlace from "./pages/UploadPlace";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Select /> },
      { path: "/notice", element: <Notice /> },
      { path: "/todolist", element: <TodoList /> },
      { path: "/photo", element: <Photo /> },
      { path: "/upload", element: <Upload /> },
      { path: "/places", element: <Places /> },
      { path: "/uploadplace", element: <UploadPlace /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
