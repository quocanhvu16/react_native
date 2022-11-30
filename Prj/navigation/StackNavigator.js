import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignUp from '../screens/user/signUp';
import SignIn from '../screens/user/signIn';
import BottomTabNavigator from './TabNavigator';
import DrawerNavigator from './DrawerNavigator';
const Stack = createNativeStackNavigator();
import Livingroom from '../screens/user/livingroom';
const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Dashboard" component={BottomTabNavigator} />
      <Stack.Screen name="Livingroom" component={Livingroom} />
    </Stack.Navigator>
  );
};

export {MainStackNavigator};
