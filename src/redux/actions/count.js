/* 该文件专门为Count组件生成action对象 */
import { INCREMENT, DECREMENT } from "../constant";

//同步action：action函数的返回值为Object类型的一般对象
export const createIncrementAction = (data) => ({ type: INCREMENT, data });
export const createDecrementAction = (data) => ({ type: DECREMENT, data });
//异步action：action函数的返回值为函数,action中包含ajax、定时器等异步任务
export const createIncrementAsyncAction = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      //简略写法；相当于action.dispatch
      dispatch(createIncrementAction(data)); //异步action中一般都会调用同步的action
    }, time);
  };
};
