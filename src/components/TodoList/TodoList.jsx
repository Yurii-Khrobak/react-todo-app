import React from 'react'
import TodoItem from '../TodoItem/TodoItem.jsx'
import cl from './TodoList.module.css'

const TodoList = ({todos, removeTodo, changeCompleted}) => {
  if (!todos) {
    return (
      <h2 className={cl.warning}>
	You doesnt have todos!
      </h2>
    )
  }
	
  return (
    <div className={cl.todoList}>
      {todos?.map(todo =>
        <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} changeCompleted={changeCompleted}/>
      )}
    </div>
  )
}

export default TodoList
