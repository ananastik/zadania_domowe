import React, { Component } from 'react';
import './Counter.css';
import ButtonsPanel from './ButtonsPanel.js';

class Counter extends Component {
    constructor(props) {
        super(props);
        let initValue = 0;
        if (! isNaN(this.props.initValue)) {
            initValue = parseInt(this.props.initValue);
        }
        this.state = {
            counterValue: initValue,
        }
    }

    updateStep =(event) => {
        this.setState({step: event.target.value});

    }

    changeValue = () => {
        let step = this._inputStep.value;
        this.setState((prevValue) => {
            return ({counterValue: prevValue.counterValue + parseInt(step)
            });
        });
    }

    buttonText = () => {
        let step = this._inputStep.value;
        return({step});
    }

    resetCounter = (resetCounter) => {
        let initValue=0;

        this.setState({
            counterValue: initValue,
        });
      }

      reinitCounter = (reinitCounter) => {
        let initValue=0;

        if(!reinitCounter){
            if (! isNaN(this.props.initValue)) {
                initValue = parseInt(this.props.initValue);
            }
        }
        this.setState({
            counterValue: initValue,
        });
      }

    render() {
        return (
            <div className='counter'>Licznik:
        <span className='value'>
                    {this.state.counterValue}
                </span>
                <ButtonsPanel reinitCounterValue={this.reinitCounter} resetCounterValue={this.resetCounter} changeCounterValue={this.changeValue} step={this.buttonText}/>
                <input ref={(data) => { this._inputStep = data} } onChange={this.updateStep} type="number" /> 
            </div>
        );
    }
}
export default Counter;