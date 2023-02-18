import {useLayoutEffect, useRef, useState} from 'react';
import React from 'react';
import {
  Image,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {profile} from '../../image/image';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const NavBar = props => {
  // const showMenu1 = useSelector(state => state.showMenu);
  const [borderRadius, setBorderRadius] = useState(0);
  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const dispatch = useDispatch();
  // const [showMenu, setShowMenu] = useState(false);
  const showMenu = useSelector(state => state.showMenu);
  useLayoutEffect(() => {
    if (showMenu === true) {
      setBorderRadius(20);
    } else {
      setBorderRadius(0);
    }
  }, [showMenu]);
  const [user, setUser] = useState('');
  const [time, setTime] = useState('');
  const sendScaleValue = () => {
    props.dashboardCallback1(scaleValue);
  };
  const sendoffSetValue = () => {
    props.dashboardCallback2(offsetValue);
  };
  const checkTime = i => {
    if (i < 10) {
      i = '0' + i;
    }
    return i;
  };
  setInterval(() => {
    let today = new Date();
    let ngay = checkTime(today.getDate());
    let thang = checkTime(today.getMonth() + 1);
    let nam = today.getFullYear();
    let giay = checkTime(today.getSeconds());
    let phut = checkTime(today.getMinutes());
    let gio = checkTime(today.getHours());
    let thu = [
      'Chủ nhật',
      'Thứ hai',
      'Thứ ba',
      'Thứ tư',
      'Thứ năm',
      'Thứ sáu',
      'Thứ bảy',
    ];
    let newTime =
      thu[today.getDay()] +
      ', ' +
      ngay +
      '-' +
      thang +
      '-' +
      nam +
      '\n' +
      gio +
      ':' +
      phut +
      ':' +
      giay;
    setTime(newTime);
  }, 1000);
  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={{
        height: height * 0.1,
        paddingLeft: 15,
        flexDirection: 'row',
        borderTopLeftRadius: borderRadius,
      }}>
      <TouchableOpacity
        style={{
          marginTop: 10,
          width: 50,
          height: 50,
        }}
        onPress={() => {
          Animated.timing(scaleValue, {
            toValue: showMenu ? 1 : 0.95,
            duration: 300,
            useNativeDriver: true,
          }).start();
          sendScaleValue();
          Animated.timing(offsetValue, {
            toValue: showMenu ? 0 : 230,
            duration: 300,
            useNativeDriver: true,
          }).start();
          sendoffSetValue();
          dispatch({type: 'setShowMenu'});
        }}>
        {showMenu === false && (
          <Image
            source={profile}
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              borderColor: 'blue',
              borderWidth: 1,
            }}
          />
        )}
        {showMenu === true && (
          <Icon name="arrow-back-circle-outline" color="#fee5e1" size={50} />
        )}
      </TouchableOpacity>
      <View
        style={{display: 'flex', flexDirection: 'column', width: width * 0.8}}>
        <Text
          style={{
            color: '#b1b1b1',
            fontSize: 13,
            marginBottom: 0,
            textAlign: 'right',
          }}>
          {time}
        </Text>
        <Text
          style={{
            color: '#eae7d6',
            fontSize: 30,
            fontWeight: 'bold',
            textAlign: 'right',
          }}>
          Xin chào
        </Text>
      </View>
    </LinearGradient>
  );
};
export default NavBar;
