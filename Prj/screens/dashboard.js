import React from 'react';
import {View, Text, Dimensions, ScrollView} from 'react-native';
import Room from '../components/room';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const image1 =
  'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/emapeter-1643063054.jpeg';
const image2 =
  'https://talkclass.edu.vn/wp-content/uploads/2018/06/tu-vung-tieng-anh-chu-de-bep.jpg';
const image3 =
  'https://image.winudf.com/v2/image1/Y29tLmFwcHRyb25pay5iZWF1dGlmdWxraXRjaGVuaWRlYXNfc2NyZWVuXzBfMTU1Njc1NzMyNV8wODM/screen-0.jpg?fakeurl=1&type=.webp';

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
          <Room image={image2} name="Kitchen13" />
        </View>
      </ScrollView>
    </View>
  );
};

export default Dashboard;
