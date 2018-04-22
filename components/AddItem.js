import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.textItem
        };

    }

    handleChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    addItem(item) {
        this.props.addEvent(item);
        this.setState({
            value: ''
        });
    }

    render() {
        return (
            <div className="add-item">
                <input type="text" value={this.state.value} onChange={(e) => this.handleChange(e)} />
                <button className="btn btn-primary" onClick={() => this.addItem(this.state.value)}>Add</button>
            </div>
        )
    }
}