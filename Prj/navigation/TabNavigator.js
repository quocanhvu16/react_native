import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/user/dashboard';
import Profile from '../screens/user/Profile';
import Notification from '../screens/user/Notification';
//import DrawerNavigator from './DrawerNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const HomeName = 'Nhà';
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Nhà"
        component={Dashboard}
        options={({route}) => ({
          tabBarActiveTintColor: 'red',
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let rn = route.name;
            if (rn === 'Nhà') {
              iconName = focused ? 'home' : 'home-outline';
            }
            return <Icon name={iconName} color={color} size={size} />;
          },
        })}
      />
      <Tab.Screen
        name="Thông báo"
        component={Notification}
        options={({route}) => ({
          tabBarActiveTintColor: 'red',
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let rn = route.name;
            if (rn === 'Thông báo') {
              iconName = focused ? 'notifications' : 'notifications-outline';
            }
            return <Icon name={iconName} color={color} size={size} />;
          },
        })}
      />
      <Tab.Screen
        name="Cá nhân"
        component={Profile}
        options={({route}) => ({
          tabBarActiveTintColor: 'red',
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let rn = route.name;
            if (rn === 'Cá nhân') {
              iconName = focused ? 'person' : 'person-outline';
            }
            return <Icon name={iconName} color={color} size={size} />;
          },
        })}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
