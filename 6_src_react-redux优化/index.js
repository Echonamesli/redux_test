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
  /* 这样就不用在App里面自己给Count组件传递store了，App里所有的容器组件都能收到store */
  <Provider store={store}>
    <App />
  </Provider>
);

//检测redux中状态的改变，若redux的状态发生改变，则重新渲染App组件
/* store.subscribe(()=>{
    root.render(<App/>)
}) */
//简化后可以不用监测，react-redux会自动帮你检测

/* 
    总结：react-redux优化的内容
    1、UI组件放到容器组件里面去，混合成一个文件
    2、无需在App组件里自己给Count组件传递store，给<App/>包裹一个<Provider store={store}>即可
    3、使用react-redux后不用自己监测redux状态的改变了，容器组件自己可以完成监测
    4、mapDispatchToProps也可以简单的写成一个对象
*/
