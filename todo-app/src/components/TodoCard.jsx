import React from 'react'

const TodoCard = (props) => {
    const {todo, handleDeleteTodo, handleCompleteTodo, todoIndex, handleInCompleteTodo} = props;
    
    return (
        <div className='card todo-item'>
            <p>{todo.input}</p>
            <div className="todo-buttons">
                <button onClick={() => {
                    !todo.complete ? handleCompleteTodo(todoIndex) : handleInCompleteTodo(todoIndex)
                }}>
                    <h6>{!todo.complete ? `Open` : `Completed`} </h6>
                </button>
                <button onClick={() => {
                    handleDeleteTodo(todoIndex)
                }}>
                    <h6>Delete</h6>
                </button>
            </div>
        </div>
    )
}

export default TodoCard