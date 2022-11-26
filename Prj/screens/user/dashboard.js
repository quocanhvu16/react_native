import React from 'react';
import {View, Text, Dimensions, ScrollView} from 'react-native';
import Room from '../../components/user/room';
import {image1, image2, image3} from '../../image/image'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Dashboard = ({navigation}) => {
  return (
    <View style={{backgroundColor: '#EEEEEE', width: width, height: height}}>
      <Text
        style={{
          marginTop: 20,
          marginLeft: 20,
          fontSize: 20,
          fontWeight: 'bold',
          color: 'black',
        }}>
        Home
      </Text>
      <ScrollView scrollEnabled={true} style={{flex: 1}}>
        <View
          style={{
            flex: 1,
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
          <Room image={image2} name="Kitchen13" />
        </View>
      </ScrollView>
    </View>
  );
};

export default Dashboard;
