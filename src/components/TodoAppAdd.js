/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import { Button, TextField, Checkbox, FormLabel, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { connect } from "react-redux"
import { addTodo } from "../redux/actions"
import { Formik } from "formik"
class TodoAppAdd extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Formik
                    initialValues={{
                        title: "",
                        description: "",
                        completed: false,
                        priority: "high",
                    }}
                    onSubmit={(values,{resetForm}) => {
                        this.props.addTodo(values)
                        resetForm({})
                    }}
                >
                    {({
                        values,
                        handleChange,
                        handleSubmit,
                        setFieldValue,
                        isSubmitting
                    }) => (
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <TextField type="text"
                                        name="title"
                                        placeholder="Add Todo Title"
                                        label="Title"
                                        value={values.title}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <TextField type="text"
                                        placeholder="Add Todo Description"
                                        label="Description"
                                        name="description"
                                        value={values.description}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <Checkbox type="checkbox"
                                        name="completed"
                                        id="completed-todo-field"
                                        value={values.completed}
                                        checked={values.completed}
                                        onChange={() => { setFieldValue("completed", true) }}
                                    />
                                    <FormLabel htmlFor="completed-todo-field">Completed</FormLabel>
                                </div>
                                <div>
                                    <Checkbox type="checkbox"
                                        name="completed"
                                        id="completed-todo-field"
                                        value={values.completed}
                                        checked={!values.completed}
                                        onChange={() => { setFieldValue("completed", false) }}
                                    />
                                    <FormLabel htmlFor="uncompleted-todo-field">Not Completed</FormLabel>
                                </div>
                                <div>
                                    <FormControl>
                                        <Select name="priority"
                                            value={values.priority}
                                            onChange={handleChange}
                                        >
                                            <MenuItem value="high">High</MenuItem>
                                            <MenuItem value="medium">Medium</MenuItem>
                                            <MenuItem value="low">Low</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                <Button disabled={!values.title} type="submit">Submit</Button>
                            </form>
                        )}
                </Formik>
            </div >
        );
    }
}
const mapDispatchToProps = {
    addTodo: addTodo
}

export default connect(null, mapDispatchToProps)(TodoAppAdd);

