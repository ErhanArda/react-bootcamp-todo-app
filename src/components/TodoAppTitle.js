import React from 'react'
import Typography from "@material-ui/core/Typography";
import propTypes from "prop-types"

const TodoAppTitle = ({ title }) => {
    return (
        <div>
            <Typography style={{ padding: 16 }} variant="h1">
                {title}
            </Typography>
        </div>
    )
}
TodoAppTitle.prototype = {
    title: propTypes.string.isRequired 
}

export default TodoAppTitle
