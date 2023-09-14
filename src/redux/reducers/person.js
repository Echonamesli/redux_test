import { ADD_PERSON } from "../constant"
//初始化人的列表
const initState = [{id:'001',name:'tom',age:18}]
export default function personReducer(preState = initState, action){
    const {type,data} = action
    switch(type){
        case ADD_PERSON:  //添加一个人
            return [data,...preState]  //记得必须返回新数组(深拷贝)，单纯push的话数组地址没变所以无效
        default:
            return preState
    }
}

/* 纯函数
    1、一类特别的函数，比如你两次调用此函数，这两次你只要是同样的输入，必定得到同样的输出
    2、纯函数的必须遵守的约束：
        a)不得改写参数
        b)不会产生副作用，比如网络请求、输入和输出设备
        c)不能调用Date.now()或者Math.random()等
    3、redux的reducer函数必须是一个纯函数
*/