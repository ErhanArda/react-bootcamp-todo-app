import React, { Component } from 'react';
import {connect} from "react-redux"
import {addTodo} from "../redux/actions"
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
                <form onSubmit={(e) => {
                    e.preventDefault();
                    const newContent = this.state.value;
                    this.props.addTodo(newContent)

                }}>
                    <input type="text"
                        placeholder="Add Todo"
                        value={this.state.value}
                        onChange={(e) => {
                            this.setState({
                                value: e.target.value,
                            })
                        }}
                    />
                    <button type="submit">Add</button>
                </form>
            </div>
        );
    }
}
const mapDispatchToProps ={
    addTodo: addTodo
}

export default connect(null,mapDispatchToProps)(TodoAppAdd);

