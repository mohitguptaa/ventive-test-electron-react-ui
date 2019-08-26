import { SAMPLE_ACTION } from '../actionTypes';

// eslint-disable-next-line import/prefer-default-export
export const sampleAction = (arg1, arg2) => ({
    type: SAMPLE_ACTION,
    payload: {
        arg1,
        arg2,
    },
});
