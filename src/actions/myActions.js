
import * as types from './types';
import { TEST_ACTION_SUCCESS } from './types';
var Datastore = require('react-native-local-mongodb')
var db = new Datastore({ filename: 'asyncStorageKey', autoload: true });

export const myAction = () => {
    return function (dispatch) {
        dispatch(loading());
        
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => { dispatch(createGame(responseJson.movies)); })
            .catch((error) => { console.error(error);
            });
    }
}

export const loading = () => {
    return {
        type: types.TEST_ACTION_LOADING,       
    };
};

export const createGame = (json) => {
    return {
        type: types.TEST_ACTION,
        json
    };
};

export const fireBaseTest = (text) => {

    return {
        type: types.TEST_FIREBASE,
        text
    };
};

export function addMessage(text) {
    
    return function (dispatch) {
        // Find all documents in the collection 
        db.find({}, function (err, docs) {
            dispatch(fireBaseTest(docs));
        });
        
    }

   

};
