import {useState} from 'react';
import React from 'react';
import {Image, Text, View, Dimensions} from 'react-native';
import {image1} from '../../image/image';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Navbar = () => {
  // const [user, setUser] = useState('');
  // const [time, setTime] = useState('');
  // const checkTime = i => {
  //   if (i < 10) {
  //     i = '0' + i;
  //   }
  //   return i;
  // };
  // setInterval(() => {
  //   let today = new Date();
  //   let ngay = checkTime(today.getDate());
  //   let thang = checkTime(today.getMonth() + 1);
  //   let nam = today.getFullYear();
  //   let giay = checkTime(today.getSeconds());
  //   let phut = checkTime(today.getMinutes());
  //   let gio = checkTime(today.getHours());
  //   let thu = [
  //     'Chủ nhật',
  //     'Thứ hai',
  //     'Thứ ba',
  //     'Thứ tư',
  //     'Thứ năm',
  //     'Thứ sáu',
  //     'Thứ bảy',
  //   ];
  //   let newTime =
  //     thu[today.getDay()] +
  //     ', ' +
  //     ngay +
  //     '-' +
  //     thang +
  //     '-' +
  //     nam +
  //     '\n' +
  //     gio +
  //     ':' +
  //     phut +
  //     ':' +
  //     giay;
  //   setTime(newTime);
  // }, 1000);
  return (
    <View
      style={{
        backgroundColor: '#f0f0f0',
        flex: 1,
        borderRadius: 10,
        paddingLeft: 15,
      }}>
      <Image
        source={{
          uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/emapeter-1643063054.jpeg',
        }}
      />
    </View>
  );
};

export default Navbar;
