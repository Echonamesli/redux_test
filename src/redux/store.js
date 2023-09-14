/* 该文件专门用于暴露一个store对象，整个应用只有一个store对象 */

//引入legacy_createStore，专门用于创建redux中最为核心的store对象
import { legacy_createStore, applyMiddleware,combineReducers } from "redux";

//引入redux-thunk，专门用于支持异步action
import thunk from "redux-thunk";
//引入汇总之后的reducer
import reducer from "./reducers";
//export default legacy_createStore(countReducer, applyMiddleware(thunk));
export default legacy_createStore(reducer, applyMiddleware(thunk));
