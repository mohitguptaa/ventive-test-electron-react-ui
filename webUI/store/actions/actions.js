import { DISABLE_WINDOW, ADD_DOCUMENTS } from '../actionTypes';

export const disableWindow = (disable) => ({
    type: DISABLE_WINDOW,
    payload: {
        disable,
    },
});

export const addDocuments = (files) => ({
    type: ADD_DOCUMENTS,
    payload: {
        files,
    },
});
