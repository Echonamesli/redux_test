/* Count容器组件——与redux打交道 */
//容器组件不能自己用rcc写，要用react-redux
import React, { Component } from "react";

import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction,
} from "../../redux/actions/count";
//引入connect用于连接UI组件和redux
import { connect } from "react-redux";

//不再引入Count的UI组件，直接在容器组件里定义UI组件
//import CountUI from "../../components/Count";
class CountUI extends Component {
  increment = () => {
    const { value } = this.selectNumber;
    this.props.jia(value * 1); //我只调用了父亲（容器组件）传给我的props的jia方法，没有碰到redux哦
  };
  decrement = () => {
    const { value } = this.selectNumber;
    this.props.jian(value * 1);
  };
  incrementIfOdd = () => {
    const { value } = this.selectNumber;
    if (this.props.count % 2 !== 0) {
      this.props.jia(value * 1);
    }
  };
  incrementAsync = () => {
    const { value } = this.selectNumber;
    this.props.jianAsync(value * 1, 500);
  };
  render() {
    console.log("UI组件收到的props是：", this.props);
    return (
      <div>
        <h2 style={{color:'pink'}}>我是Count组件</h2>
        <h4 style={{color:'skyblue'}}>下面组件的总人数是：{this.props.personCount}</h4>
        <h1>当前求和为：{this.props.count}</h1>
        <select ref={(c) => (this.selectNumber = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        &nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>&nbsp;
      </div>
    );
  }
}

//这里开始才是容器组件的内容，上面是在定义UI组件
//映射状态
const mapStateToProps = (state) => ({ count: state.count,personCount:state.person.length });  //现在store管理着多个reducer，所以必须指定你要的是state的count

//映射操作状态的方法
const mapDispatchToProps = (dispatch) => ({
  jia: (number) => {
    dispatch(createIncrementAction(number));
  },
  jian: (number) => {
    dispatch(createDecrementAction(number));
  },
  jianAsync: (number, time) => {
    dispatch(createIncrementAsyncAction(number, time));
  },
});
/* 
    mapDispatchToProps的简写
    const mapDispatchToProps = ()=>({
        jia:createIncrementAction,  //redux会帮你dispatch
        jian:createDecrementAction,
        jianAsync:createIncrementAsyncAction
    })
*/

export default connect(mapStateToProps, mapDispatchToProps)(CountUI);
/* 
最终简写版本
export default connect(
    state=>({count:state}),
    {
        jia:createIncrementAction, 
        jian:createDecrementAction,
        jianAsync:createIncrementAsyncAction
    }
)(CountUI)
*/
