/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import { Button, TextField, Checkbox, FormLabel, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { connect } from "react-redux"
import { addTodo } from "../redux/actions"
import { Formik } from "formik"
import * as Yup from "yup"

const todoAddValidation = Yup.object().shape({
    title: Yup.string().required("You can't add todo without entering title!").max(25, "You can't enter more than 25 characters"),
    description: Yup.string().min(5,"You can't enter less than 5 characters").max(50, "You can't enter more than 50 characters")

});



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
                    validationSchema={todoAddValidation}
                    onSubmit={(values, { resetForm }) => {
                        this.props.addTodo(values)
                        resetForm({})
                    }}
                >
                    {({
                        values,
                        errors,
                        handleChange,
                        handleSubmit,
                        setFieldValue,
                        isSubmitting
                    }) => {
                        console.log("errors", errors)
                        return (
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
                                {
                                    errors.title && <div><h4 style={{ color: "red" }}>{errors.title}</h4></div>
                                }
                                <div>
                                    <TextField type="text"
                                        placeholder="Add Todo Description"
                                        label="Description"
                                        name="description"
                                        value={values.description}
                                        onChange={handleChange}
                                    />
                                </div>
                                {
                                    errors.description && <div><h4 style={{color:"red"}}>{errors.description}</h4></div>
                                }
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
                                <Button type="submit" style={{
                                    opacity: Object.keys(errors).length > 0 ? "0.2" : "1" 
                                }}>Submit</Button>
                                {/* <Button disabled={!values.title} type="submit">Submit</Button> */}
                            </form>
                        )
                    }}
                </Formik>
            </div >
        );
    }
}
const mapDispatchToProps = {
    addTodo: addTodo
}

export default connect(null, mapDispatchToProps)(TodoAppAdd);

