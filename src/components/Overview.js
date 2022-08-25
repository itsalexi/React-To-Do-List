import { Component } from 'react';
import Task from './Task';
class Overview extends Component {
    render() {
        const { tasks } = this.props;
        return (
            <ul>
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
            </ul>
        );
    }
}

export default Overview;
