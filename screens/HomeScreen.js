import React from 'react';
import {Text, View, Button} from 'react-native';
import { BaseRouter } from '@react-navigation/native';

export const HomeScreen = ({navigation, route}) => {
  /* () => navigation.setOptions({title: 'Details'}) */
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

export const DetailsScreen = ({navigation,route}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
     <Text>DetialsScreen</Text>
     <Button
        title="Open drawer menu"
        onPress={() => navigation.openDrawer()} /* , {myvar:'i am from Details Screen'} */
      />
    </View>
  );
};
export const ProfileScreen = ({navigation, route}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>ProfileScreen</Text>
  <Text>{/* {route.params.myvar} */}</Text>
  <Button
        title="Go Back by command"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};
export const SettingsScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>SettingsScreen</Text>
    </View>
  );
};
