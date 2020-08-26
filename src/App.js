import React from 'react';
import './App.css';
import TodoList from "./components/TodoList";
import Logo from "./components/Logo/Logo"

function App() {
  return (
    <div className="App" style={{display:'flex',flexDirection:"column",alignItems:'center',}}>
      <Logo/>
     <TodoList/>
    </div>
  );
}

export default App;
