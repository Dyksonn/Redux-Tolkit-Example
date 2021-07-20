import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const notifications = createSlice({
    name: "@notifications",
    initialState: {
        pushToken: '',
        countNotifications: 0,
    },
    reducers: {
        getTokenDevice: (draft, action: PayloadAction<string>) => {
            draft.pushToken = action.payload
        }
    }
});

const { reducer, actions } = notifications;

export const { getTokenDevice } = actions;

export const notificationReducer = reducer;