import React, { Component } from 'react';
import cx from 'classnames';
import uncheckImage from 'assets/images/checkbox-uncheck.svg';
import checkImage from 'assets/images/checkbox-check.svg';

class Tasks extends Component {
  state = {
    todos: [
      {
        id: 1,
        content: 'Completed 4K RUN in San Jose"',
        completed: true
      },
      {
        id: 2,
        content: 'Had one hour workout session',
        completed: true
      },
      {
        id: 3,
        content: 'Had one hour workout session',
        completed: true
      },
      {
        id: 4,
        content: 'Ankle sprain in the foot',
        completed: false
      },
      {
        id: 5,
        content: 'Participated in international league  challenge'
      },
      {
        id: 6,
        content: 'Lines From Great Russian Literature? Or E-mails From My Boss?',
        completed: false
      }
    ]
  };

  toggleComplete = todoId => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === todoId) todo.completed = !todo.completed;
        return todo;
      })
    });
  }

  deleteTodo = todoId => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== todoId)
    });
  }

  render() {
    return (
      <div className="card ">
        <div className="header">
          <h4 className="title">Notifications</h4>
          <p className="category">Backend development</p>
        </div>
        <div className="content">
          <form>
          {this.state.todos.map(todo => (
            <div className={cx("todo-item", {completed: todo.completed})} key={todo.id}>
              <div className="todo-item-wrapper">
              <label className={cx("checkbox", {
                  checked: todo.completed
                })}
                >
                  <span className="icons">
                    <img className="first-icon" src={uncheckImage} width={17} />
                    <img className="second-icon" src={checkImage} width={17} />
                  </span>
                  <input type="checkbox" data-toggle="checkbox" checked={todo.completed} onChange={() => this.toggleComplete(todo.id)} />
                </label>
                <div className="todo-content">{todo.content}</div>
                <a onClick={() => this.deleteTodo(todo.id)}>
                  &times;
                </a>
              </div>
            </div>
          ))}
          </form>


        </div>
        <div className="footer">
          <hr />
          <div className="stats">
            <i className="fa fa-history"></i> Updated 3 minutes ago
              </div>
        </div>
      </div>
    );
  }
}

export default Tasks;