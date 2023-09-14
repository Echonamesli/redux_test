import React, { Component } from 'react'
import Count from './containers/Count'
//用于传给容器组件
import store from './redux/store'
export default class App extends Component {
  render() {
    return (
      <div> 
        {/* 现在App里渲染的是Count的容器组件哦！！！！容器组件里的store需要在App组件里用props属性传给它 */}
        <Count store={store}/>
      </div>
    )
  }
}
