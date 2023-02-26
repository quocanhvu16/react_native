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
import {useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const TabNavBar = props => {
  const navigation = useNavigation();
  const [elevationHome, setElevationHome] = useState(0);
  const [iconHomeColor, setIconHomeColor] = useState('#1c1a23');
  const [elevationSetting, setElevationSetting] = useState(0);
  const [iconSettingColor, setIconSettingColor] = useState('#1c1a23');
  useEffect(() => {
    if (props.home) {
      setIconHomeColor('#1f86e4');
      setElevationHome(15);
    } else {
      setIconHomeColor('#7f8489');
      setElevationHome(0);
    }
    if (props.setting) {
      setIconSettingColor('#1f86e4');
      setElevationSetting(15);
    } else {
      setElevationSetting(0);
      setIconSettingColor('#7f8489');
    }
  }, [props]);
  const showMenu = useSelector(state => state.showMenu);
  return (
    <LinearGradient
      colors={['#16171b', '#353a40']}
      style={{
        width: width,
        height: 80,
        display: 'flex',
        flexDirection: 'row',
        borderBottomLeftRadius: showMenu === true ? 20 : 0,
        position: 'relative',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        elevation: 20,
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.8,
        shadowRadius: 10,
        shadowColor: 'white',
        // borderWidth:1,
        // borderColor:'white'
      }}>
      <LinearGradient
        colors={['#16171b', '#16171b', '#16171b', '#16171b', '#353a40']}
        style={{
          position: 'absolute',
          width: 70,
          height: 70,
          // backgroundColor: '#c4c4c4',
          top: -35,
          left: width / 2 - 35,
          borderRadius: 35,
        }}
      />
      <LinearGradient
        colors={['#1f86e4', '#78d0ff']}
        style={{
          position: 'absolute',
          width: 60,
          height: 60,
          backgroundColor: '#c4c4c4',
          top: -30,
          left: width / 2 - 30,
          borderRadius: 30,
          elevation: 15,
          shadowColor: '#19a3db',
          shadowOffset: {width: 0, height: 0},
          shadowOpacity: 0.5,
          shadowRadius: 10,
        }}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Dashboard');
        }}
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          postion: 'relative',
        }}>
        <View
          style={{
            width: 40,
            height: 40,
            position: 'absolute',
            borderWidth: 0,
            borderRadius: 20,
            elevation: elevationHome,
            shadowColor: '#19a3db',
            shadowOpacity: 0.8,
            shadowRadius: 10,
          }}
        />
        <Icon
          name="home-outline"
          color={iconHomeColor}
          size={25}
          style={{zIndex: 1}}
        />
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Setting');
        }}
        style={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          postion: 'relative',
        }}>
        <View
          style={{
            width: 40,
            height: 40,
            position: 'absolute',
            borderWidth: 0,
            borderRadius: 20,
            elevation: elevationSetting,
            shadowColor: '#19a3db',
            shadowOpacity: 0.8,
            shadowRadius: 10,
          }}
        />
        <Icon
          name="settings-outline"
          color={iconSettingColor}
          size={25}
          style={{zIndex: 1}}
        />
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default TabNavBar;
