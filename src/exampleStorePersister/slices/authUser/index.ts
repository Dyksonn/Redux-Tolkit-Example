import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type userPF = {
    name: string;
    access_token: string;
    is_clt: boolean;
    approved: boolean | any;
}

const authUserSlice = createSlice({
    name: "@authUser",
    initialState: {
        name: '',
        access_token: '',
        is_clt: false,
        approved: null,
    },
    reducers: {
        signInSuccess: (draft, action: PayloadAction<userPF>) => {
            draft.name = action.payload.name;
            draft.access_token = action.payload.access_token;
            draft.is_clt = action.payload.is_clt;
            draft.approved = action.payload.approved;
        },
        logout: (draft) => {
            draft.name = '',
            draft.access_token = '',
            draft.is_clt = false,
            draft.approved = null
        }
    }
});

const { reducer, actions } = authUserSlice;

export const { signInSuccess, logout } = actions;

export const authUserReducer = reducer;