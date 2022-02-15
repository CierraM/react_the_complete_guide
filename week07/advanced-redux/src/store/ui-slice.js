import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        cartIsVisible: false,
        notification: null
    },
    
    //reducers: map of cases that can be handled
    reducers: {
        toggle(state) {
            //only use mutating code when using redux toolkit
            state.cartIsVisible = !state.cartIsVisible;
        },
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            }
        },
    }
})

export const uiActions = uiSlice.actions;

export default uiSlice;