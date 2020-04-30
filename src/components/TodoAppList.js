import React from 'react'
import TodoAppListItem from "./TodoAppListItem"
import {connect} from "react-redux"

const TodoAppList = (props) => {
    return (
        <div>
            {
                props.todos.map((todo)=>{
                    return <TodoAppListItem {...todo}/>
                })
            }
        </div> 
    )
}
const mapStateToProps = (state) =>{
    return {
        todos: state.todoReducer
    }
}

export default connect(mapStateToProps)(TodoAppList)
