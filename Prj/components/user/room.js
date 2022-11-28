import React from 'react';
import {
  Image,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Room = props => {
  return (
    <TouchableOpacity>
      <View
        style={{
          width: width * 0.94,
          height: height * 0.175,
          borderRadius: 10,
          marginTop: 20,
        }}>
        <ImageBackground
          source={props.image}
          style={{
            width: width * 0.94,
            height: height * 0.175,
            borderRadius: 40,
          }}
          resizeMode="cover">
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 20,
              marginLeft: 20,
              marginTop: 100,
            }}>
            {props.name}
          </Text>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

export default Room;
