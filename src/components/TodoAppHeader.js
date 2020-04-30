import React from 'react'
import TodoAppTitle from './TodoAppTitle'
import TodoAppAdd from './TodoAppAdd'

const TodoAppHeader = ({addTodo}) => {
    return (
        <div>
            <TodoAppTitle />
            <TodoAppAdd />
        </div>
    )
}

export default TodoAppHeader
