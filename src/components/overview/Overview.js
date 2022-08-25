import { Component } from 'react';
import Task from '../task/Task';
import './Overview.css';

class Overview extends Component {
    render() {
        const { tasks } = this.props;
        return (
            <div className="task-list">
                {tasks.map((task, index) => {
                    return (
                        <Task
                            id={task.id}
                            key={task.id}
                            text={task.text}
                            index={index}
                            removeTask={this.props.removeTask}
                            editTask={this.props.editTask}
                        />
                    );
                })}
            </div>
        );
    }
}

export default Overview;
