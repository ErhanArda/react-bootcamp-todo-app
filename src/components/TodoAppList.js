import React from 'react'
import TodoAppListItem from "./TodoAppListItem"
import {connect} from "react-redux"
import { List } from "@material-ui/core";
const TodoAppList = (props) => {
    return (
        <List>
            {
                props.todos.map((todo)=>{
                    return <TodoAppListItem {...todo}/>
                })
            }
        </List> 
    )
}
const mapStateToProps = (state) =>{
    return {
        todos: state.todoReducer
    }
}

export default connect(mapStateToProps)(TodoAppList)
