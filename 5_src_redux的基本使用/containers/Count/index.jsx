/* Count容器组件——与redux打交道 */
//容器组件不能自己用rcc写，要用react-redux
import React, { Component } from "react";
//引入Count的UI组件
import CountUI from "../../components/Count";
import { createIncrementAction,createDecrementAction, createIncrementAsyncAction } from "../../redux/count_action";
//引入connect用于连接UI组件和redux
import { connect } from "react-redux";

/* 
    容器组件要给UI组件传递两个东西：redux中保存的状态+用于操作状态的方法
    1、mapStateToProps函数返回的是一个对象
    2、返回的对象中的key就作为传递给UI组件的props的key，value就作为传递给UI组件的props的value
    3、mapStateToProps用于传递状态
*/
function mapStateToProps(state) {
  return { count: state };
}
/* 
    容器组件要给UI组件传递两个东西：redux中保存的状态+用于操作状态的方法
    1、mapDispatchToProps函数返回的是一个对象
    2、返回的对象中的key就作为传递给UI组件的props的key，value就作为传递给UI组件的props的value
    3、mapDispatchToProps用于传递状态
*/
function mapDispatchToProps(dispatch) {
  return {
    jia: (number) => {
      //通知redux执行加法
      dispatch(createIncrementAction(number));
    },
    jian: (number) => {
      //通知redux执行减法
      dispatch(createDecrementAction(number));
    },
    jianAsync: (number,time) => {
      //通知redux执行异步加法
      dispatch(createIncrementAsyncAction(number,time));
    },
  };
}

//创建并暴露一个Count的容器组件
//a,b分别是父亲(容器组件)传递给儿子(UI组件的)的两个东西，分别是mapStateToProps————映射redux状态和mapDispatchToProps————映射操作redux状态的方法
export default connect(mapStateToProps, mapDispatchToProps)(CountUI);
