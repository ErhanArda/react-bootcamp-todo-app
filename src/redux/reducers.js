import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, SHOW_NOTIFICATION, HIDE_NOTIFICATION } from "./actionTypes";

export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, {
                id: Math.random(),
                completed: false,
                content: action.payload
            }]
        case DELETE_TODO:
            return state.filter((todo) => todo.id !== action.payload)

        case TOGGLE_TODO:
            return state.map((todo) => {
                if (todo.id === action.payload) {
                    return { ...todo, completed: !todo.completed }
                }
                return todo
            })
        default:
            return state
    }
}


export const notificationsReducer = (state= {showNotification: false, notificationText: ""}, action) => {
    switch (action.type) {
        case SHOW_NOTIFICATION:
            return {...state, showNotification: true, notificationText: action.payload};
        case HIDE_NOTIFICATION:
            return {...state, showNotification: false, notificationText: ""};
        default:
            return state;
    }
};