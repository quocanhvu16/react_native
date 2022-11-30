import React from 'react';
import {
  Image,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Room = props => {
  return (
    <TouchableOpacity>
      <View
        style={{
          width: width * 0.94,
          height: height * 0.185,
          marginTop: 15,
        }}>
        <Image
          source={props.image}
          style={{
            width: width * 0.94,
            height: height * 0.185,
            borderRadius: 15,
          }}
        />
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 20,
            position: 'absolute',
            marginTop: 90,
            marginLeft: 20,
          }}>
          {props.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Room;
