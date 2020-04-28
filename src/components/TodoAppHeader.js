import React from 'react'
import TodoAppTitle from './TodoAppTitle'
import TodoAppAdd from './TodoAppAdd'

const TodoAppHeader = ({addTodo}) => {
    return (
        <div>
            <TodoAppTitle />
            <TodoAppAdd addTodo={addTodo}/>
        </div>
    )
}

export default TodoAppHeader
