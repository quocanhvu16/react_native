import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/user/dashboard';
import Profile from '../screens/user/Profile';
import Notification from '../screens/user/Notification';
//import DrawerNavigator from './DrawerNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Nhà"
        component={Dashboard}
        options={{
          tabBarActiveTintColor: 'red',
          tabBarIcon: ({color, size}) => {
            return <Icon name="home-outline" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Thông báo"
        component={Notification}
        options={{
          tabBarActiveTintColor: 'red',
          tabBarIcon: ({color, size}) => {
            return <Icon name="home" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Cá nhân"
        component={Profile}
        options={{
          tabBarActiveTintColor: 'red',
          tabBarIcon: ({color, size}) => {
            return <Icon name="home" color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
