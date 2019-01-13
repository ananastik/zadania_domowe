import React, { Component } from 'react';
import Counter from './Counter.js'

class ButtonsPanel extends Component {

    resetCounter = (reset) => {
        this.props.resetCounterValue(reset);
    }

    reinitCounter = (reinit) => {
        this.props.reinitCounterValue(reinit);
    }
    render() {
        return (
            <div className="buttons-panel">
                <button onClick={this.props.changeCounterValue}>Zwieksz o {this.props.step}</button>
                <button onClick={() => {
                    this.reinitCounter(false) //decides if we set to 0 or reset (false for reset)
                }
                }>Reinit</button>
                <button onClick={() => {
                    this.resetCounter(false) //decides if we set to 0 or reset (false for reset)
                }
                }>Reset</button>
            </div>
        )
    }
}

export default ButtonsPanel;