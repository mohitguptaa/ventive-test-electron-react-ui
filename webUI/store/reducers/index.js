import { DISABLE_WINDOW, ADD_DOCUMENTS, SELECT_DOCUMENT } from '../actionTypes';

const initialState = {
    disableWindow: false,
    documents: {},
    selectedDocument: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case DISABLE_WINDOW: {
            return {
                ...state,
                disableWindow: action.payload.disable,
            };
        }
        case ADD_DOCUMENTS: {
            const documents = Object.values(action.payload.documents);
            const documentsToAdd = documents.map((document) => ({
                [document.name.trim().replace(' ', '')]: document,
            }));

            return {
                ...state,
                documents: Object.assign(state.documents, ...documentsToAdd),
            };
        }
        case SELECT_DOCUMENT: {
            return {
                ...state,
                selectedDocument: action.payload.document,
            };
        }
        default:
            return state;
    }
}
