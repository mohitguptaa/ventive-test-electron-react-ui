import { SAMPLE_ACTION } from '../actionTypes';

const initialState = {
    state_var1: undefined,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SAMPLE_ACTION: {
            return {
                ...state,
                state_var1: action.payload.arg1,
            };
        }
        default:
            return state;
    }
}
