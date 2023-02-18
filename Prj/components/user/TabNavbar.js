import React, {useLayoutEffect, useState, useEffect} from 'react';
import {
  Image,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from "react-redux";
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const TabNavBar = props => {
  const navigation = useNavigation();
  const [iconHome, setIconHome] = useState('home-outline');
  const [iconHomeColor, setIconHomeColor] = useState('#1c1a23');
  const [iconNotification, setIconNotification] = useState(
    'notifications-outline',
  );
  const [iconNotificationColor, setIconNotificationColor] = useState('#1c1a23');
  const [iconSetting, setIconSetting] = useState('settings-outline');
  const [iconSettingColor, setIconSettingColor] = useState('#1c1a23');
  useEffect(() => {
    if (props.home) {
      setIconHome('home');
      setIconHomeColor('#044293');
    } else {
      setIconHome('home-outline');
      setIconHomeColor('#1c1a23');
    }
    if (props.notification) {
      setIconNotification('notifications');
      setIconNotificationColor('#044293');
    } else {
      setIconNotification('notifications-outline');
      setIconNotificationColor('#1c1a23');
    }
    if (props.setting) {
      setIconSetting('settings');
      setIconSettingColor('#044293');
    } else {
      setIconSetting('settings-outline');
      setIconSettingColor('#1c1a23');
    }
  }, [props]);
  const showMenu = useSelector(state => state.showMenu);
  return (
    <View
      style={{
        width: width,
        height: height * 0.073,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        borderBottomLeftRadius: showMenu === true ? 20 : 0,
      }}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Dashboard');
        }}
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon name={iconHome} color={iconHomeColor} size={25} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Notification');
        }}
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon name={iconNotification} color={iconNotificationColor} size={25} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Setting');
        }}
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon name={iconSetting} color={iconSettingColor} size={25} />
      </TouchableOpacity>
    </View>
  );
};

export default TabNavBar;
