import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    StyleSheet
} from 'react-native';

import Table from './Table';
import { FOUR } from '../Constsnts';
import db from '../lib/db';

export default class MyButons extends Component {

    render() {
        
        let myOver = this.props.currentInnings ? this.props.currentInnings.currentOver : null;
        let bowler = this.props.currentInnings ? this.props.currentInnings.bowler : null;

        return (
            <View style={{ paddingTop: 100 }}>
                
                {
                    this.props.currentInnings && this.props.currentInnings.gameId ?
                    null
                    :
                    <TouchableHighlight style={{ alignSelf: 'center', width: '80%', backgroundColor: 'red', padding: 10, borderRadius: 5 }} 
                    onPress={() => {
                        this.props.startInnings("Nikhil_Game_Id", "Nikhil Kulkarni", "Bhargav Kulkarni", "very fast bowler");
                    }}>
                        <Text style={{ color: '#FFF', fontWeight: 'bold', alignSelf: 'center', alignContent: 'center', fontSize: 15 }}>Start Innings</Text>
                    </TouchableHighlight>

                }

                <StartOver {...this.props} />

                <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>

                    <TouchableHighlight style={styles.element} onPress={() => {
                        this.props.updateScore(1);
                    }}>
                        <Text>1</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.element} onPress={() => {
                        this.props.updateScore(2);
                    }}>
                        <Text>2</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.element} onPress={() => {
                        this.props.updateScore(3);
                    }}>
                        <Text>3</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.element}
                        onPress={() => {
                            this.props.startNewOver(this.props.currentInnings, bowler, FOUR);
                    }}>
                        <Text>4</Text>
                    </TouchableHighlight>

                </View>

                <TouchableHighlight style={{ alignSelf: 'center', width: '80%', backgroundColor: 'red', marginTop: 30, padding: 10, borderRadius: 5 }} onPress={() => {
                    db.remove({}, { multi: true }, function (err, numRemoved) {
                    });
                }}>
                    <Text style={{ color: '#FFF', fontWeight: 'bold', alignSelf: 'center', alignContent: 'center', fontSize: 15 }}>Clean Database</Text>
                </TouchableHighlight>

            </View>
        )
    }
}

const StartOver = (props) => (
    <View>
        {
            props.currentInnings && props.currentInnings.currentOver && props.currentInnings.currentOver.legalDeliveries >= 0 ?
                
                null
                
                :
        
                <TouchableHighlight style={{ alignSelf: 'center', width: '80%', backgroundColor: 'orange', marginTop: 20, padding: 10, borderRadius: 5 }} onPress={() => {
                    props.startNewOver(props.currentInnings, "very fast bowler");
                }}>
                    <Text style={{ color: '#FFF', fontWeight: 'bold', alignSelf: 'center', alignContent: 'center', fontSize: 15 }}>Start New Over</Text>
                </TouchableHighlight >
        }
        </View>
)

var styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
    },

    element: {
        padding: 20,
        marginTop: 20,
        marginLeft: 15,
        backgroundColor: '#CCC',
    }
});
