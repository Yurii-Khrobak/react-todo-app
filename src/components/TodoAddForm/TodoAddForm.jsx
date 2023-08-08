import React from 'react'
import MyInput from '../MyInput/MyInput.jsx'
import MyButton from '../MyButton/MyButton.jsx'
import cl from './TodoAddForm.module.css'

const TodoAddForm = ({todo, setTodo, addTodo}) => {
  return (
    <form className={cl.todoAddForm} onSubmit={e => addTodo(e)}>
      <MyInput type='text' placeholder='Title...' value={todo.title} onChange={e => setTodo({...todo, title: e.target.value})}/>
      <MyButton>Add</MyButton>
    </form>
  )
}

export default TodoAddForm
