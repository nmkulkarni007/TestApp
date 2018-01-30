import * as actions from '../actions/index';

const uuid = require('uuid/v4');

var Datastore = require('react-native-local-mongodb')
var db = new Datastore({ filename: 'asyncStorageKey', autoload: true });

export function addMessage(text) {

    return function (dispatch) {
        // Find all documents in the collection 
        db.find({}, function (err, docs) {
            dispatch(fireBaseTest(docs));
        });
    }
};

export function addTeam(teamName) {

    console.log("here adding team");
    let team = {
        teamId: uuid(),
        teamName: teamName,
        players: []
    }

    db.insert(team, function (err, addedTeam) {
        dispatch(actions.addTeam(addedTeam));
    });
}