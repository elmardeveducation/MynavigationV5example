import {createStackNavigator} from '@react-navigation/stack';
import React, {Component} from 'react';
import {
    HomeScreen,
    DetailsScreen,
    ProfileScreen,
    SettingsScreen,
  } from '../screens/HomeScreen';
  import {MyTabs} from './myTab'
  import {MyDrawerNav} from './MyDrawer'
  
const MyRootStack = createStackNavigator();
export const MyStack=()=>{
    return (
      
        <MyRootStack.Navigator
          initialRouteName='Home'
          headerMode="screen"
        /*   headerMode="none" */
          screenOptions={{
            headerTintColor: 'white',
            headerStyle: {backgroundColor: 'tomato'},
          }}>
      <MyRootStack.Screen name="Home" component={HomeScreen} /> 
          {/* <MyRootStack.Screen name="Home" component={HomeScreen} /> */}
          <MyRootStack.Screen name="Details" component={DetailsScreen} />
          <MyRootStack.Screen name="Profile" component={ProfileScreen} options={{ title: 'My new profile title' }}
 />
          <MyRootStack.Screen name="Settings" component={SettingsScreen} />
        </MyRootStack.Navigator>
      );
    };

