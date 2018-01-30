import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight
} from 'react-native';

export default class AppContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <View style={{ paddingTop: 100 }}>
                <TouchableHighlight onPress={() => {
                    this.props.addMessage("Nikhil Kulkarni Testing again with react-native-firebase");
                }}>
                    <Text>Click me!!</Text>
                </TouchableHighlight>

            </View>
        )
    }
}