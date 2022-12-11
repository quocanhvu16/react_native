import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignUp from '../screens/user/signUp';
import SignIn from '../screens/user/signIn';
import BottomTabNavigator from './TabNavigator';
import DrawerNavigator from './DrawerNavigator';
const Stack = createNativeStackNavigator();
import LivingRoom from '../screens/user/livingroom';
import Kitchen from '../screens/user/kitchen';
import BedRoom from '../screens/user/bedroom';
import Ad_Dashboard from '../screens/admin/ad_dashboard';
import Ad_Home from '../screens/admin/ad_home';
import Ad_Room from '../screens/admin/ad_room';
const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Dashboard" component={BottomTabNavigator} />
      <Stack.Screen name="Living Room" component={LivingRoom} />
      <Stack.Screen name="Kitchen" component={Kitchen} />
      <Stack.Screen name="Bed Room" component={BedRoom} />
      <Stack.Screen name="Ad_Dasboard" component={Ad_Dashboard} />
      <Stack.Screen name="Ad_Home" component={Ad_Home} />
      <Stack.Screen name="Ad_Room" component={Ad_Room} />
    </Stack.Navigator>
  );
};

export {MainStackNavigator};
