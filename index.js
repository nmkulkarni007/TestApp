import React from 'react';

import { AppRegistry } from 'react-native';

import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import thunk from 'redux-thunk'

import reducer from './src/reducers';

import AppContainer from './appContainer';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

function configureStore(initialState) {
    const enhancer = compose(
        applyMiddleware(
            thunk, // lets us dispatch() functions
            loggerMiddleware,
        ),
    );
    return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});

const App = () => (
    <Provider store={store}>
        <AppContainer />
    </Provider>
)

AppRegistry.registerComponent('TestApp', () => App);
