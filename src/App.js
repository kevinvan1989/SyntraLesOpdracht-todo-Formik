import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import TodoList from './components/Todo/TodoList';

class App extends Component {
  state = {
    todos: []
  }

  getData = () =>{
    axios.get('http://5de80f759578cb001487adea.mockapi.io/Todo')
    .then(response => {
      const { data } = response;
      this.setState({todos: data})
      // handle success
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
  }

  componentDidMount(){
    this.getData();
  }

  render() {
    const { todos } = this.state;
    console.log(todos);
    return (
      <div className="main">
        <TodoList todoArray={todos}/>

      </div>
    );
  }
}

export default App;