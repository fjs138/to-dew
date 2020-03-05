import React, {useState} from 'react';
import TodewList from './TodewList'

function App() {
  const [todos, setTodos] = useState([])
  return (
    <>
    <TodewList todos={todos} />
    <input type="text"/>
    <button>Add</button>
    <button>Clear Completed</button>
    <div>0 left to do!</div>
  </>
  )
}

export default App;

