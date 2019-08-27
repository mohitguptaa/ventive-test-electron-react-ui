import { DISABLE_WINDOW, ADD_DOCUMENTS, SELECT_DOCUMENT } from '../actionTypes';

export const disableWindow = (disable) => ({
    type: DISABLE_WINDOW,
    payload: {
        disable,
    },
});

export const addDocuments = (documents) => ({
    type: ADD_DOCUMENTS,
    payload: {
        documents,
    },
});

export const selectDocument = (document) => ({
    type: SELECT_DOCUMENT,
    payload: {
        document,
    },
});
