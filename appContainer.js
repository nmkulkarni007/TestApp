import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ActionCreators } from './src/actions'
import MyButons from './src/models/Button';
import SimpleTabs from './src/SimpleTabs';

class AppContainer extends Component {

    componentDidMount() {
        this.props.fetchActiveGame("Nikhil_Game_Id");
    }


    render() {
        return (
            <View>
                <MyButons  {...this.props} />
            </View>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentInnings: state.currentInnings.innings
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);