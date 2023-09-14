/* 
    该文件用于创建一个专门为Count组件服务的reducer，reducer的本质就是一个函数
    reducer该函数接收两个参数，分别为：之前的状态preState、动作对象action
    reducer函数返回加工后的状态
    reducer被第一次调用时，是store自动触发的，传递的preState是undefined，所以我们给它设置个initState为0；传递的action是{type:'@@REDUX/INIT_A.2.B.4'}
*/

import {INCREMENT,DECREMENT} from './constant'

const initState = 0  //初始化状态，没给preState的时候就设为0
export default function countReducer(preState=initState, action){
    //从action对象中获取type和da'ta
    const {type, data} = action
    switch(type){
        case INCREMENT:
            return preState + data
        case DECREMENT:
            return preState - data
        default:
            return preState;
    }
}