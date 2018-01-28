import React, { Componet, Component } from 'react'
import Counter from './Counter'

export default class ControlPanel extends Component {
    constructor(props) {
        super(props)
        this.initValues = [0, 10, 20]
        const sum = this.initValues.reduce((a, b) => a + b, 0)
        this.state = {
            total: sum
        }
    }

    onUpdateTotal = (oldValue, newValue) => {
        this.setState({ total: (this.state.total + newValue - oldValue) })

    }
    render() {
        console.log('enter ControlPanel render');
        let [one, two, three] = this.initValues
        return (
            <div className="App">
                <Counter caption="First" initValue={one} value={this.onUpdateTotal} />
                <Counter caption="Second" initValue={two} value={this.onUpdateTotal} />
                <Counter caption="Third" initValue={three} value={this.onUpdateTotal} />
                <button onClick={() => this.forceUpdate()}>
                    触发render方法
            </button>
                <span>total总数 为{this.state.total}</span>
            </div>
        );
    }
}

