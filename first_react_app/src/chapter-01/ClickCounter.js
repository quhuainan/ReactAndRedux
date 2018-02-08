import React, { Component } from 'react'


export default class ClickCounter extends Component {
    constructor(props) {
        super(props)
        // 将函数方法与this绑定，防止在函数方法中调用的this 不是 该实例对象
        this.onClickButton = this.onClickButton.bind(this)
        this.state = { count: 0, value: '', isZ: false }
    }

    onClickButton() {
        let float = new RegExp("^-?([1-9]\\d*\\.\\d*|0\\.\\d*[1-9]\\d*|0?\\.0+|0)$")
        let int = new RegExp("^-?[1-9]\\d*$")
        
        let a=float.test(this.state.value)||int.test(this.state.value)
        
        this.setState({
            count: ++this.state.count,
            isZ: a
        })
    }
    render() {
        return <div style={{ padding: 46 }}>
            <button onClick={this.onClickButton}>点击我</button>
            <input value={this.state.value} onChange={(event) => { this.setState({ value: event.target.value }) }} />>
            <div style={{ paddingTop: 16 }}>点击次数：<span id="clickCount">{this.state.count}</span></div>
            <div style={{ paddingTop: 16 }}>是否是整数：<span id="clickCount">{this.state.isZ ? "是整数" : "不是整数"}</span></div>

        </div>
    }
}
