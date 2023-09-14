import React, { Component } from "react";
//引入store，用于获取redux中保存的状态
import store from "../../redux/store";
//引入actionCreator，专门用于创建action对象
import {createIncrementAction,createDecrementAction} from '../../redux/count_action'
import {INCREMENT,DECREMENT} from '../../redux/constant'
export default class Count extends Component {
  componentDidMount() {
    //检测redux中状态的变化，只要变化，就调用render 
    //(之前state的状态会自动更新是因为react规定了只要你调用setState就会帮你重新render，现在是redux管理状态，所以需要自己强制更新页面状态，不然你改的state在页面中是不会更新的)
    //记住：要在index.jsx检测store状态的改变，Count组件只要一挂载就重新渲染，redux只负责管理状态，至于状态的该百年驱动页面的展示——要靠我们自己写
    store.subscribe(() => {  
      this.setState({});  //react看到setState就会调用render
    });
  }
  increment = () => {
    const { value } = this.selectNumber;
    store.dispatch(createIncrementAction(value*1));
  };
  decrement = () => {
    const { value } = this.selectNumber;
    store.dispatch(createDecrementAction(value*1));
  };
  incrementIfOdd = () => {
    const { value } = this.selectNumber;
    const count = store.getState();
    if (count % 2 !== 0) {
      store.dispatch(createIncrementAction(value*1));
    }
  };
  incrementAsync = () => {
    const { value } = this.selectNumber;
    const { count } = store.getState();
    setTimeout(() => {
      store.dispatch(createIncrementAction(value*1));
    }, 500);
  };
  render() {
    return (
      <div>
        <h1>当前求和为：{store.getState()}</h1>
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
