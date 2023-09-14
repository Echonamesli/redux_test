//引入react核心库
import React from "react";
//引入ReactDOM
import ReactDOM from "react-dom";
//引入App组件
import App from "./App.jsx";
/* 
    redux
    1、redux是一个专门用于做状态管理的JS库（不是react插件库）
    2、redux可以在react、angular、vue等项目中，但基本与react配合使用
    3、作用是集中式管理react中多个组件共享的状态
*/
const root = ReactDOM.createRoot(document.getElementById("root"));
//渲染App到页面
root.render(<App />);
