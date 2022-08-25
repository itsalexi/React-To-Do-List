import { Component } from 'react';
import './AddTaskForm.css';
class AddTaskForm extends Component {
    render() {
        const { task, onInputChange, onTaskSubmit } = this.props;
        return (
            <form className="addTaskForm" onSubmit={onTaskSubmit}>
                <input
                    type="text"
                    id="taskInput"
                    placeholder="Task Name"
                    value={task.text}
                    onChange={onInputChange}
                />
                <button type="submit" className="addTaskBtn">
                    Add Task
                </button>
            </form>
        );
    }
}

export default AddTaskForm;
