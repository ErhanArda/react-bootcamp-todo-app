import React, { Component } from 'react';
import TodoAppHeader from './TodoAppHeader'
import TodoAppList from './TodoAppList'


class TodoApp extends Component {
        // eslint-disable-next-line no-useless-constructor
        constructor(props) {
            super(props)

            // this.state = {
            //     todos: []
            // }
        }

        // addTodo = (content) => {
        //     const newTodo = {
        //         id: Math.random(),
        //         completed: false,
        //         content
        //     }
        //     this.setState({
        //         todos: [...this.state.todos, newTodo],
        //         value: ""
        //     })
        // }


        // toggleTodo = (id) => {
        //     this.setState({
        //         todos: this.state.todos.map((todo) => {
        //             if (todo.id === id) {
        //                 return { ...todo, completed: !todo.completed }
        //             }
        //             return todo
        //         })
        //     })
        // }

        render() {
            return (
                <div>
                    <TodoAppHeader />
                    <TodoAppList />
                </div>
            );
        }
    }



export default TodoApp


