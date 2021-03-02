import React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import TodoList from './pages/TodoList.js'
import TestHooks from './pages/TestHooks.js'
function A() {
  return <div>
    <h2>AAAAAA</h2>
  </div>;
}
function B() {
  return <div>
    <h2>BBBBB</h2>
  </div>;
}
function Index() {
  return <div>
    <h2>首页</h2>
    <Router>
      <Link to="/a">a页面</Link>
      <Link to="/b">b页面</Link>
      <Route path="/a" component={A} />
      <Route path="/b" component={B} />
    </Router>
  </div>;
}
function List({match, history}) {
  console.log(match, history)
  const gotoIndex = () => {
    history.push('/')
  }
  return <h2>List-Page --- id: {match.params.id} <button onClick={gotoIndex}>去首页</button></h2>;
}
const App = () => {
  return (
    <Router>
      <ul>
          <li><Link to="/">首页</Link> </li>
          <li><Link to="/list/123">列表</Link> </li>
          <li><Link to="/todo-list">TodoList</Link> </li>
          <li><Link to="/hooks">TestHooks</Link> </li>
      </ul>
      <Route path="/" exact component={Index} />
      <Route path="/list/:id" component={List} />
      <Route path="/todo-list" component={TodoList} />
      <Route path="/hooks" component={TestHooks} />
      <Redirect to="/" />
    </Router>
  )
}

export default App