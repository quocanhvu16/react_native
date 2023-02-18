import React, {useEffect} from 'react';
import {
  Alert,
  BackHandler,
  Dimensions,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import TabNavBar from '../../components/user/TabNavbar';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
// import View from "native-base/src/components/primitives/View/index";

const Notification = props => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  useEffect(() => {
    const backAction = () => {
      // navigation.goBack();
      navigation.navigate('Dashboard', {string: 'Chuyển từ notification sang'});
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
  return (
    <View>
      <View
        style={{
          height: height * 0.927,
          backgroundColor: '#EEEEEE',
        }}>
        <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={{height: height * 0.08, backgroundColor: 'white',display:'flex', justifyContent:'center', alignItems:'center'}}>
          <Text style={{color: '#eae7d6', fontSize: 30}}>Thông báo</Text>
        </LinearGradient>
      </View>
      <TabNavBar notification={true} />
    </View>
  );
};

export default Notification;
