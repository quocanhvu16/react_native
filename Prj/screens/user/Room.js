import React, {useEffect, useLayoutEffect, useState} from 'react';
import {
  Alert,
  BackHandler,
  Dimensions,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import Svg, {Rect, Circle, Path} from 'react-native-svg';
import {
  Logo,
  Home,
  LightOff,
  LightOn,
  AirConditionerOff,
  AirConditionerOn,
  SmartTvOff,
  SmartTvOn,
  RouterOff,
  RouterOn,
  TuLanhOff,
  TuLanhOn,
  MayGiatOff,
  MayGiatOn,
} from './../../assets';
import {profile} from './../../image/image';
import TabNavBar from '../../components/user/TabNavbar';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Room = props => {
  const navigation = useNavigation();
  const lang = useSelector(state => state.lang);
  const color = useSelector(state => state.color);
  const dataRoom = useSelector(state => state.dataRoom);
  const datas = useSelector(state => state.setData);
  const dispatch = useDispatch();
  const lampLivingroom = useSelector(state => state.lampLivingRoom);
  const lampKitchen = useSelector(state => state.lampKitchen);
  const lampBedroom = useSelector(state => state.lampBedRoom);
  const lampBathroom = useSelector(state => state.lampBathRoom);
  const {name, image, ...rest} = dataRoom;
  const [nameEng, setNameEng] = useState(name);
  const [nameVn, setNameVn] = useState('');
  const [lamp, setLamp] = useState(false);
  const [airConditioner, setAirConditioner] = useState(false);
  const [smartTv, setSmartTv] = useState(false);
  const [router, setRouter] = useState(false);
  const [refrigerator, setRefrigerator] = useState(false);
  const [washingMachine, setWashingMachine] = useState(false);
  async function turnOffLed() {
    // console.log('Tat den');
    const requestUrl =
      'https://dev-smarthome.onrender.com/api/adruino/turn-off-led';
    const response = await fetch(requestUrl, {
      method: 'get',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTJlNjMyYzczYmRjYzJlMDg2ZGJiMCIsImlhdCI6MTY3MTg0ODM2Nn0.QLZsHyTQwhx5KHyXiUDUdcHfDaKGm_il8CcfJY1FKSk',
      },
    });
  }
  async function turnOnLed() {
    // console.log('Bat den');
    const requestUrl =
      'https://dev-smarthome.onrender.com/api/adruino/turn-on-led';
    const response = await fetch(requestUrl, {
      method: 'get',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTJlNjMyYzczYmRjYzJlMDg2ZGJiMCIsImlhdCI6MTY3MTg0ODM2Nn0.QLZsHyTQwhx5KHyXiUDUdcHfDaKGm_il8CcfJY1FKSk',
      },
    });
  }
  async function turnOnFreezer() {
      // console.log('Bật tủ lạnh');
    const requestUrl =
      'https://dev-smarthome.onrender.com/api/adruino/turn-on-freezer';
    const response = await fetch(requestUrl, {
      method: 'get',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTJlNjMyYzczYmRjYzJlMDg2ZGJiMCIsImlhdCI6MTY3MTg0ODM2Nn0.QLZsHyTQwhx5KHyXiUDUdcHfDaKGm_il8CcfJY1FKSk',
      },
    });
  }
  async function turnOffFreezer() {
    // console.log('Tắt tủ lạnh');
    setTimeout(() => {
      setRefrigerator(() => {
        const refrigeratorTemp = refrigerator;
        console.log(refrigeratorTemp);
        dispatch({
          type: 'changeFreezer',
          payload: refrigeratorTemp,
        });
        return refrigeratorTemp;
      });
    }, 5000);
  }

  useEffect(() => {
    if (lang === 'vn') {
      if (dataRoom.name === 'Living Room') {
        setNameVn('Phòng khách');
      }
      if (dataRoom.name === 'Bed Room') {
        setNameVn('Phòng ngủ');
      }
      if (dataRoom.name === 'Kitchen') {
        setNameVn('Nhà bếp');
      }
      if (dataRoom.name === 'Bath Room') {
        setNameVn('Nhà tắm');
      }
    }
    if (lang === 'eng') {
      if (dataRoom.name === 'Living Room') {
        setNameEng('Living Room');
      }
      if (dataRoom.name === 'Bed Room') {
        setNameEng('Bed Room');
      }
      if (dataRoom.name === 'Kitchen') {
        setNameEng('Kitchen');
      }
      if (dataRoom.name === 'Bath Room') {
        setNameEng('Bath Room');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useLayoutEffect(() => {
    if (dataRoom?.desc === 'Livingroom') {
      setLamp(() => {
        if (lampLivingroom === true) {
          turnOnLed();
        }
        if (lampLivingroom === false) {
          turnOffLed();
        }
        return lampLivingroom;
      });
    }
    if (dataRoom?.desc === 'Bedroom') {
      setLamp(() => {
        if (lampBedroom === true) {
          turnOnLed();
        }
        if (lampBedroom === false) {
          turnOffLed();
        }
        return lampBedroom;
      });
    }
    if (dataRoom?.desc === 'Bathroom') {
      setLamp(() => {
        if (lampBathroom === true) {
          turnOnLed();
        }
        if (lampBathroom === false) {
          turnOffLed();
        }
        return lampBathroom;
      });
    }
    if (dataRoom?.desc === 'Kitchen') {
      setLamp(() => {
        if (lampKitchen === true) {
          turnOnLed();
        }
        if (lampKitchen === false) {
          turnOffLed();
        }
        return lampKitchen;
      });
    }
  }, [dataRoom]);
  return (
    <View style={{height: height, width: width}}>
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
        }}>
        <View
          style={{
            marginTop: height * 0.04,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: width * 0.06,
            marginRight: width * 0.06,
            position: 'relative',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              width: 32,
              height: 32,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M1 10.0009C0.734784 10.0009 0.48043 9.89559 0.292893 9.70805C0.105357 9.52052 0 9.26616 0 9.00095V1.00293C0 0.737715 0.105357 0.48336 0.292893 0.295824C0.48043 0.108287 0.734784 0.00292969 1 0.00292969H9C9.26522 0.00292969 9.51957 0.108287 9.70711 0.295824C9.89464 0.48336 10 0.737715 10 1.00293V9.00095C10 9.26616 9.89464 9.52052 9.70711 9.70805C9.51957 9.89559 9.26522 10.0009 9 10.0009H1ZM15 10.0009C14.7348 10.0009 14.4804 9.89559 14.2929 9.70805C14.1054 9.52052 14 9.26616 14 9.00095V1.00293C14 0.737715 14.1054 0.48336 14.2929 0.295824C14.4804 0.108287 14.7348 0.00292969 15 0.00292969H22.998C23.2632 0.00292969 23.5176 0.108287 23.7051 0.295824C23.8926 0.48336 23.998 0.737715 23.998 1.00293V9.00095C23.998 9.26616 23.8926 9.52052 23.7051 9.70805C23.5176 9.89559 23.2632 10.0009 22.998 10.0009H15ZM1 24.001C0.734784 24.001 0.48043 23.8956 0.292893 23.7081C0.105357 23.5205 0 23.2662 0 23.001V15.001C0 14.7357 0.105357 14.4814 0.292893 14.2938C0.48043 14.1063 0.734784 14.001 1 14.001H9C9.26522 14.001 9.51957 14.1063 9.70711 14.2938C9.89464 14.4814 10 14.7357 10 15.001V23.001C10 23.2662 9.89464 23.5205 9.70711 23.7081C9.51957 23.8956 9.26522 24.001 9 24.001H1ZM15 24.001C14.7348 24.001 14.4804 23.8956 14.2929 23.7081C14.1054 23.5205 14 23.2662 14 23.001V15.001C14 14.7357 14.1054 14.4814 14.2929 14.2938C14.4804 14.1063 14.7348 14.001 15 14.001H22.998C23.2632 14.001 23.5176 14.1063 23.7051 14.2938C23.8926 14.4814 23.998 14.7357 23.998 15.001V23.001C23.998 23.2662 23.8926 23.5205 23.7051 23.7081C23.5176 23.8956 23.2632 24.001 22.998 24.001H15Z"
                fill={color.textDarkColor}
              />
            </Svg>
          </View>
          <View>
            <Text
              style={{
                color: color.textLightColor,
                fontWeight: 'bold',
                fontSize: 20,
              }}>
              {lang === 'vn' ? nameVn : nameEng}
            </Text>
          </View>
          <View>
            <Image
              source={profile}
              style={{
                height: 32,
                width: 32,
                borderWidth: 1,
                borderColor: color.iconBackgroundColor2,
                borderRadius: 16,
              }}
            />
          </View>
        </View>
        <View
          style={{
            marginTop: height * 0.045,
            display: 'flex',
            height: 32,
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: width * 0.06,
            marginRight: width * 0.06,
            position: 'relative',
          }}>
          <ScrollView
            horizontal
            style={{
              height: 32,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Dashboard')}
              style={{
                height: 32,
                display: 'flex',
                justifyContent: 'center',
                marginRight: 20,
              }}>
              <Text style={{fontSize: 16, color: color.textDarkColor}}>
                {lang === 'vn' ? 'Tất cả' : 'All'}
              </Text>
            </TouchableOpacity>
            {datas?.map(data => {
              let dataTemp = {...data};
              if (data.name === 'Living Room') {
                dataTemp.nameVn = 'Phòng khách';
              }
              if (data.name === 'Kitchen') {
                dataTemp.nameVn = 'Nhà bếp';
              }
              if (data.name === 'Bed Room') {
                dataTemp.nameVn = 'Phòng ngủ';
              }
              if (data.name === 'Bath Room') {
                dataTemp.nameVn = 'Nhà tắm';
              }
              return (
                <TouchableOpacity
                  onPress={() => {
                    dispatch({type: 'setData', payload: data});
                    console.log(data);
                  }}
                  style={{
                    height: 32,
                    display: 'flex',
                    justifyContent: 'center',
                    marginRight: 20,
                    flexDirection: 'column',
                  }}
                  key={data.name}>
                  <Text
                    style={{
                      fontSize: 16,
                      color:
                        dataRoom.name === data.name
                          ? color.textLightColor
                          : color.textDarkColor,
                    }}>
                    {lang === 'vn' ? dataTemp.nameVn : data.name}
                  </Text>
                  {dataRoom.name === data.name && (
                    <View
                      style={{
                        height: 2,
                        backgroundColor: color.nodeChartColor,
                        marginTop: 3,
                      }}
                    />
                  )}
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
        <View
          style={{
            marginTop: height * 0.045,
            marginHorizontal: width * 0.06,
            // height: 50,
            // width: 300,
            backgroundColor: color.colorRoom1,
            display: 'flex',
            flexDirection: 'row',
            paddingLeft: 40,
            paddingRight: 30,
            paddingVertical: 15,
            borderRadius: 20,
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: (width * 0.88) / 2 - 50,
              alignItems: 'center',
              // backgroundColor:'red'
            }}>
            <Svg
              width="17"
              height="32"
              viewBox="0 0 17 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M8.5 1.79214e-08C9.82796 -0.000110164 11.1056 0.507841 12.071 1.41969C13.0364 2.33154 13.6164 3.57819 13.692 4.904L13.7 5.2L13.7016 17.9232L13.8296 18.0336C15.3206 19.3629 16.2592 21.2029 16.46 23.1904L16.4904 23.5936L16.5 24C16.5002 25.3181 16.1748 26.6158 15.5526 27.7778C14.9303 28.9398 14.0307 29.9301 12.9335 30.6606C11.8363 31.391 10.5756 31.8391 9.26353 31.9649C7.95145 32.0907 6.6286 31.8904 5.41261 31.3817C4.19662 30.873 3.12516 30.0717 2.29349 29.0491C1.46182 28.0265 0.895702 26.8142 0.645476 25.5201C0.395251 24.226 0.468668 22.8901 0.8592 21.6311C1.24973 20.3722 1.94528 19.2293 2.884 18.304L3.172 18.032L3.2984 17.9232L3.3 5.2C3.29974 3.92209 3.77005 2.68882 4.62117 1.73559C5.47229 0.782359 6.64462 0.175913 7.9144 0.032L8.2056 0.0080002L8.5 1.79214e-08ZM8.5 2.4C7.79704 2.40006 7.11982 2.66453 6.60287 3.14088C6.08591 3.61722 5.76704 4.27059 5.7096 4.9712L5.7 5.2V19.1104L5.2056 19.4704C4.26101 20.1575 3.55491 21.1227 3.18614 22.2311C2.81737 23.3394 2.80438 24.5352 3.14901 25.6513C3.49363 26.7674 4.17861 27.7477 5.10806 28.4551C6.03751 29.1626 7.16491 29.5617 8.33243 29.5966C9.49996 29.6315 10.6492 29.3004 11.6192 28.6497C12.5893 27.9991 13.3316 27.0614 13.7422 25.9679C14.1529 24.8744 14.2113 23.6799 13.9094 22.5515C13.6075 21.4232 12.9603 20.4175 12.0584 19.6752L11.7944 19.472L11.3032 19.112L11.3 5.2C11.3 4.45739 11.005 3.7452 10.4799 3.2201C9.9548 2.695 9.24261 2.4 8.5 2.4Z"
                fill={color.textRoom}
              />
              <Path
                d="M8.5 9.33337C8.81813 9.33337 9.12323 9.46161 9.34819 9.68988C9.57314 9.91815 9.69952 10.2277 9.69952 10.5506V20.069C10.6112 20.3598 11.3902 20.9723 11.8954 21.7955C12.4006 22.6187 12.5987 23.5983 12.4537 24.5568C12.3087 25.5154 11.8303 26.3896 11.1051 27.0212C10.3798 27.6528 9.45571 28 8.5 28C7.54429 28 6.62016 27.6528 5.89493 27.0212C5.16969 26.3896 4.69128 25.5154 4.5463 24.5568C4.40132 23.5983 4.59936 22.6187 5.10457 21.7955C5.60978 20.9723 6.38876 20.3598 7.30048 20.069V10.5506C7.30048 10.2277 7.42686 9.91815 7.65181 9.68988C7.87677 9.46161 8.18187 9.33337 8.5 9.33337Z"
                fill={color.textRoom}
              />
            </Svg>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: 10,
              }}>
              <Text
                style={{
                  color: color.textRoom,
                  fontFamily: 'Roboto-Thin',
                  fontWeight: color.fontWeight,
                }}>
                {dataRoom.temperature}&deg;C{' '}
              </Text>
              <Text
                style={{
                  color: color.textRoom,
                  fontFamily: 'Roboto-Thin',
                  fontWeight: color.fontWeight,
                }}>
                {lang === 'vn' ? 'Nhiệt độ' : 'Temperature'}
              </Text>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: (width * 0.88) / 2 - 50,
              alignItems: 'center',
              // backgroundColor:'red'
            }}>
            <Svg
              width="22"
              height="32"
              viewBox="0 0 22 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <Path
                d="M21.1545 16.6139C18.8019 8.877 11.8781 0.619812 11.5261 0.202627C11.4711 0.142438 11.4042 0.094365 11.3296 0.0614743C11.255 0.0285835 11.1744 0.0115967 11.0929 0.0115967C11.0114 0.0115967 10.9307 0.0285835 10.8562 0.0614743C10.7816 0.094365 10.7147 0.142438 10.6597 0.202627C10.3077 0.619812 3.38265 8.87581 1.02887 16.6139C0.5465 18.2008 0.240723 19.7688 0.240723 21.2397C0.240723 27.2225 5.10946 32.09 11.0923 32.09C17.0751 32.09 21.9415 27.2225 21.9415 21.2397C21.9427 19.7688 21.6369 18.202 21.1545 16.6139ZM11.0935 30.957C5.73524 30.957 1.37613 26.5979 1.37613 21.2408C1.37613 19.7866 1.69969 18.2151 2.21643 16.6151C4.27509 10.2447 9.54443 3.39315 11.0935 1.46722C12.6425 3.39315 17.9118 10.2447 19.9681 16.6151C20.4849 18.2163 20.8084 19.7866 20.8084 21.2408C20.8084 26.5979 16.4505 30.957 11.0935 30.957Z"
                fill={color.textRoom}
              />
              <Path
                d="M5.01097 16.6134C4.41837 18.1186 4.02252 19.6261 4.02252 20.9986C4.02252 22.8737 4.76742 24.6721 6.09334 25.998C7.41927 27.3239 9.21761 28.0688 11.0927 28.0688C12.9679 28.0688 14.7662 27.3239 16.0921 25.998C17.4181 24.6721 18.163 22.8737 18.163 20.9986C18.163 19.6261 17.7671 18.1186 17.1745 16.6134H5.01097Z"
                fill={color.textRoom}
              />
            </Svg>

            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: 10,
              }}>
              <Text
                style={{
                  color: color.textRoom,
                  fontFamily: 'Roboto-Thin',
                  fontWeight: color.fontWeight,
                }}>
                {dataRoom.humidity} %{' '}
              </Text>
              <Text
                style={{
                  color: color.textRoom,
                  fontFamily: 'Roboto-Thin',
                  fontWeight: color.fontWeight,
                }}>
                {lang === 'vn' ? 'Độ ẩm' : 'Humidity'}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: height * 0.045,
            marginHorizontal: width * 0.06,
            height: height * 0.5,
          }}>
          <ScrollView style={{}} scrollEnabled={true}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
              }}>
              {dataRoom.hasOwnProperty('lamp') && (
                <TouchableOpacity>
                  <LinearGradient
                    colors={
                      lamp === false
                        ? [color.roomUnActive1, color.roomUnActive2]
                        : [color.roomActive, color.roomActive]
                    }
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    style={{
                      width: 150,
                      height: 150,
                      marginBottom: 20,
                      borderRadius: 20,
                      paddingLeft: 10,
                      paddingRight: 20,
                    }}>
                    <View
                      style={{
                        height: 50,
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 20,
                        justifyContent: 'space-between',
                      }}>
                      {lamp === false ? (
                        <LightOff width={46} height={54} />
                      ) : (
                        <LightOn width={42} height={42} />
                      )}
                      <TouchableOpacity
                        onPress={() => {
                          setLamp(() => {
                            const lampTemp = !lamp;
                            if (dataRoom.desc === 'Livingroom') {
                              dispatch({
                                type: 'changeLampLivingroom',
                                payload: lampTemp,
                              });
                            }
                            if (dataRoom.desc === 'Bedroom') {
                              dispatch({
                                type: 'changeLampBedroom',
                                payload: lampTemp,
                              });
                            }
                            if (dataRoom.desc === 'Bathroom') {
                              dispatch({
                                type: 'changeLampBathroom',
                                payload: lampTemp,
                              });
                            }
                            if (dataRoom.desc === 'Kitchen') {
                              dispatch({
                                type: 'changeLampKitchen',
                                payload: lampTemp,
                              });
                            }
                            return lampTemp;
                          });

                          if (lamp === true) {
                            turnOffLed();
                          }
                          if (lamp === false) {
                            turnOnLed();
                          }
                        }}>
                        <LinearGradient
                          colors={
                            lamp === false
                              ? [color.roomButtonActive, color.roomButtonActive]
                              : [
                                  color.roomButtonUnActive1,
                                  color.roomButtonUnActive2,
                                ]
                          }
                          start={{x: 0, y: 0}}
                          end={{x: 1, y: 0}}
                          style={{
                            width: 66,
                            height: 34,
                            borderRadius: 30,
                            position: 'relative',
                          }}>
                          <LinearGradient
                            colors={
                              lamp === false
                                ? [
                                    color.iconRoomUnActive,
                                    color.iconRoomUnActive,
                                  ]
                                : [color.iconRoomActive1, color.iconRoomActive2]
                            }
                            style={{
                              position: 'absolute',
                              width: 26,
                              height: 26,
                              left: lamp === false ? 4 : 34,
                              top: 4,
                              borderRadius: 13,
                            }}
                          />
                        </LinearGradient>
                      </TouchableOpacity>
                    </View>
                    <View
                      style={{
                        height: 50,
                        // backgroundColor: 'red',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingLeft: 10,
                      }}>
                      <Text
                        style={{
                          fontFamily: 'Roboto-Medium',
                          fontSize: 20,
                          color:
                            lamp === false
                              ? color.roomTextUnActive
                              : color.roomTextActive,
                        }}>
                        {lang === 'vn' ? 'Đèn' : 'Light'}
                      </Text>
                    </View>
                  </LinearGradient>
                </TouchableOpacity>
              )}
              {dataRoom.hasOwnProperty('airConditioner') && (
                <TouchableOpacity>
                  <LinearGradient
                    colors={
                      airConditioner === false
                        ? [color.roomUnActive1, color.roomUnActive2]
                        : [color.roomActive, color.roomActive]
                    }
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    style={{
                      width: 150,
                      height: 150,
                      marginBottom: 20,
                      borderRadius: 20,
                      paddingLeft: 10,
                      paddingRight: 20,
                    }}>
                    <View
                      style={{
                        height: 50,
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 20,
                        justifyContent: 'space-between',
                      }}>
                      {airConditioner === false ? (
                        <AirConditionerOff width={46} height={54} />
                      ) : (
                        <AirConditionerOn width={42} height={42} />
                      )}
                      <TouchableOpacity
                        onPress={() => setAirConditioner(!airConditioner)}>
                        <LinearGradient
                          colors={
                            airConditioner === false
                              ? [color.roomButtonActive, color.roomButtonActive]
                              : [
                                  color.roomButtonUnActive1,
                                  color.roomButtonUnActive2,
                                ]
                          }
                          start={{x: 0, y: 0}}
                          end={{x: 1, y: 0}}
                          style={{
                            width: 66,
                            height: 34,
                            borderRadius: 30,
                            position: 'relative',
                          }}>
                          <LinearGradient
                            colors={
                              airConditioner === false
                                ? [
                                    color.iconRoomUnActive,
                                    color.iconRoomUnActive,
                                  ]
                                : [color.iconRoomActive1, color.iconRoomActive2]
                            }
                            style={{
                              position: 'absolute',
                              width: 26,
                              height: 26,
                              left: airConditioner === false ? 4 : 34,
                              top: 4,
                              borderRadius: 13,
                            }}
                          />
                        </LinearGradient>
                      </TouchableOpacity>
                    </View>
                    <View
                      style={{
                        height: 50,
                        // backgroundColor: 'red',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingLeft: 10,
                      }}>
                      <Text
                        style={{
                          fontFamily: 'Roboto-Medium',
                          fontSize: 20,
                          color:
                            airConditioner === false
                              ? color.roomTextUnActive
                              : color.roomTextActive,
                        }}>
                        {lang === 'vn' ? 'Điều hòa' : 'Air Conditioner'}
                      </Text>
                    </View>
                  </LinearGradient>
                </TouchableOpacity>
              )}
              {dataRoom.hasOwnProperty('smartTv') && (
                <TouchableOpacity>
                  <LinearGradient
                    colors={
                      smartTv === false
                        ? [color.roomUnActive1, color.roomUnActive2]
                        : [color.roomActive, color.roomActive]
                    }
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    style={{
                      width: 150,
                      height: 150,
                      marginBottom: 20,
                      borderRadius: 20,
                      paddingLeft: 10,
                      paddingRight: 20,
                    }}>
                    <View
                      style={{
                        height: 50,
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 20,
                        justifyContent: 'space-between',
                      }}>
                      {smartTv === false ? (
                        <SmartTvOff width={46} height={54} />
                      ) : (
                        <SmartTvOn width={42} height={42} />
                      )}
                      <TouchableOpacity onPress={() => setSmartTv(!smartTv)}>
                        <LinearGradient
                          colors={
                            smartTv === false
                              ? [color.roomButtonActive, color.roomButtonActive]
                              : [
                                  color.roomButtonUnActive1,
                                  color.roomButtonUnActive2,
                                ]
                          }
                          start={{x: 0, y: 0}}
                          end={{x: 1, y: 0}}
                          style={{
                            width: 66,
                            height: 34,
                            borderRadius: 30,
                            position: 'relative',
                          }}>
                          <LinearGradient
                            colors={
                              smartTv === false
                                ? [
                                    color.iconRoomUnActive,
                                    color.iconRoomUnActive,
                                  ]
                                : [color.iconRoomActive1, color.iconRoomActive2]
                            }
                            style={{
                              position: 'absolute',
                              width: 26,
                              height: 26,
                              left: smartTv === false ? 4 : 34,
                              top: 4,
                              borderRadius: 13,
                            }}
                          />
                        </LinearGradient>
                      </TouchableOpacity>
                    </View>
                    <View
                      style={{
                        height: 50,
                        // backgroundColor: 'red',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingLeft: 10,
                      }}>
                      <Text
                        style={{
                          fontFamily: 'Roboto-Medium',
                          fontSize: 20,
                          color:
                            smartTv === false
                              ? color.roomTextUnActive
                              : color.roomTextActive,
                        }}>
                        {lang === 'vn' ? 'TV' : 'Smart TV'}
                      </Text>
                    </View>
                  </LinearGradient>
                </TouchableOpacity>
              )}
              {dataRoom.hasOwnProperty('router') && (
                <TouchableOpacity>
                  <LinearGradient
                    colors={
                      router === false
                        ? [color.roomUnActive1, color.roomUnActive2]
                        : [color.roomActive, color.roomActive]
                    }
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    style={{
                      width: 150,
                      height: 150,
                      marginBottom: 20,
                      borderRadius: 20,
                      paddingLeft: 10,
                      paddingRight: 20,
                    }}>
                    <View
                      style={{
                        height: 50,
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 20,
                        justifyContent: 'space-between',
                      }}>
                      {router === false ? (
                        <RouterOff width={46} height={54} />
                      ) : (
                        <RouterOn width={42} height={42} />
                      )}
                      <TouchableOpacity onPress={() => setRouter(!router)}>
                        <LinearGradient
                          colors={
                            router === false
                              ? [color.roomButtonActive, color.roomButtonActive]
                              : [
                                  color.roomButtonUnActive1,
                                  color.roomButtonUnActive2,
                                ]
                          }
                          start={{x: 0, y: 0}}
                          end={{x: 1, y: 0}}
                          style={{
                            width: 66,
                            height: 34,
                            borderRadius: 30,
                            position: 'relative',
                          }}>
                          <LinearGradient
                            colors={
                              router === false
                                ? [
                                    color.iconRoomUnActive,
                                    color.iconRoomUnActive,
                                  ]
                                : [color.iconRoomActive1, color.iconRoomActive2]
                            }
                            style={{
                              position: 'absolute',
                              width: 26,
                              height: 26,
                              left: router === false ? 4 : 34,
                              top: 4,
                              borderRadius: 13,
                            }}
                          />
                        </LinearGradient>
                      </TouchableOpacity>
                    </View>
                    <View
                      style={{
                        height: 50,
                        // backgroundColor: 'red',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingLeft: 10,
                      }}>
                      <Text
                        style={{
                          fontFamily: 'Roboto-Medium',
                          fontSize: 20,
                          color:
                            router === false
                              ? color.roomTextUnActive
                              : color.roomTextActive,
                        }}>
                        {lang === 'vn' ? 'Wi-fi' : 'Wi-fi'}
                      </Text>
                    </View>
                  </LinearGradient>
                </TouchableOpacity>
              )}
              {dataRoom.hasOwnProperty('refrigerator') && (
                <TouchableOpacity>
                  <LinearGradient
                    colors={
                      refrigerator === false
                        ? [color.roomUnActive1, color.roomUnActive2]
                        : [color.roomActive, color.roomActive]
                    }
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    style={{
                      width: 150,
                      height: 150,
                      marginBottom: 20,
                      borderRadius: 20,
                      paddingLeft: 10,
                      paddingRight: 20,
                    }}>
                    <View
                      style={{
                        height: 50,
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 20,
                        justifyContent: 'space-between',
                      }}>
                      {refrigerator === false ? (
                        <TuLanhOff width={46} height={54} />
                      ) : (
                        <TuLanhOn width={42} height={42} />
                      )}
                      <TouchableOpacity
                        onPress={() => {
                          setRefrigerator(() => {
                            const refrigeratorTemp = !refrigerator;
                            if (dataRoom.desc === 'Kitchen') {
                              dispatch({
                                type: 'changeFreezer',
                                payload: refrigeratorTemp,
                              });
                            }
                            return refrigeratorTemp;
                          });
                          if (refrigerator === false) {
                            turnOnFreezer();
                          }
                          turnOffFreezer();
                        }}>
                        <LinearGradient
                          colors={
                            refrigerator === false
                              ? [color.roomButtonActive, color.roomButtonActive]
                              : [
                                  color.roomButtonUnActive1,
                                  color.roomButtonUnActive2,
                                ]
                          }
                          start={{x: 0, y: 0}}
                          end={{x: 1, y: 0}}
                          style={{
                            width: 66,
                            height: 34,
                            borderRadius: 30,
                            position: 'relative',
                          }}>
                          <LinearGradient
                            colors={
                              refrigerator === false
                                ? [
                                    color.iconRoomUnActive,
                                    color.iconRoomUnActive,
                                  ]
                                : [color.iconRoomActive1, color.iconRoomActive2]
                            }
                            style={{
                              position: 'absolute',
                              width: 26,
                              height: 26,
                              left: refrigerator === false ? 4 : 34,
                              top: 4,
                              borderRadius: 13,
                            }}
                          />
                        </LinearGradient>
                      </TouchableOpacity>
                    </View>
                    <View
                      style={{
                        height: 50,
                        // backgroundColor: 'red',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingLeft: 10,
                      }}>
                      <Text
                        style={{
                          fontFamily: 'Roboto-Medium',
                          fontSize: 20,
                          color:
                            refrigerator === false
                              ? color.roomTextUnActive
                              : color.roomTextActive,
                        }}>
                        {lang === 'vn' ? 'Tủ lạnh' : 'Refrigerator'}
                      </Text>
                    </View>
                  </LinearGradient>
                </TouchableOpacity>
              )}
              {dataRoom.hasOwnProperty('washingMachine') && (
                <TouchableOpacity>
                  <LinearGradient
                    colors={
                      washingMachine === false
                        ? [color.roomUnActive1, color.roomUnActive2]
                        : [color.roomActive, color.roomActive]
                    }
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    style={{
                      width: 150,
                      height: 150,
                      marginBottom: 20,
                      borderRadius: 20,
                      paddingLeft: 10,
                      paddingRight: 20,
                    }}>
                    <View
                      style={{
                        height: 50,
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 20,
                        justifyContent: 'space-between',
                      }}>
                      {washingMachine === false ? (
                        <MayGiatOff width={46} height={54} />
                      ) : (
                        <MayGiatOn width={42} height={42} />
                      )}
                      <TouchableOpacity
                        onPress={() => setWashingMachine(!washingMachine)}>
                        <LinearGradient
                          colors={
                            washingMachine === false
                              ? [color.roomButtonActive, color.roomButtonActive]
                              : [
                                  color.roomButtonUnActive1,
                                  color.roomButtonUnActive2,
                                ]
                          }
                          start={{x: 0, y: 0}}
                          end={{x: 1, y: 0}}
                          style={{
                            width: 66,
                            height: 34,
                            borderRadius: 30,
                            position: 'relative',
                          }}>
                          <LinearGradient
                            colors={
                              washingMachine === false
                                ? [
                                    color.iconRoomUnActive,
                                    color.iconRoomUnActive,
                                  ]
                                : [color.iconRoomActive1, color.iconRoomActive2]
                            }
                            style={{
                              position: 'absolute',
                              width: 26,
                              height: 26,
                              left: washingMachine === false ? 4 : 34,
                              top: 4,
                              borderRadius: 13,
                            }}
                          />
                        </LinearGradient>
                      </TouchableOpacity>
                    </View>
                    <View
                      style={{
                        height: 50,
                        // backgroundColor: 'red',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingLeft: 10,
                      }}>
                      <Text
                        style={{
                          fontFamily: 'Roboto-Medium',
                          fontSize: 20,
                          color:
                            washingMachine === false
                              ? color.roomTextUnActive
                              : color.roomTextActive,
                        }}>
                        {lang === 'vn' ? 'Máy giặt' : 'WashingMachine'}
                      </Text>
                    </View>
                  </LinearGradient>
                </TouchableOpacity>
              )}
            </View>
          </ScrollView>
        </View>
        <TabNavBar />
      </LinearGradient>
    </View>
  );
};

export default Room;
