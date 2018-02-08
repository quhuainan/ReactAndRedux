import React, { Component, PropTypes } from 'react';
import * as Actions from '../Actions.js';
import CounterStore from '../stores/CounterStore.js';


const buttonStyle = {
    margin: '10px'
};

export default class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: CounterStore.getCountValues[this.props.caption]
        }
    }

    componentDidMount() {
        CounterStore.addChangeListener(this.onChange)
    }

    onChange = () => {
        const newCount = CounterStore.getCountValues()[this.props.caption]
        this.setState({ count: newCount })
    }

    componentWillUnmount() {
        CounterStore.removeChangeListener(this.onChange)
    }
    onClickIncrementButton = () => {
        Actions.increment(this.props.caption)
    }
    onClickDecrementButton = () => {
        Actions.decrement(this.props.caption)
    }
    render() {
        const { caption } = this.props;
        return (<div>
            <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
            <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
            <span>{caption} count:{this.state.count}</span>
        </div>)
    }
}