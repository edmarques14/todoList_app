import React, { Component } from 'react'
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import { v4 as uuidv4 } from 'uuid';
import './TodoList.css';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
        this.addTask = this.addTask.bind(this);
        this.updateTask = this.updateTask.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this)
    }
    addTask(task) {
        let newTodo = { ...task, id: uuidv4(), completed: false };
        this.setState(st => ({
            todos: [...st.todos, newTodo]
        }))
    }
    deleteTask(id) {
        this.setState({ todos: this.state.todos.filter(td => td.id !== id) });
    }
    updateTask(id, updatedTask) {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, task: updatedTask }
            }
            return todo;
        })
        this.setState({ todos: updatedTodos });
    }
    toggleCompletion(id) {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed }
            }
            return todo;
        })
        this.setState({ todos: updatedTodos });
    }
    render() {
        const todoList = this.state.todos.map(td => (
            <Todo
                task={td.task}
                key={td.id}
                id={td.id}
                deleteTask={() => this.deleteTask(td.id)}
                updateTask={this.updateTask}
                completed={td.completed}
                toggleCompletion={() => this.toggleCompletion(td.id)}
            />
        ))
        return (
            <div className="TodoList">
                <h1>Todo List! <span>A Simple React Todo List App</span></h1>

                <ul>
                    {todoList}
                </ul>
                <NewTodoForm
                    addTask={this.addTask}
                />
            </div>
        )
    }
}
export default TodoList;