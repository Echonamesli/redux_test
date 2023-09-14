/* Count的UI组件——不能看到redux的任何东西哦,它只负责页面的呈现、交互等 */
import React, { Component } from "react";

export default class Count extends Component {

  increment = () => {
    const { value } = this.selectNumber;
    this.props.jia(value*1)  //我只调用了父亲（容器组件）传给我的props的jia方法，没有碰到redux哦
  };
  decrement = () => {
    const { value } = this.selectNumber;
    this.props.jian(value*1)  
  };
  incrementIfOdd = () => {
    const { value } = this.selectNumber;
    if(this.props.count %2 !== 0){
        this.props.jia(value*1)
    }
  };
  incrementAsync = () => {
    const { value } = this.selectNumber;
    this.props.jianAsync(value*1,500)
  };
  render() {
    console.log('UI组件收到的props是：',this.props);
    return (
      <div>
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
