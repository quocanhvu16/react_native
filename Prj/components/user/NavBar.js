import {useState} from 'react';
import React from 'react';
import {Image, Text, View, Dimensions} from 'react-native';
import {profile} from '../../image/image';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const NavBar = () => {
  const [user, setUser] = useState('');
  const [time, setTime] = useState('');
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
    <View>
      <View
        style={{
          // backgroundColor: '#b4c7e6',
          backgroundColor: '#EEEEEE',
          height: height * 0.1,
          paddingLeft: 15,
          flexDirection: 'row',
        }}>
        <View style={{paddingRight: 35}}>
          <Text style={{color: 'black', fontSize: 13, marginBottom: 0}}>
            {time}
          </Text>
          <Text style={{color: 'black', fontSize: 30, fontWeight: 'bold'}}>
            Welcome, Shanks
          </Text>
        </View>
        <View style={{justifyContent: 'center', marginLeft: 20}}>
          <Image
            source={profile}
            style={{width: 40, height: 40, borderRadius: 20}}
          />
        </View>
      </View>
      <View style={{height: 1, width: width, backgroundColor: 'black'}} />
    </View>
  );
};
export default NavBar;
