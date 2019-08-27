import { DISABLE_WINDOW, ADD_DOCUMENTS } from '../actionTypes';

const initialState = {
    disableWindow: false,
    documents: {},
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
            const files = Object.values(action.payload.files);
            const filesToAdd = files.map((file) => ({
                [file.name.trim().replace(' ', '')]: file,
            }));

            return {
                ...state,
                documents: Object.assign(state.documents, ...filesToAdd),
            };
        }
        default:
            return state;
    }
}
