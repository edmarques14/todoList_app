import React, { Component } from 'react'
import './NewTodoForm.css';
class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = { task: "" }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }
    handleSubmit(evt) {
        evt.preventDefault();
        const addTask = this.props.addTask;
        addTask(this.state)
        this.setState({ task: "" });
    }
    render() {
        return (
            <div>
                <form
                    className="NewTodoForm"
                    onSubmit={this.handleSubmit}
                >
                    <label htmlFor="task">New Todo</label>
                    <input
                        type="text"
                        id="task"
                        name='task'
                        value={this.state.task}
                        onChange={this.handleChange}
                    />
                    <button>Save</button>
                </form>
            </div>
        )
    }
}
export default NewTodoForm;