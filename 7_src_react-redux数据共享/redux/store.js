/* 该文件专门用于暴露一个store对象，整个应用只有一个store对象 */

//引入legacy_createStore，专门用于创建redux中最为核心的store对象
import { legacy_createStore, applyMiddleware,combineReducers } from "redux";
//引入为Count组件服务的reducer
import countReducer from "./reducers/count";
//引入为Person组件服务的reducer
import personReducer from "./reducers/person";
//引入redux-thunk，专门用于支持异步action
import thunk from "redux-thunk";
//combineReducers传入的对象就是redux中保存的总的状态对象
//一个组件对应一个reducer，多个reducer由一个store统一管理
const allReducer = combineReducers({he:countReducer,rens:personReducer})
//export default legacy_createStore(countReducer, applyMiddleware(thunk));
export default legacy_createStore(allReducer, applyMiddleware(thunk));
