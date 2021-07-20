import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const customTabSlice = createSlice({
    name: "@authUser",
    initialState: {
        currentIndexTab: 2
    },
    reducers: {
        navigationIndexTab: (draft, action: PayloadAction<number>) => {
            draft.currentIndexTab = action.payload
        }
    }
});

const { reducer, actions } = customTabSlice;

export const { navigationIndexTab } = actions;

export const customTabReducer = reducer;