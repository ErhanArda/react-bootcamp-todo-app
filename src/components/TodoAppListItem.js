import React from 'react'
import { connect } from "react-redux"
import { toggleTodo, deleteTodo } from "../redux/actions"
import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const TodoAppListItem = ({ title,description,priority, id, completed, toggleTodo, deleteTodo }) => {
    return (
<ListItem style={{ display: "center",flexDirection: "row",alignItems: "center",justifyContent: "center" }}>
            <Checkbox
                onClick={() => toggleTodo(id)} />

            <Typography style={{
                textDecoration: completed ? "line-through" : "initial"
            }}>
                {title}
            </Typography>
            <IconButton onClick={() => deleteTodo(id)}>
                <CloseIcon />
            </IconButton>
        </ListItem>
    )
}
const mapDispatchToProps = {
    toggleTodo: toggleTodo,
    deleteTodo: deleteTodo
}

export default connect(null, mapDispatchToProps)(TodoAppListItem)
