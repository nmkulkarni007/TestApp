import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';

import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon, Divider } from 'react-native-elements';

const Feed = () => (
  <View>
  <Text style={{ paddingTop: 100 }}>This is Feed</Text>
  
    <Divider style={{ backgroundColor: 'blue' }} />
  </View>  

);

const UserDetail = () => (
  <Text style={{ paddingTop: 100 }}>This is Feed</Text>
);

export const FeedStack = StackNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: {
      headerMode: 'none',
    },
  },
  Details: {
    screen: UserDetail,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`,
    }),
  },
});

export default Tabs = TabNavigator({
  Feed: {
    screen: FeedStack,
    navigationOptions: {
      tabBarLabel: 'Feed',
      tabBarIcon: ({ tintColor }) =>
        <Icon name="activity" size={30} color={tintColor} />,
    },
  },
}, {
    lazyLoad: true,
    animationEnabled: false,
    headerMode: 'none',
    tabBarOptions: {
      headerMode: 'none',
      activeTintColor: '#3b5998',
      inactiveTintColor: '#cccccc',
      showIcon: true,
      showLabel: false,
      iconStyle: {
        width: 35,
        height: 30
      },
      
      style: {
        backgroundColor: 'white'
      },
      headerMode: 'none',
      pressColor: '#d5dcea',
      indicatorStyle: {
        backgroundColor: 'white'
      }
    }
  });
