import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, SHOW_NOTIFICATION, HIDE_NOTIFICATION } from "./actionTypes"

export const addTodo = (newTodoObject) => {
    //before thunk
    // return {
    //     type: ADD_TODO,
    //     payload: content
    // }
    return (dispatch) => {
        dispatch({
            type: ADD_TODO,
            payload: newTodoObject
        });
        dispatch(showNotification(`${newTodoObject.title} added`))
    }
}
export const deleteTodo = (id) => {
    return (dispatch) => {
        dispatch({
            type: DELETE_TODO,
            payload: id
        });
        dispatch(showNotification("Item removed"))
    }
}

export const toggleTodo = (id) => {
    return (dispatch) => {
        dispatch({
            type: TOGGLE_TODO,
            payload: id
        })
        dispatch(showNotification("toggled"))
    }
}


export const showNotification = (content) => {
    return (dispatch) => {
        dispatch({
            type: SHOW_NOTIFICATION,
            payload: content
        })
        setTimeout(() => {
            dispatch(hideNotification())
        }, 2000);
    }
}

export const hideNotification = (content) => {
    return {
        type: HIDE_NOTIFICATION,
    }
}