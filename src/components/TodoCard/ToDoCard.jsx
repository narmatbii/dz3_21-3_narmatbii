import React, { useState } from 'react'
import classes from './todocard.module.css'
import Button from '../Button/Button.jsx';
import ButtonAction from '../ButtonAction/ButtonAction.jsx'
import Input from '../Input/Input.jsx';
const ToDoCard = ({ 
  todo, 
  handleDone, 
  handleDelete,

}) => {
 const [ newTitle , setNewTitle ] = useState(todo.title);
 const handleSetTitle = (event) => {
  setNewTitle(event.target.value)
 }

   return (
    <div className={classes.wrapperCard}>
         <div className={todo.completed ? classes['todoCard'] + " " + classes.done : classes.todoCard }>
        <h3>{todo.title}</h3>
        <div className={classes.actionButtons}>
        <ButtonAction handleClick={handleDone} todo={todo}>Done</ButtonAction>
        <ButtonAction type={'delete'} handleClick={handleDelete} 
        todo={todo}>Delete</ButtonAction>
        </div>
    </div>
    </div>
  )
}

export default ToDoCard;