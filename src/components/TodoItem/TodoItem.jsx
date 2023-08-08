import React from 'react'
import cl from './TodoItem.module.css'
import MyButton from '../MyButton/MyButton.jsx'

const TodoItem = ({todo, removeTodo, changeCompleted}) => {
  return (
    <div className={cl.todoItem}>
      <input type='checkbox' checked={todo.completed} onChange={() => changeCompleted(todo)}/>
      <h3 className='todoItem__title'>
	{todo.title}
      </h3>
      <MyButton onClick={() => removeTodo(todo.id)} style={{color: 'red', borderColor: 'red'}}>Remove</MyButton>
    </div>
  )
}

export default TodoItem
