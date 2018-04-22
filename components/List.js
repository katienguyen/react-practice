import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class List extends Component {
    constructor(props) {
        super(props);
    }

    getName(id) {
        this.props.clickEvent(id);
    }

    delete(id) {
        this.props.deleteEvent(id);
    }

    render() {
        return (
            <div className="content">
                <div className="list-item">
                    <ul>
                        {
                            this.props.items.map((item, index) => {
                                return <li key={index} onClick={(e) => this.getName(item.id)}>{item.firstname} <button className="delete" onClick={(e) => this.delete(item.id)}>Delete</button></li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}