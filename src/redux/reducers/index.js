/* 该组件用于汇总所有的reducer为一个总的reducer */
import { combineReducers } from "redux";

//引入为Count组件服务的reducer
//import countReducer from "./count";
import count from "./count";
//引入为Person组件服务的reducer
import person from "./person";

//combineReducers传入的对象就是redux中保存的总的状态对象
//一个组件对应一个reducer，多个reducer由一个store统一管理
export default  combineReducers({count,person})