import {useRef, useState} from 'react';
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

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const NavBar = props => {
  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const [showMenu, setShowMenu] = useState(false);
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
    <View
      style={{
        backgroundColor: 'white',
        height: height * 0.1,
        paddingLeft: 15,
        flexDirection: 'row',
      }}>
      <TouchableOpacity
        style={{
          marginTop: 10,
          width: 50,
          height: 50,
          marginRight: 0,
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
          setShowMenu(!showMenu);
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
          <Icon name="arrow-back-circle-outline" color="blue" size={50} />
        )}
      </TouchableOpacity>
      <View style={{paddingLeft: 155}}>
        <Text
          style={{
            color: 'black',
            fontSize: 13,
            marginBottom: 0,
            textAlign: 'right',
          }}>
          {time}
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 30,
            fontWeight: 'bold',
            textAlign: 'right',
          }}>
          Welcome
        </Text>
      </View>
    </View>
  );
};
export default NavBar;
