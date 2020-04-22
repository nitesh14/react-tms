import React from 'react';

class TaskComponent extends React.Component {
    constructor(props) {
        super(props);
        this.renderForms = this.renderForms.bind(this);
        this.renderTask = this.renderTask.bind(this);
        this.toggleState = this.toggleState.bind(this);
        this.updateTask = this.updateTask.bind(this);
        this.state = {
            isEditing: false
        }
    }

    updateTask(event) {
        event.preventDefault();
        this.props.editTask(this.props.index, this.input.value);
        this.toggleState();
    }

    toggleState() {
        const { isEditing } = this.state;
        this.setState({
            isEditing: !isEditing
        });
    }

    renderForms() {
        return (
            <form onSubmit={this.updateTask}>
                <div className="form-group">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control"
                            defaultValue={this.props.task.name}
                            ref={(value) => { this.input = value; }} />
                        <div className="input-group-append">
                            <button className="btn btn btn-primary" type="submit" id="button-addon2">Update</button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }

    renderTask() {
        return (
            <li onClick={() => { this.props.clickHandler(this.props.index) }}
                className={this.props.task.completed ? 'completed list-group-item' : '' + " list-group-item"}>
                <input type="checkbox" className="form-check-input" id="taskcheck" />
                <span className="taskrender">{this.props.task.name}</span>
                <button className="task" onClick={(event) => {
                    event.stopPropagation();
                    this.props.deleteTask(this.props.index)
                }}><i className="fa fa-trash" aria-hidden="true"></i></button>

                <button className="task" onClick={(event) => {
                    event.stopPropagation();
                    this.toggleState()
                }}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
            </li>
        );
    }

    render() {
        const isEditing = this.state.isEditing
        return (
            <section>
                {
                    isEditing ? this.renderForms() : this.renderTask()
                }
            </section>
        );
    }
}
export default TaskComponent;