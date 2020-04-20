import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  HomeScreen,
  DetailsScreen,
  ProfileScreen,
  SettingsScreen,
} from '../screens/HomeScreen';
import {MyDrawerNav} from './MyDrawer'

const Tab = createMaterialTopTabNavigator();

export const MyTabs = () => {
  return (
    <Tab.Navigator tabBarOptions={{activeTintColor: 'red', activeBackgroundColor:'#987226' }} >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        
      />
      <Tab.Screen name="Details" component={DetailsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};
