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
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const TabNavBar = props => {
  const color = useSelector(state => state.color);
  const navigation = useNavigation();
  const [elevationHome, setElevationHome] = useState(0);
  const [iconHomeColor, setIconHomeColor] = useState('#1c1a23');
  const [elevationSetting, setElevationSetting] = useState(0);
  const [iconSettingColor, setIconSettingColor] = useState('#1c1a23');
  useEffect(() => {
    if (props.home) {
      setIconHomeColor(color.iconActive);
      setElevationHome(15);
    } else {
      setIconHomeColor(color.iconUnActive);
      setElevationHome(0);
    }
    if (props.setting) {
      setIconSettingColor(color.iconActive);
      setElevationSetting(15);
    } else {
      setElevationSetting(0);
      setIconSettingColor(color.iconUnActive);
    }
  }, [props]);
  const showMenu = useSelector(state => state.showMenu);
  return (
    <LinearGradient
      colors={[color.backgroundColorNavbar1, color.backgroundColorNavbar1]}
      style={{
        width: width,
        height: 80,
        display: 'flex',
        flexDirection: 'row',
        borderBottomLeftRadius: showMenu === true ? 20 : 0,
        position: 'absolute',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        elevation: 20,
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.8,
        shadowRadius: 10,
        shadowColor: color.borderColor,
        bottom: 0,
        // borderWidth:1,
        // borderColor:color.borderColor
      }}>
      <LinearGradient
        colors={[
          color.backgroundColorNavbar2,
          color.backgroundColorNavbar2,
          color.backgroundColorNavbar2,
          color.backgroundColorNavbar2,
          color.backgroundColorNavbar2,
        ]}
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
      <TouchableOpacity
        style={{
          position: 'absolute',
          width: 60,
          height: 60,
          // backgroundColor: '#c4c4c4',
          top: -30,
          left: width / 2 - 30,
          borderRadius: 30,
          elevation: 15,
          shadowColor: color.shadowColorNavbar,
          shadowOffset: {width: 0, height: 0},
          shadowOpacity: 0.5,
          shadowRadius: 30,
        }}>
        <LinearGradient
          colors={[color.iconBackgroundColor1, color.iconBackgroundColor2]}
          style={{
            position: 'absolute',
            width: 60,
            height: 60,
            backgroundColor: '#c4c4c4',
            borderRadius: 30,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Material name="pencil-outline" size={30} color={color.iconColor} />
        </LinearGradient>
      </TouchableOpacity>
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
            shadowColor: color.shadowColorNavbar,
            shadowOpacity: 0.5,
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
            shadowColor: color.shadowColorNavbar,
            shadowOpacity: 0.1,
            shadowRadius: 10,
            shadowOffset: {
              width: 10,
              height: 10,
            },
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
