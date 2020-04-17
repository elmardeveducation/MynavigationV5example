import {createStackNavigator} from '@react-navigation/stack';
import React, {Component} from 'react';
import {
  HomeScreen,
  DetailsScreen,
  ProfileScreen,
  SettingsScreen,
} from '../screens/HomeScreen';
import {MyTabs} from './myTab';

const MyRootStack = createStackNavigator();
export const MyStack = () => {
  return (
    <MyRootStack.Navigator
      initialRouteName="Home"
      headerMode="screen"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {backgroundColor: 'tomato'},
      }}>
      <MyRootStack.Screen
        name="Home"
        component={MyTabs}
        options={{title: ''}}
      />
    </MyRootStack.Navigator>
  );
};
