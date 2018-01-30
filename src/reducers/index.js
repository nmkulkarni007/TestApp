import { combineReducers } from "redux";
import * as testReducers from './testReducers';

export default combineReducers(Object.assign(
    testReducers
));