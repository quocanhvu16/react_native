import React, {useEffect, useLayoutEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/user/dashboard';
import Notification from '../screens/user/Notification';
//import DrawerNavigator from './DrawerNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, Text, Alert, BackHandler} from 'react-native';
import Profile from '../screens/user/Profile';
import {useNavigation} from "@react-navigation/native";

const Tab = createBottomTabNavigator();
const BottomTabNavigator = props => {
    const navigation = useNavigation();
  useEffect(() => {
    if (props.route.name === 'Dashboard') {
      console.log(1);
      const backAction = () => {
        Alert.alert('Đăng xuất!', 'Bạn có chắc chắn muốn đăng xuất?', [
          {
            text: 'KHÔNG',
            onPress: () => null,
            style: 'cancel',
          },
          {text: 'CÓ', onPress: () => navigation.navigate('SignIn')},
        ]);
        return true;
      };
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
      );
      return () => backHandler.remove();
    }
  }, [props.route]);
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
            return (
              <View onPress>
                <Icon name={iconName} color={color} size={size} />
                <View
                  style={{
                    backgroundColor: 'red',
                    position: 'absolute',
                    borderRadius: 10,
                    width: 15,
                    height: 15,
                    justifyContent: 'center',
                    alignSelf: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                    bottom: 17,
                    left: 20,
                  }}>
                  <Text style={{fontSize: 10, color: 'white'}}>1</Text>
                </View>
              </View>
            );
          },
        })}
      />
      <Tab.Screen
        name="Cài đặt"
        component={Profile}
        options={({route}) => ({
          tabBarActiveTintColor: 'red',
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let rn = route.name;
            if (rn === 'Cài đặt') {
              iconName = focused ? 'settings' : 'settings-outline';
            }
            return <Icon name={iconName} color={color} size={size} />;
          },
        })}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
