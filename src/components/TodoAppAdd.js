import React, { Component } from 'react';
import { Button, TextField } from "@material-ui/core";
import { connect } from "react-redux"
import { addTodo } from "../redux/actions"
class TodoAppAdd extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: ""
        }
    }

    render() {
        return (
            <div>
                <form className="todo-form" onSubmit={(e) => {
                    e.preventDefault();
                    const newContent = this.state.value;
                    this.props.addTodo(newContent)
                    this.setState({
                        value: ""
                    })
                }}>
                    <TextField type="text"
                        placeholder="Add Todo"
                        label="Task"
                        value={this.state.value}
                        onChange={(e) => {
                            this.setState({
                                value: e.target.value,
                            })
                        }}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </div>
        );
    }
}
const mapDispatchToProps = {
    addTodo: addTodo
}

export default connect(null, mapDispatchToProps)(TodoAppAdd);

