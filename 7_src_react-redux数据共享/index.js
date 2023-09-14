//引入react核心库
import React from "react";
//引入ReactDOM
import ReactDOM from "react-dom";
//引入App组件
import App from "./App.jsx";
import store from "./redux/store.js";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("root"));
//渲染App到页面
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

/* 
    总结：react-redux多组件数据共享
    1、Person组件和Count组件通过redux共享数据
    2、为Person组件编写reducer、action、配置constant常量
    3、Person的reducer和Count的Reducer要使用combineReducers进行合并，合并后的状态是一个总对象
    4、交给store的是总的reducer，各个组件从reducer取数据的时候要取到位
*/
