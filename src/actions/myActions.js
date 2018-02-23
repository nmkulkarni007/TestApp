import { SCORE_INNINGS } from './types';
import { ON_STRIKE, FOUR, ONE, LEGALBALLS, RUNS_SCORED } from '../Constsnts';

import db from '../lib/db';


export function fetchActiveGame(_gameId) {
    return function (dispatch) {
        // Find all documents in the collection
        db.findOne({ gameId: _gameId }, function (err, payload) {
            dispatch(startInningsAction(payload));
        });
    }
}

export function startInnings(gameId, onStrike, nonStrike) {

    return function (dispatch) {
         let inningsPayload = {
            gameId: gameId,
            onStrike: onStrike,
            nonStrike: nonStrike,
            bowler: null,
            totalScore: 0,
            overs: 0,
            wickets: [],
            overs: [],
            currentOver: null
        };
        // Find all documents in the collection
        db.insert(inningsPayload, function (err, payload) {
            dispatch(startInningsAction(payload));
        });
    }
};

function startInningsAction(payload) {
    return {
        type: SCORE_INNINGS,
        payload
    };
}

export function startNewOver(innings, bowler, currentBallScore) {

    let _gameId = innings.gameId;
    let onStrike = innings.onStrike;
    let nonStrike = innings.nonStrike;

    let currentOver = innings.currentOver;
    let isOverCompleted = currentOver.legalDeliveries == 6 ? true : false;

    if (isOverCompleted) {
        let totalOvers = Array.from(innings.overs);
        totalOvers.push(currentOver);

        db.update({ gameId: _gameId }, { $set: { overs: totalOvers } },
            function (err, numReplaced) {
            dispatch(fetchActiveGame(_gameId));
        });
    }

    var payload = createNewOver(onStrike, bowler);

    if (!isOverCompleted && currentOver && currentBallScore) {

        let balls = Array.from(currentOver.deliveries);
        let currentBall = updateScoreAction(onStrike, currentBallScore, currentOver);
        
        balls.push(currentBall);
        currentOver.deliveries = balls;
        
        payload = currentOver;
    }
    
    return function (dispatch) {
        
        db.update({ gameId: _gameId }, { $set: { currentOver: payload } }, function (err, numReplaced) {
            dispatch(fetchActiveGame(_gameId));
        });
        
    }
}

function createNewOver(onStrike, bowler) {

    let payload = {
        "onStrike": onStrike,
        "bowler": bowler,
        legalDeliveries: 0,
        deliveries: []
    }

    return payload;
}

function updateScoreAction(onStrike, score, currentOver) {

    let currentBall = {
        "onStrike": onStrike,
        RUNS_SCORED: score,
    }

    let legalBall = currentOver.legalDeliveries;


    switch (score) {
        case '4':
            currentBall.FOUR = 1;
            currentOver.legalDeliveries = legalBall + 1;

            break;

        case ONE:
            break;

        default:
            break;
    }

    return currentBall;
}

