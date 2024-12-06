import { useState, useEffect } from "react"

import Header from "./components/Header"
import Tabs from "./components/Tabs"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

import './index.css';
import './fanta.css';


const App = () => {
  //  const todos = [
  //     { input: 'Hello! Add your first todo!', complete: true },
  //     { input: 'Get the groceries!', complete: false },
  //     { input: 'Learn how to web design', complete: true },
  //     { input: 'Say hi to gran gran', complete: true },
  // ] 

  const [todos, setTodos] = useState([
    { input: 'Hello! Add your first todo!', complete: false }
  ]);

  const [selectedTab, setSelectedTab] = useState('Open')

  const handleAddTodo = (newTodo) => {
    const newTodoList = [...todos, {input: newTodo, complete: false}];
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  }

  function handleCompleteTodo(index) {
    // update/edit/modify
    let newTodoList = [...todos]
    let completedTodo = todos[index]
    completedTodo['complete'] = true
    newTodoList[index] = completedTodo
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleInCompleteTodo(index) {
    // update/edit/modify
    let newTodoList = [...todos]
    let completedTodo = todos[index]
    completedTodo['complete'] = false
    newTodoList[index] = completedTodo
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  const handleEditTodo = (index) => {
    // step 1 - create a duplicate array
    // step 2 - create a new variable and assign the current value of the todo that needs editing to it
    // step 3 - set the input value equal to the current value of the todo in question
    // step 4 - copy the delete functionality and filter out the todo @ index from the duplicate array
    // step 5 - set the todo state equal to the filtered duplicate array
    // step 6 - now the user can edit the todo and re-add it when satisfied
  }

  const handleDeleteTodo = (index) => {
      let newTodoList = todos.filter((val, valIndex) => {
        return valIndex !== index
      })
      setTodos(newTodoList);
      handleSaveData(newTodoList)
  }

  function handleSaveData(currTodos) {
    localStorage.setItem('todo-app', JSON.stringify({ todos: currTodos }))
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem('todo-app')) { return }
    let db = JSON.parse(localStorage.getItem('todo-app'))
    setTodos(db.todos)
  }, [])

  return (
    <>
      <Header todos={todos}/>
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos} />
      <TodoList handleInCompleteTodo={handleInCompleteTodo} handleCompleteTodo={handleCompleteTodo} handleDeleteTodo={handleDeleteTodo} todos={todos} selectedTab={selectedTab}/>
      <TodoInput handleAddTodo={handleAddTodo}/>
    </>
  )
}

export default App