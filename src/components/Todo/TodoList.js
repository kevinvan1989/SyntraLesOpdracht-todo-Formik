import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  
  render() {
    const { todoArray } = this.props;
    return (
      <ul id="todolist">
        {todoArray.map(todo => {
          return <TodoItem todoItem={todo} key={todo.id}/>
        })}
      </ul>
    );
  }
}

export default TodoList;