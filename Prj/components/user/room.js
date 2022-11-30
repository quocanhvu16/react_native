import React from 'react';
import {Image, Text, View, Dimensions, TouchableOpacity} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import {useNavigation} from '@react-navigation/native';

const Room = props => {
  const navigation = useNavigation();
  const handleOnPress = () => {
    if (props.name === 'Living Room') {
      navigation.navigate('Living Room');
    } else if (props.name === 'Kitchen') {
      navigation.navigate('Kitchen');
    } else if (props.name === 'Bed Room') {
      navigation.navigate('Bed Room');
    }
  };
  return (
    <TouchableOpacity onPress={() => handleOnPress()}>
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
