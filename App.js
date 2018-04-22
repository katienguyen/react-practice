import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { List } from './components/List';
import { AddItem } from './components/AddItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'xxx',
      items: [
        { id: 1, firstname: 'Trinh', lastname: 'Nguyen' },
        { id: 2, firstname: 'Kiet', lastname: 'Nguyen' },
        { id: 3, firstname: 'Vy', lastname: 'Vo' }
      ],
    }
    this.getName = this.getName.bind(this);
    this.delete = this.delete.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  getName(id) {
    // console.log('clicked', id);
    const index = this.state.items.findIndex((items) => {
      return items.id === id
    });
    this.setState({
      value: this.state.items[index].firstname
    });
  }

  delete(id) {
    this.setState({
      items: this.state.items.filter((item, index) => item.id !== id)
    });
  }

  addItem(textItem) {
    let items = this.state.items;
    let length = items.length;
    items.push({
      id: ++length,
      firstname: textItem
    });
    this.setState({
      items: items
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p> Hello {this.state.value} </p>
        <AddItem textItem="" addEvent={this.addItem} />
        <List items={this.state.items} clickEvent={this.getName} deleteEvent={this.delete} />
      </div>
    );
  }
}

export default App;
