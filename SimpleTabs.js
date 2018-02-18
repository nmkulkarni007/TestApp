/**
 * @flow
 */

import React from 'react';
import { Button, Platform, ScrollView, StyleSheet, Text } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

const MyNavScreen = ({ navigation, banner }) => (
    <ScrollView style={styles.container}>
        <Text>{banner}</Text>
        <Button
            onPress={() => navigation.navigate('Home')}
            title="Go to home tab"
        />
        <Button
            onPress={() => navigation.navigate('Settings')}
            title="Go to settings tab"
        />
        <Button onPress={() => navigation.goBack(null)} title="Go back" />

        <Ionicons
            name={'md-apps'}
            size={26}
            style={{ color: '#e91e63' }}
        />

    </ScrollView>
);

const MyHomeScreen = ({ navigation }) => (
    <MyNavScreen banner="Home Tab" navigation={navigation} />
);

MyHomeScreen.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
            name={focused ? 'google-circles' : 'google-circles-extended'}
            size={26}
            style={{ color: tintColor }}
        />
    ),
};

const MyPeopleScreen = ({ navigation }) => (
    <MyNavScreen banner="People Tab" navigation={navigation} />
);

MyPeopleScreen.navigationOptions = {
    tabBarLabel: 'People',
    tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
            name={focused ? 'md-apps' : 'md-apps'}
            size={26}
            style={{ color: '#e91e63' }}
        />
    ),
};

const MyChatScreen = ({ navigation }) => (
    <MyNavScreen banner="Chat Tab" navigation={navigation} />
);

MyChatScreen.navigationOptions = {
    tabBarLabel: 'Chat',
    tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
            name={focused ? 'ios-chatboxes' : 'ios-chatboxes-outline'}
            size={26}
            style={{ color: tintColor }}
        />
    ),
};

const MySettingsScreen = ({ navigation }) => (
    <MyNavScreen banner="Settings Tab" navigation={navigation} />
);

MySettingsScreen.navigationOptions = {
    tabBarLabel: 'Settings',
    tabBarIcon: ({ tintColor, focused }) => (
        <Ionicons
            name={focused ? 'ios-settings' : 'ios-settings-outline'}
            size={26}
            style={{ color: tintColor }}
        />
    ),
};

const SimpleTabs = TabNavigator(
    {
        Home: {
            screen: MyHomeScreen,
            path: '',
        },
        People: {
            screen: MyPeopleScreen,
            path: 'cart',
        },
        Chat: {
            screen: MyChatScreen,
            path: 'chat',
        },
        Settings: {
            screen: MySettingsScreen,
            path: 'settings',
        },
    },
    {
        tabBarOptions: {
            activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff',
        },
    }
);

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 0,
    },
});

export default SimpleTabs;