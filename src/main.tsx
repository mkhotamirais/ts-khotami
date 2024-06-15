import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Apps from "./pages/apps/Apps.tsx";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";
import PedroTodo from "./pages/apps/pedro-todo/PedroTodo.tsx";
import WdsCart from "./pages/apps/wds-cart/WdsCart.tsx";
import Lessons from "./pages/lessons/Lessons.tsx";
import Lesson1 from "./pages/lessons/Lesson1.tsx";
import Lesson2 from "./pages/lessons/Lesson2.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="apps" element={<Apps />}>
        <Route index element={<PedroTodo />} />
        <Route path="pedro-todo" element={<PedroTodo />} />
        <Route path="wds-cart" element={<WdsCart />} />
      </Route>

      <Route path="lessons" element={<Lessons />}>
        <Route index element={<Lesson1 />} />
        <Route path="lesson1" element={<Lesson1 />} />
        <Route path="lesson2" element={<Lesson2 />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
