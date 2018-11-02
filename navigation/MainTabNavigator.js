import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import Schedule from '../screens/Schedule';
import Results from '../screens/Results';
import More from '../screens/More';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle'
}
    />
  ),
};

const ScheduleStack = createStackNavigator({
  Links: Schedule,
});

ScheduleStack.navigationOptions = {
  tabBarLabel: 'Schedule',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-calendar${focused ? '' : '-outline'}` : 'md-calendar'}
    />
  ),
};

const ResultsStack = createStackNavigator({
  Settings: Results,
});

ResultsStack.navigationOptions = {
  tabBarLabel: 'Results',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-trophy${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

const MoreStack = createStackNavigator({
  Links: More,
});

MoreStack.navigationOptions = {
  tabBarLabel: 'More',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-more${focused ? '' : '-outline'}` : 'md-calendar'}
    />
  ),
};
export default createBottomTabNavigator({
  HomeStack,
  ScheduleStack,
  ResultsStack,
  MoreStack,
});
