import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
    HomeScreen,
    DetailsScreen,
    ProfileScreen,
    SettingsScreen,
  } from '../screens/HomeScreen';
  import {myTab} from './myTab'
  
export const MyDrawer = createDrawerNavigator();
export const MyDrawerNav=()=>{
    return (
        <MyDrawer.Navigator>
        <MyDrawer.Screen name="Home" component={myTab} /> 
        <MyDrawer.Screen name="Details" component={DetailsScreen} />
        <MyDrawer.Screen name="Profile" component={ProfileScreen} options={{ title: 'My new profile title' }}/>
        <MyDrawer.Screen name="Settings" component={SettingsScreen} />
        </MyDrawer.Navigator>
      );
};