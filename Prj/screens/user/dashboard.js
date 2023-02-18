import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Animated,
  BackHandler,
  Alert,
} from 'react-native';
import Room from '../../components/user/room';
import {
  livingRoom,
  kitchen,
  bathRoom,
  bedRoom,
  profile,
} from '../../image/image';
import NavBar from '../../components/user/NavBar';
import {useDispatch, useSelector} from 'react-redux';
import TabNavBar from '../../components/user/TabNavbar';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import {fetchUser} from '../../API';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Dashboard = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  console.log('vao app');
  const data = useSelector(state => state.setData);
  const showMenu = useSelector(state => state.showMenu);
  // async function fetchUser() {
  //   const requestUrl = 'https://127.0.0.1:3000/user/1';
  //   const response = await fetch(requestUrl);
  //   const responseJson = await response.json();
  //   console.log(responseJson);
  //   return responseJson;
  // }
  // useLayoutEffect(() => {
  //   fetchUser()
  //     .then(result => setData(result))
  //     .catch(error => console.log('error', error));
  // }, []);
  useEffect(() => {
    const backAction = () => {
      Alert.alert('Đăng xuất!', 'Bạn có chắc chắn muốn đăng xuất?', [
        {
          text: 'KHÔNG',
          onPress: () => null,
          style: 'cancel',
        },
        {
          text: 'CÓ',
          onPress: () => {
            dispatch({type: 'setShowMenu1', payload: false});
            navigation.navigate('SignIn');
          },
        },
      ]);
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => {
      // console.log(backHandler);
      backHandler.remove();
    };
    // }
  }, []);
  const [borderRadius, setBorderRadius] = useState(0);
  useLayoutEffect(() => {
    if (showMenu === true) {
      setBorderRadius(20);
    } else {
      setBorderRadius(0);
      setTimeout(() => {
        setViewProfile(false);
      }, 310);
    }
  }, [showMenu]);
  const [scaleValue, setScaleValue] = useState(1);
  const [offsetValue, setOffSetValue] = useState(0);
  const callbackFunction1 = data => {
    setScaleValue(data);
  };
  const callbackFunction2 = data => {
    setOffSetValue(data);
  };
  const [viewProfile, setViewProfile] = useState(false);

  return (
    // <SafeAreaView>
    <LinearGradient
      // colors={['#bfaee3', '#deb5d7', '#fec5e6', '#ffd273', '#fee686']}
      colors={['#6497e3', '#70a1e3', '#86b4e7', '#a0cdf8']}
      style={{flex: 1, flexDirection: 'column'}}>
      <View
        style={{
          justifyContent: 'flex-start',
          padding: 10,
        }}>
        <Image
          source={profile}
          style={{
            width: 150,
            height: 150,
            borderRadius: 75,
            marginTop: 20,
            borderColor: 'blue',
            borderWidth: 2,
          }}
        />
        <Text
          style={{
            fontSize: 40,
            fontWeight: 'bold',
            color: 'black',
            marginTop: 0,
            marginBottom: 20,
          }}>
          Shanks
        </Text>
        <TouchableOpacity
          style={{
            height: 40,
            width: 120,
            justifyContent: 'center',
          }}
          onPress={() => {
            setViewProfile(!viewProfile);
          }}>
          <Text style={{fontSize: 20, color: viewProfile ? 'white' : 'black'}}>
            View profile
          </Text>
          <View
            style={{
              height: 1,
              width: 110,
              backgroundColor: viewProfile ? 'white' : 'black',
            }}
          />
        </TouchableOpacity>
        {viewProfile === true && (
          <View style={{paddingTop: 30, width: 215}}>
            <Text style={{fontSize: 13, color: 'black', marginBottom: 20}}>
              Họ và tên : Monkey D.Shanks
            </Text>
            <Text style={{fontSize: 13, color: 'black', marginBottom: 20}}>
              Số điện thoại : 1234567890
            </Text>
            <Text style={{fontSize: 13, color: 'black', marginBottom: 20}}>
              Địa chỉ : 5/225, Biển Đông , One pieceeeeee
            </Text>
            <Text style={{fontSize: 13, color: 'black'}}>
              Email : {data.user}
            </Text>
          </View>
        )}
      </View>
      <Animated.View
        style={{
          position: 'absolute',
          flexGrow: 1,
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'white',
          height: height,
          borderRadius: borderRadius,
          transform: [{scale: scaleValue}, {translateX: offsetValue}],
        }}>
        <NavBar
          dashboardCallback1={callbackFunction1}
          dashboardCallback2={callbackFunction2}
        />
        <ScrollView scrollEnabled={true} style={{height: height * 0.827}}>
          <View
            style={{
              backgroundColor: '#EEEEEE',
              flexDirection: 'row',
              flexWrap: 'wrap',
              paddingHorizontal: width * 0.03,
              marginTop: -8,
              paddingBottom: 8,
              height: height * 0.827,
            }}>
            {data.rooms?.map((room, index) => {
              return <Room data={room} key={index} />;
            })}
          </View>
        </ScrollView>
        <TabNavBar home={true} />
      </Animated.View>
    </LinearGradient>
    // </SafeAreaView>
  );
};

export default Dashboard;
