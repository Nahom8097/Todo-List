import React, { Component } from "react";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {task: "", description: "", todos: [],};
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleAdd = (e) => {
        e.preventDefault();
        const { task, description, todos } = this.state;

        if (task.trim() === "" || description.trim() === "") return;

        const newTodo = {
            id: Date.now(),task,description,
        };

        this.setState({
            todos: [...todos, newTodo],task: "",description: "",
        });
    };

    handleDone = (id) => {
        const updatedTodos = this.state.todos.filter((todo) => todo.id !== id);
        this.setState({ todos: updatedTodos });
    };

    render() {
        return (
            <div>
                <h1>New task:</h1>
                <form onSubmit={this.handleAdd}>
                    <input type="text" name="task" placeholder="Enter task" value={this.state.task} onChange={this.handleChange} required/><br></br>
                    <input type="text" name="description" placeholder="Enter description" value={this.state.description} onChange={this.handleChange} required/><br></br>
                    <button type="submit">Add</button>
                </form>

                <h2>My ToDo List:</h2>
                <ul>
                {this.state.todos.map((todo) => (
                    <li key={todo.id}>
                        <div>
                            <strong>{todo.task} {todo.description}</strong>
                            <p>{todo.description}</p>
                        </div>
                        <button onClick={() => this.handleDone(todo.id)}>Done</button>
                    </li>
                ))}
                </ul>
            </div>
        );
    }
}
