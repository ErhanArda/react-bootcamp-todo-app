import React from 'react'
import TodoAppTitle from './TodoAppTitle'
import TodoAppAdd from './TodoAppAdd'

const TodoAppHeader = () => {
    return (
        <div>
            <TodoAppTitle title="React Redux Todo"/>
            <TodoAppAdd />
        </div>
    )
}

export default TodoAppHeader
