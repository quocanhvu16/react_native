import React from 'react';
import {View, Text, Dimensions, ScrollView} from 'react-native';
import Room from '../../components/user/room';
import {livingRoom, kitchen, bathRoom, bedRoom} from '../../image/image';
import NavBar from '../../components/user/NavBar';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Dashboard = () => {
  return (
    <View
      style={{
        backgroundColor: '#EEEEEE',
        width: width,
        height: height * 0.91,
      }}>
      <NavBar />
      <ScrollView scrollEnabled={true} style={{}}>
        <View
          style={{
            backgroundColor: '#EEEEEE',
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginHorizontal: width * 0.03,
            marginTop: -8,
          }}>
          <Room image={livingRoom} name="Living Room" />
          <Room image={kitchen} name="Kitchen" />
          <Room image={bedRoom} name="Bed Room" />
          <Room image={bathRoom} name="Bath Room" />
          <Room image={bathRoom} name="Bath Room" />
          <Room image={bathRoom} name="Bath Room" />
          <Room image={bathRoom} name="Bath Room" />
        </View>
      </ScrollView>
    </View>
  );
};

export default Dashboard;
