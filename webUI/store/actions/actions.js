import { DISABLE_WINDOW, ADD_DOCUMENTS, SELECT_DOCUMENT } from '../actionTypes';

/**
 * Action to disable window and add overlay
 * @param {*} disable - If true, will disable otherwise
 *                      reset.
 */
export const disableWindow = (disable) => ({
    type: DISABLE_WINDOW,
    payload: {
        disable,
    },
});

/**
 * Action to add documents to store
 * @param {*} documents - FileList to be added.
 */
export const addDocuments = (documents) => ({
    type: ADD_DOCUMENTS,
    payload: {
        documents,
    },
});

/**
 * Action to select the document
 * @param {*} document - Document to be selected.
 *                      Should be the File handle.
 */
export const selectDocument = (document) => ({
    type: SELECT_DOCUMENT,
    payload: {
        document,
    },
});
