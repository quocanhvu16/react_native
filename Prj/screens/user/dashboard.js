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
  const navigation = useNavigation();
  const dispatch = useDispatch();
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
          }}>
          <Text style={{fontSize: 20, color: 'white'}}>
            View profile
          </Text>
          <View
            style={{
              height: 1,
              width: 110,
              backgroundColor: 'white',
            }}
          />
        </TouchableOpacity>
        <View style={{paddingTop: 30, width: 215}}>
          <Text style={{fontSize: 13, color: 'black', marginBottom: 20}}>
            Họ và tên : Vũ Quốc Anh
          </Text>
          <Text style={{fontSize: 13, color: 'black', marginBottom: 20}}>
            Số điện thoại : 0904443580
          </Text>
          <Text style={{fontSize: 13, color: 'black', marginBottom: 20}}>
            Địa chỉ : 5/69 Trường Chinh
          </Text>
          <Text style={{fontSize: 13, color: 'black'}}>
            Email : quocanhvu16@gmail.com
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
          colors={['#292d32', '#16171b', '#16171b']}
          style={{
            height: '100%',
            width: '100%',
            position: 'relative',
            borderRadius: borderRadius,
          }}>
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
              colors={['#292d32', '#292d32', '#16171b']}
              style={{
                position: 'absolute',
                width: 30,
                height: 30,
                backgroundColor: '#292d32',
                borderRadius: 15,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: width * 0.045,
                marginTop: 8,
                elevation: 5,
                shadowColor: 'white',
                shadowOpacity: 0.1,
              }}>
              <AntDesign
                name={showMenu === true ? 'left' : 'bars'}
                size={25}
                color="white"
              />
            </LinearGradient>
          </TouchableOpacity>
          <View
            style={{
              marginTop: height * 0.063,
              marginLeft: width * 0.06,
              marginRight: width * 0.06,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{display: 'flex', flexDirection: 'column'}}>
              <Text style={{fontSize: 21, color: '#7f8489'}}>Welcome</Text>
              <Text
                style={{
                  fontSize: 22,
                  color: '#fdfdfd',
                  fontWeight: 'bold',
                  marginTop: 5,
                }}>
                Vũ Quốc Anh
              </Text>
            </View>
            <LinearGradient
              // colors={['#2c3030', '#32343c']}
              colors={['#1f86e4', '#76d0ff']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                elevation: 15,
                shadowColor: 'white',
                shadowOffset: {width: 0, height: 0},
                shadowOpacity: 0.1,
                shadowRadius: 10,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Ionicons name="notifications-outline" size={25} color="white" />
            </LinearGradient>
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
            <Text style={{fontSize: 22, color: '#ffffff', fontWeight: 'bold'}}>
              Your Rooms
            </Text>
            <Text style={{fontSize: 17, color: '#7f8489'}}>See all</Text>
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
                // backgroundColor: '#EEEEEE',
                flexDirection: 'row',
                flexWrap: 'wrap',
                height: 170,
              }}>
              {data.rooms?.map((room, index) => {
                return <Room data={room} key={index} />;
              })}
            </View>
          </ScrollView>
          <View
            style={{
              width: width * 0.88,
              height: 225,
              position: 'absolute',
              left: width * 0.06,
              top: height * 0.52,
              borderRadius: 20,
              borderWidth: 1,
              borderColor: '#319ab2',
            }}>
            <View
              style={{position: 'absolute', width: 80, height: 50, left: 20}}>
              <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
                Energy usage
              </Text>
            </View>
            <View
              style={{
                position: 'absolute',
                width: 80,
                height: 50,
                left: 120,
                // backgroundColor: 'yellow',
                display: 'flex',
                flexDirection: 'column',
              }}>
              <Text style={{fontSize: 18, color: '#319ab2'}}>Today</Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
                  36
                </Text>
                <Text> kWh</Text>
              </View>
            </View>
            <View
              style={{
                position: 'absolute',
                width: 100,
                height: 50,
                left: 200,
                display: 'flex',
                flexDirection: 'column',
              }}>
              <Text style={{fontSize: 18, color: '#319ab2'}}>This Month</Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
                  821
                </Text>
                <Text> kWh</Text>
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
                backgroundColor: '#0040e2',
                backgroundGradientFrom: '#16171b',
                backgroundGradientTo: '#16171b',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(31, 134, 228, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: '6',
                  strokeWidth: '2',
                  stroke: '#26a1ff',
                },
              }}
              bezier
              style={{
                borderRadius: 16,
                position: 'absolute',
                top: 52,
              }}
            />
          </View>
          <TabNavBar home={true} />
        </LinearGradient>
      </Animated.View>
    </LinearGradient>
    // </SafeAreaView>
  );
};

export default Dashboard;
