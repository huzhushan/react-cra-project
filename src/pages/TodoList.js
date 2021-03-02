import React, { Component } from 'react';
import {connect} from 'react-redux';
import './style.css';
import Header from '../components/todo-header.js'
import Task from '../components/todo-item.js'

class TodoList extends Component {
  state = { 
    
  }
  
  render() { 
    const {list, handleAddTask, handleSwitchStatus, handleDeleteTask} = this.props;

    return ( 
      <div className="wrap">
        <Header handleAddTask={handleAddTask} />
        <ul className="list">
          {
            list.map((task, index) => {
              return (
                <Task 
                  key={task.id} 
                  task={task}
                  handleSwitchStatus={handleSwitchStatus}
                  handleDeleteTask={handleDeleteTask}
                />
              )
            })
          }
        </ul>
      </div>
    );
  }
}
 
const stateToProps = state => ({
  list: state.list
})

const dispatchToProps = dispatch => ({
  handleAddTask (inputValue) {
    dispatch({
      type: 'ADD_TASK',
      value: inputValue
    })
  },
  handleDeleteTask (taskId) {
    dispatch({
      type: 'DELETE_TASK',
      value: taskId
    })
  },
  handleSwitchStatus (task) {
    dispatch({
      type: 'SWITCH_STATUS',
      value: task
    })
  }
})

export default connect(stateToProps, dispatchToProps)(TodoList);