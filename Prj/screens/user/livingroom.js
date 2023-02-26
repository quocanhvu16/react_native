import React, {useEffect} from 'react';
import {Alert, BackHandler, Text} from 'react-native';
import RoomName from '../../components/user/RoomName';
import {useNavigation} from '@react-navigation/native';
const LivingRoom = () => {
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

    return () => backHandler.remove();
  }, []);
  return <RoomName name="Living Room" />;
};

export default LivingRoom;
