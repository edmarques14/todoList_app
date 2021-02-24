import React, { Component } from 'react'
import './Todo.css'
class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false, task: this.props.task
        }
        this.toggleForm = this.toggleForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleCompletion = this.handleCompletion.bind(this);
    }
    handleCompletion(evt) {
        this.props.toggleCompletion();
    }
    handleUpdate(evt) {
        evt.preventDefault();
        this.props.updateTask(this.props.id, this.state.task);
        this.setState({ isEditing: false });

    }
    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    toggleForm() {
        this.setState({ isEditing: !this.state.isEditing })
    }
    render() {
        let result;
        if (this.state.isEditing) {
            result = (
                <div className="Todo">
                    <form
                        className="Todo-edit-form"
                        onSubmit={this.handleUpdate}
                    >
                        <input
                            name="task"
                            type="text"
                            value={this.state.task}
                            key={this.props.id}
                            onChange={this.handleChange}
                        />
                        <button>Save</button>
                    </form>
                </div>
            )
        } else {
            result = (
                <div className="Todo">
                    <li
                        className={this.props.completed ? 'Todo-task completed' : "Todo-task"}
                        onClick={this.handleCompletion}
                    >
                        {this.props.task}
                    </li>
                    <div className="Todo-buttons">
                        <button onClick={this.toggleForm}><i class='fas fa-pen' /></button>
                        <button onClick={this.props.deleteTask}><i class='fas fa-trash' /></button>
                    </div>
                </div>
            )
        }
        return result;
    }
}
export default Todo;