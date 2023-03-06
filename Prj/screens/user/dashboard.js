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
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import client from './../../mqtt';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

const width = Dimensions.get('window').width; //360
const height = Dimensions.get('window').height; //728

const Dashboard = props => {
  const dispatch = useDispatch();
  function fakeHumidity() {
    let min = 60;
    let max = 90;
    let result = Math.floor(Math.random() * (max - min + 1) + min);
    return result;
  }
  function fakeNhietdo() {
    let min = 20;
    let max = 35;
    let result = Math.floor(Math.random() * (max - min + 1) + min);
    return result;
  }
  const [doam, setDoam] = useState(() => {
    let doamTemp = fakeHumidity();
    dispatch({type: 'setDoam', payload: doamTemp});
    return doamTemp;
  });
  const [nhietdo, setNhietdo] = useState(() => {
    let nhietdoTemp = fakeNhietdo();
    dispatch({type: 'setNhietdo', payload: nhietdoTemp});
    return nhietdoTemp;
  });
  useEffect(() => {
    setInterval(() => {
      setDoam(() => {
        let doamTemp = fakeHumidity();
        return doamTemp;
      });
      setNhietdo(() => {
        let nhietdoTemp = fakeNhietdo();
        return nhietdoTemp;
      });
    }, 10000);
  }, []);
  useEffect(() => {
    dispatch({type: 'setDoam', payload: doam});
  }, [doam]);
  useEffect(() => {
    dispatch({type: 'setNhietdo', payload: nhietdo});
  }, [nhietdo]);
  const lang = useSelector(state => state.lang);
  const navigation = useNavigation();
  const data = useSelector(state => state.setData);
  const dataUser = useSelector(state => state.dataUser);
  const showMenu = useSelector(state => state.showMenu);
  const color = useSelector(state => state.color);
  const [dataFetch, setData] = useState({});
  const [dataAllRooms, setDataAllRooms] = useState([]);
  const [dataAllHome, setDataAllHome] = useState([]);
  // const IDHome = useSelector(state => state.IDHome);
  const token = dataUser.token;
  // console.log(token)
  async function getAllHome() {
    const requestUrl = 'https://dev-smarthome.onrender.com/api/home';
    const response = await fetch(requestUrl, {
      method: 'get',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const responseJson = await response.json();
    return responseJson;
  }
  async function getHome() {
    const requestUrl = `https://dev-smarthome.onrender.com/api/home/${dataUser.user.home}`;
    const response = await fetch(requestUrl, {
      method: 'get',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const responseJson = await response.json();
    return responseJson;
  }
  async function getAllRoom() {
    // console.log('IDHOme', IDHome);
    const requestUrl = `https://dev-smarthome.onrender.com/api/home/${dataUser.user.home}/rooms`;
    const response = await fetch(requestUrl, {
      method: 'get',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const responseJson = await response.json();
    return responseJson;
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    // await getAllHome()
    //   .then(result => setDataAllHome(result))
    //   .catch(error => console.log('error', error));
    getHome()
      .then(result => setData(result))
      .catch(error => console.log('error', error));
    getAllRoom()
      .then(result => setDataAllRooms(result))
      .catch(error => console.log('error', error));
  }, []);
  // useEffect(() => {
  //   // console.log('dataHome', dataFetch);
  // }, [dataFetch]);
  // useEffect(() => {
  //   for (let i = 0; i < dataAllHome.length; i++) {
  //     if (dataAllHome[i].code === dataUser.user.username) {
  //       dispatch({type: 'setIDHome', payload: dataAllHome[i]._id});
  //     }
  //   }
  // }, [dataAllHome]);
  useLayoutEffect(() => {
    if (dataAllRooms.length > 0) {
      for (let i = 0; i < dataAllRooms.length; i++) {
        if (dataAllRooms[i]?.desc === 'Livingroom') {
          dataAllRooms[i].humidity = doam;
          dataAllRooms[i].temperature = nhietdo;
          dataAllRooms[i].lamp = false;
          dataAllRooms[i].airConditioner = false;
          dataAllRooms[i].smartTv = false;
          dataAllRooms[i].router = false;
        }
        if (dataAllRooms[i]?.desc === 'Kitchen') {
          dataAllRooms[i].humidity = doam;
          dataAllRooms[i].temperature = nhietdo;
          dataAllRooms[i].lamp = false;
          dataAllRooms[i].refrigerator = false;
        }
        if (dataAllRooms[i]?.desc === 'Bedroom') {
          dataAllRooms[i].humidity = doam;
          dataAllRooms[i].temperature = nhietdo;
          dataAllRooms[i].lamp = false;
          dataAllRooms[i].airConditioner = false;
          dataAllRooms[i].smartTv = false;
        }
        if (dataAllRooms[i]?.desc === 'Bathroom') {
          dataAllRooms[i].humidity = doam;
          dataAllRooms[i].temperature = nhietdo;
          dataAllRooms[i].lamp = false;
          dataAllRooms[i].washingMachine = false;
        }
      }
      const dataAllRoomsTemp = [...dataAllRooms];
      dispatch({type: 'getData', payload: dataAllRoomsTemp});
    }
  }, [dataAllRooms]);
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
            navigation.navigate('SignIn', {user: '', ID: ''});
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
      backHandler.remove();
    };
    // }
  }, []);
  const [borderRadius, setBorderRadius] = useState(0);
  useLayoutEffect(() => {
    if (showMenu === true) {
      setBorderRadius(30);
    } else {
      setBorderRadius(0);
    }
  }, [showMenu]);

  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
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
            fontSize: 30,
            fontWeight: 'bold',
            color: 'black',
            marginTop: 0,
            marginBottom: 20,
            width: 210,
          }}>
          {dataUser.user.name}
        </Text>
        <TouchableOpacity
          style={{
            height: 40,
            // width: 120,
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 20, color: 'white'}}>
            {lang === 'vn' ? 'Xem thông tin' : 'View Profile'}
          </Text>
          <View
            style={{
              height: 1,
              width: 125,
              backgroundColor: 'white',
            }}
          />
        </TouchableOpacity>
        <View style={{paddingTop: 30, width: 215}}>
          <Text style={{fontSize: 13, color: 'black', marginBottom: 20}}>
            {lang === 'vn' ? 'Họ và tên' : 'Fullname'} : {dataUser.user.name}
          </Text>
          <Text style={{fontSize: 13, color: 'black', marginBottom: 20}}>
            {lang === 'vn' ? 'Địa chỉ' : 'Address'} : {dataFetch.address}
          </Text>
          <Text style={{fontSize: 13, color: 'black'}}>
            Email : {dataUser.user.email}
          </Text>
        </View>
      </View>
      <Animated.View
        style={{
          position: 'absolute',
          flexGrow: 1,
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          height: height,
          transform: [{scale: scaleValue}, {translateX: offsetValue}],
        }}>
        <LinearGradient
          colors={[
            color.backgroundColor1,
            color.backgroundColor2,
            color.backgroundColor2,
          ]}
          style={{
            height: '100%',
            width: '100%',
            position: 'relative',
            borderRadius: borderRadius,
          }}>
          <View
            style={{
              marginTop: height * 0.04,
              marginLeft: width * 0.06,
              marginRight: width * 0.06,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              {showMenu === false ? (
                <Image
                  source={profile}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    marginRight: 10,
                    elevation: 15,
                    shadowColor: 'red',
                    shadowOffset: {width: 0, height: 0},
                    shadowOpacity: 0.8,
                    shadowRadius: 10,
                  }}
                />
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    Animated.timing(scaleValue, {
                      toValue: showMenu ? 1 : 0.95,
                      duration: 300,
                      useNativeDriver: true,
                    }).start();
                    Animated.timing(offsetValue, {
                      toValue: showMenu ? 0 : 230,
                      duration: 300,
                      useNativeDriver: true,
                    }).start();
                    dispatch({type: 'setShowMenu'});
                  }}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    marginRight: 10,
                    borderWidth: 1,
                    borderColor: color.textLightColor,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <AntDesign
                    name="left"
                    size={30}
                    color={color.textLightColor}
                  />
                </TouchableOpacity>
              )}
              <View style={{display: 'flex', flexDirection: 'column'}}>
                <Text style={{fontSize: 17, color: color.textDarkColor}}>
                  {lang === 'vn' ? 'Xin chào' : 'Welcome'}
                </Text>
                <Text
                  style={{
                    fontSize: 20,
                    color: color.textLightColor,
                    fontWeight: 'bold',
                  }}>
                  {dataUser.user.name}
                </Text>
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <LinearGradient
                // colors={['#2c3030', '#32343c']}
                colors={[
                  color.iconBackgroundColor1,
                  color.iconBackgroundColor2,
                ]}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  elevation: 15,
                  shadowColor: 'white',
                  shadowOffset: {width: 0, height: 0},
                  shadowOpacity: 0.1,
                  shadowRadius: 10,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 20,
                }}>
                <Ionicons
                  name="notifications-outline"
                  size={25}
                  color={color.iconColor}
                />
              </LinearGradient>
              <TouchableOpacity
                onPress={() => {
                  Animated.timing(scaleValue, {
                    toValue: showMenu ? 1 : 0.95,
                    duration: 300,
                    useNativeDriver: true,
                  }).start();
                  Animated.timing(offsetValue, {
                    toValue: showMenu ? 0 : 230,
                    duration: 300,
                    useNativeDriver: true,
                  }).start();
                  dispatch({type: 'setShowMenu'});
                }}>
                <LinearGradient
                  colors={[
                    color.backgroundColor1,
                    color.backgroundColor1,
                    color.backgroundColor2,
                  ]}
                  style={{
                    // position: 'absolute',
                    width: 40,
                    height: 40,
                    backgroundColor: color.backgroundColor1,
                    borderRadius: 20,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    elevation: 5,
                    shadowColor: color.iconColor,
                    shadowOpacity: 0.1,
                  }}>
                  <AntDesign
                    name={showMenu === true ? 'left' : 'bars'}
                    size={25}
                    color={color.textLightColor}
                  />
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              marginTop: 0.04 * height,
              marginLeft: width * 0.06,
              marginRight: width * 0.06,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 22,
                color: color.textLightColor,
                fontWeight: 'bold',
              }}>
              {lang === 'vn' ? 'Phòng của bạn' : 'Your Rooms'}
            </Text>
            <TouchableOpacity
              onPress={() => {
                dispatch({type: 'setData', payload: dataAllRooms[0]});
                navigation.navigate('Room');
              }}>
              <Text style={{fontSize: 17, color: color.textDarkColor}}>
                {lang === 'vn' ? 'Xem tất cả' : 'See all'}
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            style={{
              marginTop: 20,
              marginLeft: width * 0.06 - 5,
              marginRight: width * 0.06 - 5,
            }}>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                height: 170,
              }}>
              {dataAllRooms?.map((room, index) => {
                return <Room data={room} key={index} />;
              })}
            </View>
          </ScrollView>
          <LinearGradient
            colors={[color.backgroundChartColor1, color.backgroundChartColor1]}
            style={{
              width: width * 0.88,
              height: 240,
              position: 'absolute',
              left: width * 0.06,
              top: height * 0.48,
              borderRadius: 20,
              borderWidth: 1,
              borderColor: color.borderChartColor,
            }}>
            <View
              style={{position: 'absolute', width: 80, height: 50, left: 20}}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: color.textLightColor,
                }}>
                {lang === 'vn' ? 'Năng lượng' : 'Energy usage'}
              </Text>
            </View>
            <View
              style={{
                position: 'absolute',
                width: 80,
                height: 50,
                left: 120,
                display: 'flex',
                flexDirection: 'column',
              }}>
              <Text style={{fontSize: 18, color: color.borderChartText}}>
                {lang === 'vn' ? 'Hôm nay' : 'Today'}
              </Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: color.textLightColor,
                  }}>
                  36
                </Text>
                <Text style={{color: color.textDarkColor}}> kWh</Text>
              </View>
            </View>
            <View
              style={{
                position: 'absolute',
                width: 100,
                height: 50,
                left: 210,
                display: 'flex',
                flexDirection: 'column',
              }}>
              <Text style={{fontSize: 18, color: color.borderChartText}}>
                {lang === 'vn' ? 'Tháng này' : 'This Month'}
              </Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: color.textLightColor,
                  }}>
                  821
                </Text>
                <Text style={{color: color.textDarkColor}}> kWh</Text>
              </View>
            </View>
            <LineChart
              data={{
                labels: ['01', '02', '03', '04', '05', '06'],
                datasets: [
                  {
                    data: [
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                    ],
                  },
                ],
              }}
              width={width * 0.877}
              height={170}
              // yAxisLabel="$"
              // yAxisSuffix="k"
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                // backgroundColor: '#e20048',
                backgroundGradientFrom: color.backgroundChartColor1,
                backgroundGradientTo: color.backgroundChartColor1,
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(31, 134, 228, ${opacity})`,
                labelColor: (opacity = 1) => color.textLightColor,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                  stroke: color.nodeChartColor,
                },
              }}
              bezier
              style={{
                borderRadius: 16,
                position: 'absolute',
                top: 60,
              }}
            />
          </LinearGradient>
          <TabNavBar home={true} />
        </LinearGradient>
      </Animated.View>
    </LinearGradient>
    // </SafeAreaView>
  );
};

export default Dashboard;
