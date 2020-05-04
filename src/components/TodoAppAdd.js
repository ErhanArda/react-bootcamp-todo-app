import React, { Component } from 'react';
import { Button, TextField, Checkbox, FormLabel, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { connect } from "react-redux"
import { addTodo } from "../redux/actions"
class TodoAppAdd extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: "",
            description: "",
            completed: false,
            priority: "high",
            //dueDate: ""
        }
    }
    render() {
        return (
            <div>
                <form className="todo-form" onSubmit={(e) => {
                    e.preventDefault();
                    //const newContent = this.state.value;
                    
                    const newTodoObject = {
                        title:this.state.title,
                        description: this.state.description,
                        completed: this.state.completed,
                        priority: this.state.priority ,
                    
                    }
                    this.props.addTodo(newTodoObject)
                    this.setState({

                        title: "",
                        description: "",
                        completed: false,
                        priority: "high",
                        dueDate: ""
                    })
                }}>
                    <div>
                        <TextField type="text"
                            placeholder="Add Todo Title"
                            label="Title"
                            value={this.state.title}
                            onChange={(e) => {
                                this.setState({
                                    title: e.target.value,
                                })
                            }}
                        />
                    </div>
                    <div>
                        <TextField type="text"
                            placeholder="Add Todo Description"
                            label="Description"
                            value={this.state.description}
                            onChange={(e) => {
                                this.setState({
                                    description: e.target.value,
                                })
                            }}
                        />
                    </div>
                    <div>
                        <Checkbox type="checkbox"
                            name="completed"
                            id="completed-todo-field"
                            value={this.state.completed}
                            onChange={(e) => {
                                this.setState({
                                    completed: e.target.value,
                                })
                            }}
                        />
                        <FormLabel htmlFor="completed-todo-field">Completed</FormLabel>
                    </div>
                    <div>
                        <Checkbox type="checkbox"
                            name="completed"
                            id="completed-todo-field"
                            value={this.state.completed}
                            onChange={(e) => {
                                this.setState({
                                    completed: e.target.value,
                                })
                            }}
                        />
                        <FormLabel htmlFor="uncompleted-todo-field">Not Completed</FormLabel>
                    </div>
                    <div>
                        <FormControl>
                            <Select value= { this.state.priority}
                            onChange = {(e)=> {
                                this.setState({
                                    priority: e.target.value
                                })
                            }}
                            >
                                <MenuItem value="high">High</MenuItem>
                                <MenuItem value="medium">Medium</MenuItem>
                                <MenuItem value="low">Low</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <Button disabled={!this.state.title} type="submit">Submit</Button>
                </form>
            </div>
        );
    }
}
const mapDispatchToProps = {
    addTodo: addTodo
}

export default connect(null, mapDispatchToProps)(TodoAppAdd);

