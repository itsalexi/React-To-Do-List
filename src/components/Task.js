import { Component } from 'react';

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
                <div>
                    <p>
                        {index + 1}. {text}
                    </p>
                    <button onClick={this.removeTask}>X</button>
                    <button onClick={this.switchMode}>Edit</button>
                </div>
            );
        } else {
            return (
                <div>
                    <input
                        type="text"
                        id="newText"
                        value={this.state.newText}
                        onChange={this.setNewText}
                    />
                    <button onClick={this.editTask}>Edit</button>
                </div>
            );
        }
    }
}

export default Task;
