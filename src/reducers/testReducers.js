import createreducer from "../lib/createreducer";
import * as types from '../actions/types';

import createReducer from "../lib/createreducer";

export const currentInnings = createreducer({}, {
    [types.SCORE_INNINGS](state, action) {
        return {
            ...state,
            innings: action.payload
        }
    }
});