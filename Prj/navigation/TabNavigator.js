import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/user/dashboard';
import Profile from '../screens/user/Profile';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Nhà"
        component={Dashboard}
        options={{
          tabBarActiveTintColor: 'red',
        }}
      />
      <Tab.Screen
        name="Tài khoản"
        component={Profile}
        options={{tabBarActiveTintColor: 'red'}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
