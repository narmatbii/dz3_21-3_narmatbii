import React from 'react'
import ToDoCard from '../TodoCard/ToDoCard.jsx'

const List = ({ 
  list, 
  handleDone,
   handleDelete,
   handleChangeCurrent,
  }) => {
  return (
    <>
    {list.map(todo => <ToDoCard 
    key={todo.id} 
    todo={todo} 
    handleChangeCurrent={handleChangeCurrent}
    handleDone={handleDone}
    handleDelete={handleDelete}
    />)}
    </>
  )
}

export default List