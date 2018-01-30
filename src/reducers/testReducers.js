import createreducer from "../lib/createreducer";
import * as types from '../actions/types';
import createReducer from "../lib/createreducer";

export const addedTeam = createreducer({}, {
    [types.TEST_FIREBASE](state, action) {
        return {
            ...state,
            team: action.text
        }
    }
});