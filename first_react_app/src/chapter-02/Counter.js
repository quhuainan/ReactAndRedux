
import React, { Component } from 'react'

const buttonStyle = {
    margin: 10
}

export default class Counter extends Component {
    constructor(props) {
        console.log('enter constructor: ' + props.caption);

        super(props)
        this.state = {
            count: props.initValue || 0 // 默认值表示方式
        }
    }
    componentWillReceiveProps(nextProps) {
        console.log('enter componentWillReceiveProps ' + this.props.caption)
    }

    componentWillMount() {
        console.log('enter componentWillMount ' + this.props.caption);
    }

    componentDidMount() {
        console.log('enter componentDidMount ' + this.props.caption);
    }


    /* shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.caption !== this.props.caption) ||
            (nextState.count !== this.state.count);
    } */
    render() {
        console.log('enter render ' + this.props.caption);

        return (<div>
            <button style={buttonStyle} onClick={() => {
                this.props.value(this.state.count, ++this.state.count)
                this.setState({ count: ++this.state.count })
            }

            }>+</button>
            <button style={buttonStyle} onClick={() => {
                this.props.value(this.state.count, --this.state.count)
                this.setState({ count: --this.state.count })

            }
            }>-</button>
            <span>{this.props.caption} count:{this.state.count}</span>
        </div>)
    }
}


/* Counter.PropTypes = {
    caption: PropTypes.string.isRequired,
    initValue: PropTypes.number
} */
