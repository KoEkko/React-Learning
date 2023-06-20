/* 对ES6内置API做兼容处理 */
import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";

import React from "react";
import ReactDOM from "react-dom/client";

import "@/index.less";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>React Learning</div>
  </React.StrictMode>
);

fetch("/jian/subscriptions/recommended_collections")
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
  });

fetch("zhi/news/latest")
  .then((res) => res.json())
  .then((res) => {
    console.log(res);
  });
