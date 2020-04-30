import React from 'react'
import { connect } from "react-redux"
import { toggleTodo,deleteTodo } from "../redux/actions"

const TodoAppListItem = ({ content, id, completed, toggleTodo,deleteTodo }) => {
    return (
        <div>
            <span style={{
            textDecoration: completed ? "line-through" : "initial"
        }}
            onClick={() => toggleTodo(id)}
        >
            {content}
            
        </span>
            <button onClick={()=>deleteTodo(id)}>DELETE</button>
        </div>   
    )
}
const mapDispatchToProps = {
    toggleTodo: toggleTodo,
    deleteTodo: deleteTodo
}

export default connect(null, mapDispatchToProps)(TodoAppListItem)
