import React, { Component } from 'react';
import Overview from './components/overview/Overview';
import Header from './components/header/Header';
import AddTaskForm from './components/addtaskform/AddTaskForm';
import uniqid from 'uniqid';
class App extends Component {
    constructor() {
        super();

        this.removeTask = this.removeTask.bind(this);
        this.editTask = this.editTask.bind(this);

        this.state = {
            task: {
                text: '',
                id: uniqid(),
            },
            tasks: [],
        };
    }

    removeTask(id) {
        const tasks = this.state.tasks.filter((t) => t.id !== id);

        this.setState({ tasks: tasks });
    }

    editTask(id, index, newText) {
        // console.log(this.state.tasks);

        const newTasks = this.state.tasks.filter((t) => t.id !== id);
        const task = this.state.tasks.filter((t) => t.id === id)[0];
        task.text = newText;

        newTasks.splice(index, 0, task);

        this.setState({ tasks: newTasks }, () => console.log(this.state.tasks));

        // console.log(this.state.tasks);
    }

    handleInputChange = (event) => {
        this.setState({
            task: {
                text: event.target.value,
                id: this.state.task.id,
            },
        });
    };

    onTaskSubmit = (e) => {
        e.preventDefault();
        this.setState({
            tasks: this.state.tasks.concat(this.state.task),
            task: {
                text: '',
                id: uniqid(),
            },
        });
    };

    render() {
        const { task, tasks } = this.state;

        return (
            <div>
                <Header>
                    <h1>To Do List</h1>
                    <AddTaskForm
                        task={task}
                        onInputChange={this.handleInputChange}
                        onTaskSubmit={this.onTaskSubmit}
                    />
                </Header>

                <Overview
                    tasks={tasks}
                    removeTask={this.removeTask}
                    editTask={this.editTask}
                />
            </div>
        );
    }
}

export default App;
