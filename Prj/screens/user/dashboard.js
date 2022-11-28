import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';
import Room from '../../components/user/room';
import {image1, image2, image3, profile} from '../../image/image';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Dashboard = ({navigation}) => {
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
    <View
      style={{
        backgroundColor: '#EEEEEE',
        width: width,
        height: height,
      }}>
      <View
        style={{
          height: height * 0.1,
          borderRadius: 10,
          paddingLeft: 15,
          flexDirection: 'row',
        }}>
        <View>
          <Text style={{color: '#999999', fontSize: 15, marginBottom: -5}}>
            {time}
          </Text>
          <Text style={{color: 'black', fontSize: 30}}>Welcome</Text>
        </View>
        <View style={{backgroundColor: 'yellow'}}>
          <Image source={profile} style={styles.image} />
        </View>
      </View>

      <ScrollView
        scrollEnabled={true}
        style={{height: height * 0.8}}>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginLeft: width * 0.03,
          }}>
          <Room image={image1} name="Living Room" />
          <Room image={image2} name="Kitchen" />
          <Room image={image3} name="Bed Room" />
          <Room image={image1} name="Living Room" />
          <Room image={image2} name="Kitchen" />
          <Room image={image3} name="Bed Room" />
          <Room image={image1} name="Living Room" />
          <Room image={image2} name="Kitchen" />
          <Room image={image3} name="Bed Room" />
          <Room image={image1} name="Living Room" />
          <Room image={image2} name="Kitchen" />
          <Room image={image3} name="Bed Room" />
          <Room image={image1} name="Living Room" />
          <Room image={image2} name="Kitchen" />
        </View>
      </ScrollView>
      <View style={{height: height * 0.1}}>
        <Text>This is my green</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 20,
    height: 20,
  },
});

export default Dashboard;
