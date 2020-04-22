import React from 'react';
import TaskComponent from './TaskComponent';
import InputForm from './InputForm';

class TaskListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.changeStatus = this.changeStatus.bind(this);
        this.updateTask = this.updateTask.bind(this);
        this.addTask = this.addTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.editTask = this.editTask.bind(this);
        this.state = {
            tasks: [],
            currentTask: ''
        }
    }

    changeStatus(index) {
        console.log("Change status");
        var tasks = this.state.tasks;
        var task = tasks[index];
        task.completed = !task.completed;
        this.setState({
            tasks: tasks
        });
    }

    deleteTask(itemTobeDeleted) {
        let tasks = this.state.tasks;
        tasks.splice(itemTobeDeleted, 1);
        this.setState({
            tasks
        });
    }

    addTask(event) {
        event.preventDefault();
        let tasks = this.state.tasks;
        let currentTask = this.state.currentTask;
        tasks.push({
            name: currentTask,
            completed: false
        });

        this.setState({
            tasks: tasks,
            currentTask: ''
        });
    }

    editTask(position, newValue) {
        let { tasks } = this.state;
        let currentTask = tasks[position];
        currentTask['name'] = newValue;
        this.setState({
            tasks
        });
    }

    updateTask(newValue) {
        this.setState(
            {
                currentTask: newValue.target.value
            }
        );
    }

    render() {
        return (
            <div>
                <section>
                    <InputForm
                        currentTask={this.state.currentTask}
                        updateTask={this.updateTask}
                        addTask={this.addTask}
                    />
                </section>
                <ul className="list-group">
                    {this.state.tasks.map((task, index) => {
                        return <TaskComponent
                            key={task.name}
                            task={task}
                            index={index}
                            clickHandler={this.changeStatus}
                            deleteTask={this.deleteTask}
                            editTask={this.editTask} />
                    })}
                </ul>
            </div>
        );
    }
}
export default TaskListComponent;