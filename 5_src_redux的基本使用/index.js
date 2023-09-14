//引入react核心库
import React from "react";
//引入ReactDOM
import ReactDOM from "react-dom";
//引入App组件
import App from "./App.jsx";
import store from "./redux/store.js";
/* 
    react-redux模型
    1）Count(容器组件)包裹着Count(UI组件)
    2）容器组件是真正和redux打交道的，UI组件不能使用任何redux的api
    3）容器组件会通过props传递给UI组件：1、redux中所保存的方法；2、用于操作状态的方法
*/
const root = ReactDOM.createRoot(document.getElementById("root"));
//渲染App到页面
root.render(<App />);
//检测redux中状态的改变，若redux的状态发生改变，则重新渲染App组件
store.subscribe(() => {
  root.render(<App />);
});
