import React, { Component } from 'react';
import TodoDataService from '../../api/todo/TodoDataService';
import AuthenticationService from './AuthenticationService';
import moment from 'moment';

class ListTodosComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      message: '',
    };
  }

  componentDidMount() {
    this.refreshTodos();
  }

  refreshTodos = () => {
    let username = AuthenticationService.getLoggedInUserName();
    TodoDataService.retrieveAllTodos(username).then((res) =>
      this.handleSucessfulResponse(res),
    );
  };

  handleSucessfulResponse = (res) => {
    this.setState({ todos: res.data });
  };

  deleteTodoClicked = (id) => {
    let username = AuthenticationService.getLoggedInUserName();
    TodoDataService.deleteTodo(username, id).then((res) => {
      this.setState({ message: `Todo ${id} eliminated` });
      this.refreshTodos();
    });
  };

  updateTodoClicked = (id) => {
    this.props.history.push(`/todos/${id}`);
  };

  addTodoClicked = () => {
    this.props.history.push(`/todos/-1`);
  };

  render() {
    return (
      <div>
        <h1>List Todos</h1>
        {this.state.message && (
          <div className="alert alert-success">{this.state.message}</div>
        )}
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>description</th>
                <th>isCompleted?</th>
                <th>Target Date</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.todos.map((todo) => (
                <tr key={todo.id}>
                  <td>{todo.description}</td>
                  <td>{todo.done.toString()}</td>
                  <td>
                    {moment(todo.targetDate.toString()).format('YYYY-MM-DD')}
                  </td>
                  <td>
                    <button
                      className="btn btn-success"
                      onClick={() => this.updateTodoClicked(todo.id)}
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => this.deleteTodoClicked(todo.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="row">
            <button className="btn btn-success" onClick={this.addTodoClicked}>
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ListTodosComponent;
