import React, {useState} from 'react';
import {View, Text, Dimensions, ScrollView} from 'react-native';
import Room from '../../components/user/room';
import {image1, image2, image3} from '../../image/image';
import NavBar from '../../components/user/NavBar';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Dashboard = ({navigation}) => {
  return (
    <View
      style={{
        backgroundColor: '#EEEEEE',
        width: width,
        height: height,
      }}>
      <NavBar />
      <ScrollView scrollEnabled={true} style={{height: height * 0.85}}>
        <View
          style={{
            backgroundColor: '#EEEEEE',
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginHorizontal: width * 0.03,
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
    </View>
  );
};

export default Dashboard;
