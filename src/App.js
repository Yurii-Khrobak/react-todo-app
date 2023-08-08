import React, {useState, useEffect} from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import TodoList from './components/TodoList/TodoList.jsx'
import TodoAddForm from './components/TodoAddForm/TodoAddForm.jsx'
import MyModal from './components/MyModal/MyModal.jsx'

const App = () => {
  const [todo, setTodo] = useState({title: ''})
  const [todos, setTodos] = useState([])

  const [visible, setVisible] = useState(false)

  const initialState = [{id: 1, title: 'Your todo in our app!', completed: true}]

  useEffect(() => {
    setTodos([...initialState])
  }, [])

  const removeTodo = (id) => {
    setTodos(todos.filter(t => t.id !== id))
  }

  const changeCompleted = (todo) => {
    setTodos([...todos.filter(t => t.id !== todo.id), {...todo, completed: !todo.completed}])
  }

  const addTodo = (e) => {
    e.preventDefault()
    setTodos([...todos, {...todo, id: Date.now(), completed: false}])
    setTodo({title: ''})
    setVisible(false)
  }

  return (
    <>
      <Navbar setVisible={setVisible}/>
      <div className='container'>
	<MyModal visible={visible} setVisible={setVisible}>
	  <TodoAddForm todo={todo} setTodo={setTodo} addTodo={addTodo}/>
	</MyModal>
        <TodoList todos={todos} removeTodo={removeTodo} changeCompleted={changeCompleted}/>
      </div>
    </>
  )
}

export default App
