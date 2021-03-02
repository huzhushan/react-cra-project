import React, { Component } from 'react';

class TodoItem extends Component {
  shouldComponentUpdate = (nextProps) => {
    return this.props.task.status !== nextProps.task.status
  }
  render() { 
    console.log('item-----');
    const {task, handleSwitchStatus, handleDeleteTask} = this.props;
    
    return (  
      <li className={task.status === 1? 'active' : ''} >
        <div className="left">
          {task.status === 1 && <span className="orange">✔</span>}
          {task.title}
        </div>
        <div className="right">
          <button className="btn" onClick={handleSwitchStatus.bind(null, task)}>
            切换为{task.status === 1 ? '未完成' : '已完成'}
          </button>
          <span className="delete" onClick={handleDeleteTask.bind(null, task.id)}>x</span>
        </div>
      </li>
    );
  }
}
 
export default TodoItem;