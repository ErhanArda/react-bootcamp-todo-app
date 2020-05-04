import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, SHOW_NOTIFICATION } from "./actionTypes"

export const addTodo = (content) => {
    //before thunk
    // return {
    //     type: ADD_TODO,
    //     payload: content
    // }
    return (dispatch) => {
        dispatch({
            type: ADD_TODO,
            payload: content
        });
        dispatch({
            type: SHOW_NOTIFICATION,
            payload: `${content} added`
        })
    }
}
export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: id
    }
}

export const toggleTodo = (id) => {
    return {
        type: TOGGLE_TODO,
        payload: id
    }
}
