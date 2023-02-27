import React, {useEffect, useLayoutEffect, useState} from 'react';
import {Image, Text, View, Dimensions, TouchableOpacity} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import {useNavigation} from '@react-navigation/native';
import classApplyDescriptorGet from '@babel/runtime/helpers/esm/classApplyDescriptorGet';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';

const Room = props => {
  const lang = useSelector(state => state.lang);
  const color = useSelector(state => state.color);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleOnPress = () => {
    dispatch({type: 'setData', payload: props.data});
    navigation.navigate('Room', {data: props.data});
  };
  const data = props.data;
  let {name, image, ...rest} = data;
  const parameter = Object.keys(rest);
  const [nameTemp, setNameTemp] = useState('');
  useEffect(() => {
    if (lang === 'vn') {
      if (data.name === 'Living Room') {
        setNameTemp('Phòng khách');
      }
      if (data.name === 'Bed Room') {
        setNameTemp('Phòng ngủ');
      }
      if (data.name === 'Kitchen') {
        setNameTemp('Nhà bếp');
      }
      if (data.name === 'Bath Room') {
        setNameTemp('Nhà tắm');
      }
    }
    if (lang === 'eng') {
      if (data.name === 'Living Room') {
        setNameTemp('Living Room');
      }
      if (data.name === 'Bed Room') {
        setNameTemp('Bed Room');
      }
      if (data.name === 'Kitchen') {
        setNameTemp('Kitchen');
      }
      if (data.name === 'Bath Room') {
        setNameTemp('Bath Room');
      }
    }
  }, [lang]);
  return (
    <TouchableOpacity onPress={() => handleOnPress()}>
      <LinearGradient
        colors={[color.roomBackgroundColor1, color.roomBackgroundColor2]}
        style={{
          width: 150,
          height: 160,
          position: 'relative',
          marginHorizontal: 5,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderBottomLeftRadius: 10,
          elevation: 5,
          shadowColor: '#262e32',
          shadowOffset: {width: 0, height: 0},
          marginVertical: 5,
        }}>
        <View>
          <Image
            source={image}
            style={{
              width: 150,
              height: 87,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            width: 150,
            height: 40,
            backgroundColor: color.roomBlurColor,
            // backgroundColor: 'yellow',
            top: 70,
            opacity: 0.8,
          }}>
          <Text
            style={{
              color: color.textLightColor,
              fontSize: 17,
              marginLeft: 15,
              marginTop: 15,
            }}>
            {nameTemp}
          </Text>
        </View>
        <Text
          style={{
            color: color.textDarkColor,
            fontSize: 15,
            marginLeft: 15,
            marginTop: 25,
          }}>
          {parameter.length} {lang === 'vn' ? 'Thiết bị' : 'Devices'}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Room;
