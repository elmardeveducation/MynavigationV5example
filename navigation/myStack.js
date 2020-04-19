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
      {/*      <MyRootStack.Screen name="Home" component={MyTabs} />  for include tabnavigator*/}
      <MyRootStack.Screen name="Home" component={HomeScreen} />
      <MyRootStack.Screen name="Details" component={DetailsScreen} />
      <MyRootStack.Screen name="Profile" component={ProfileScreen} />
      <MyRootStack.Screen name="Settings" component={SettingsScreen} />
    </MyRootStack.Navigator>
  );
};
