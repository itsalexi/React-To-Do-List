import { Component } from 'react';

class AddTaskForm extends Component {
    render() {
        const { task, onInputChange, onTaskSubmit } = this.props;
        return (
            <form onSubmit={onTaskSubmit}>
                <input
                    type="text"
                    id="taskInput"
                    placeholder="Task Name"
                    value={task.text}
                    onChange={onInputChange}
                />
                <button type="submit">Add Task</button>
            </form>
        );
    }
}

export default AddTaskForm;
