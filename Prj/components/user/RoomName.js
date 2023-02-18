import React, {useEffect} from 'react';
import {
  Text,
  Dimensions,
  View,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const RoomName = props => {
  const navigation = useNavigation();
  useEffect(() => {
    const backAction = () => {
      navigation.goBack();
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => {
      backHandler.remove();
    };
    // }
  }, []);
  const colorText = 'black';
  return (
    <View
      style={{
        width: width,
        height: height * 0.1,
        backgroundColor: 'white',
        flexDirection: 'row',
      }}>
      <View
        style={{
          // backgroundColor: 'yellow',
          marginLeft: width * 0.03,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            paddingRight: 130,
            // backgroundColor: 'white',
            color: colorText,
            fontSize: 30,
            fontWeight: 'bold',
          }}>
          {props.name}
        </Text>
      </View>
      <TouchableOpacity style={{justifyContent: 'center'}}>
        <Icon name={'options'} size={42} color={'#8c8c8c'} />
      </TouchableOpacity>
    </View>
  );
};

export default RoomName;
