import { Component } from 'react';
import './Task.css';
class Task extends Component {
    constructor(props) {
        super(props);
        this.removeTask = this.removeTask.bind(this);
        this.editTask = this.editTask.bind(this);
        this.switchMode = this.switchMode.bind(this);
        this.setNewText = this.setNewText.bind(this);

        this.state = {
            edit: false,
        };
    }

    removeTask() {
        this.props.removeTask(this.props.id);
    }

    switchMode() {
        if (this.state.edit) {
            this.setState({
                edit: false,
                newText: '',
            });
        } else {
            this.setState({
                edit: true,
                newText: '',
            });
        }
    }

    editTask() {
        this.props.editTask(
            this.props.id,
            this.props.index,
            this.state.newText
        );
        this.switchMode();
    }

    setNewText(event) {
        this.setState({ newText: event.target.value }, () =>
            console.log(this.state.newText)
        );
    }

    render() {
        const { index, text } = this.props;

        if (!this.state.edit) {
            return (
                <div className="task">
                    <div className="task-content">
                        {index + 1}. {text}
                    </div>
                    <div className="button-container">
                        <button onClick={this.removeTask}>X</button>
                        <button onClick={this.switchMode}>Edit</button>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="task">
                    <div className="task-content">
                        <input
                            type="text"
                            id="newText"
                            value={this.state.newText}
                            onChange={this.setNewText}
                        />
                    </div>
                    <div className="button-container">
                        <button onClick={this.editTask}>Submit</button>
                    </div>
                </div>
            );
        }
    }
}

export default Task;
