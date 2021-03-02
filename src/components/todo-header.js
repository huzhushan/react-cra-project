import React, { Component } from 'react';

class Header extends Component {
  state = { 
    inputValue: "",
  }
  handleInput = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }
  handleAddTask = (e) => {
    if (e.keyCode === 13) {
      this.props.handleAddTask(this.state.inputValue)
      this.setState({
        inputValue: ""
      })
    }
  }
  shouldComponentUpdate = (nextProps, nextState) => {
    return this.state.inputValue !== nextState.inputValue
  }
  render() { 
    console.log('header-----');
    return ( 
      <div className="input">
        <input type="text" value={this.state.inputValue} onInput={this.handleInput} onKeyUp={this.handleAddTask} placeholder="请输入任务标题" />
      </div>
    );
  }
}
 
export default Header;