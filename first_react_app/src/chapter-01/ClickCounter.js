import React, { Component } from 'react'


export default class ClickCounter extends Component {
    constructor(props) {
        super(props)
        // 将函数方法与this绑定，防止在函数方法中调用的this 不是 该实例对象
        this.onClickButton = this.onClickButton.bind(this)
        this.state = { count: 0 }
    }

    onClickButton() {
        this.setState({ count: ++this.state.count })
    }
    render() {
        return <div style={{ padding: 46 }}>
            <button onClick={this.onClickButton}>点击我</button>
            <div style={{ paddingTop: 16 }}>点击次数：<span id="clickCount">{this.state.count}</span></div>
        </div>
    }
}
