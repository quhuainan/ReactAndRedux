
import React, { Component } from 'react';
import Counter from './Counter.js';
import Summary from './Summary';

export default class ControlPanel extends Component {

    render() {
        return (
            <div style={{ margin: '20px' }}>
                <Counter caption="First" />
                <Counter caption="Second" />
                <Counter caption="Third" />
                <Summary/>
            </div>
        )
    }
}