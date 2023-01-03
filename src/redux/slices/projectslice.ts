import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { ProjectState } from './types';

const initialState: ProjectState = {
    terminalOpen: true
};

export const projectSlice = createSlice({
    name: 'projectSlice',
    initialState,
    reducers: {
        reset: () => initialState,
        changeTerminalState: (state, action) => {
            state.terminalOpen = action.payload;
        },
        changeActiveScreen: (state, action) => {
            state.activeScreen = action.payload;
        }
    }
});

export const { changeTerminalState, changeActiveScreen } = projectSlice.actions;

/// Selectors. General
export const getFromProjectState = (state: RootState) => state.project;

export default projectSlice.reducer;
