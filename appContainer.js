import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ActionCreators } from './src/actions'
import Button from './src/models/Button';

class AppContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Button {...this.props} />
        )
    }
}

function mapStateToProps(state) {
    return {
        container: state,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);