import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    const { id, name, done } = this.props.todoItem;
    console.log(id, name, done);
    return (
      <li className={done ? "done" : ""}>
        <span className="label">{name}</span>
        <div className="actions">
          <button type="button" className="btn-picto">
            <i aria-hidden="true" className="material-icons">
              {done ? "check_box" : "check_box_outline_blank"}
            </i>
          </button>
          <button
            type="button"
            className="btn-picto"
          >
            <i aria-hidden="true" className="material-icons">
              delete
            </i>
          </button>
        </div>
      </li>
    );
  }
}

export default TodoItem;