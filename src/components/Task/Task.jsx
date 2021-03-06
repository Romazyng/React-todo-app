import React, { Component } from 'react';
import CompleteCheckbox from './CompleteCheckbox.jsx';
import moment from 'moment';

class Task extends Component {
    render() {
        let relativeDate = moment(this.props.task.date, 'D MMM, HH:mm', true).fromNow();
        let { task, handleDelete, handleComplete } = this.props;

        let classNames = {
            li: 'task-item px-3 pt-2 mb-3',
            container: 'd-flex justify-content-between',
            text: task.completed ? 'text-muted text-strikethrough mt-1 ' : 'mt-1 ',
            controls: 'task-controls d-flex align-items-center ml-4',
            delete: 'material-icons ml-2 delete-task-btn',
        };

        return (
            <li className={classNames.li}>
                <div className={classNames.container}>
                    <div>
                        <small className="text-muted">{relativeDate}</small>
                        <p className={classNames.text}>{task.text}</p>
                    </div>

                    <div className={classNames.controls}>
                        <CompleteCheckbox
                            handleComplete={() => {
                                let updated = task;
                                updated.completed = !updated.completed;
                                handleComplete(updated.id, updated);
                            }}
                            completed={task.completed}
                        />
                        <i className={classNames.delete} onClick={() => handleDelete(task.id)}>
                            close
                        </i>
                    </div>
                </div>
            </li>
        );
    }
}

export default Task;
