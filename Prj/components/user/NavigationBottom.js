import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';

import Dashboard from '../../screens/user/dashboard';
import Profile from '../../screens/user/Profile';
import Notification from '../../screens/user/Notification';

const NavigationBottom = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName={Dashboard}
      tabBar={{
        activeTintColor: '#F14506',
        inactiveTintColor: '#000',
        style: {
          backgroundColor: '#fff',
          borderTopColor: 'rgba(225,225,225,0.2)',
        },
      }}>
      <Tab.Screen
        name={Dashboard}
        options={{
          tile: 'Nhà',
          tabBarIcon: ({color, size}) => (
            <Icon name={home} color={color} size={size} />
          ),
        }}
        component={Dashboard}
      />
      <Tab.Screen
        name={Notification}
        options={{
          tile: 'Thông báo',
          tabBarIcon: ({color, size}) => (
            <Icon name={notification} color={color} size={size} />
          ),
        }}
        component={Notification}
      />
      <Tab.Screen
        name={Profile}
        options={{
          tile: 'Tài khoản',
          tabBarIcon: ({color, size}) => (
            <Icon name={user} color={color} size={size} />
          ),
        }}
        component={Profile}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  btnThongbao: {
    borderRadius: Dimensions.get('window').width / 5 / 2,
    width: Dimensions.get('window').width / 5,
    height: Dimensions.get('window').width / 5,
    paddingHorizontal: 5,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',

    position: 'absolute',
    top: -30,
  },
  titleKhuyenmai: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
  },
});

export default NavigationBottom;
