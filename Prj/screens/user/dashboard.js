import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Animated,
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
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Dashboard = () => {
  // const [showMenu, setShowMenu] = useState(false);
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
    <SafeAreaView
      style={{flex: 1, flexDirection: 'column', backgroundColor: '#b4c7e6'}}>
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
          <View style={{paddingTop: 30}}>
            <Text style={{fontSize: 13, color: 'black', marginBottom: 20}}>
              Họ và tên : Monkey D.Shanks
            </Text>
            <Text style={{fontSize: 13, color: 'black', marginBottom: 20}}>
              Số điện thoại : 1234567890
            </Text>
            <Text style={{fontSize: 13, color: 'black', marginBottom: 20}}>
              Địa chỉ : 5/225, Biển Đông , One piece
            </Text>
            <Text style={{fontSize: 13, color: 'black'}}>
              Email : **********
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
          backgroundColor: '#EEEEEE',
          height: height * 0.927,
          transform: [{scale: scaleValue}, {translateX: offsetValue}],
        }}>
        <NavBar
          dashboardCallback1={callbackFunction1}
          dashboardCallback2={callbackFunction2}
        />
        <ScrollView scrollEnabled={true} style={{}}>
          <View
            style={{
              backgroundColor: '#EEEEEE',
              flexDirection: 'row',
              flexWrap: 'wrap',
              marginHorizontal: width * 0.03,
              marginTop: -8,
            }}>
            <Room image={livingRoom} name="Living Room" />
            <Room image={kitchen} name="Kitchen" />
            <Room image={bedRoom} name="Bed Room" />
            <Room image={bathRoom} name="Bath Room" />
            <Room image={bathRoom} name="Bath Room" />
            <Room image={bathRoom} name="Bath Room" />
            <Room image={bathRoom} name="Bath Room" />
          </View>
        </ScrollView>
      </Animated.View>
    </SafeAreaView>
  );
};

export default Dashboard;
