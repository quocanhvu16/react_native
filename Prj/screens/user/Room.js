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
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Room = props => {
  const navigation = useNavigation();
  const data = props.route.params.data;
  console.log(data);
  const dataTemp = {...data};
  const dispatch = useDispatch();
  //Lamp1
  const [activeLamp1, setActiveLamp1] = useState(false);
  const [colorLamp1, setColorLamp1] = useState('#c1c9cb');
  const [iconLamp1, setIconLamp1] = useState('toggle-switch-off');
  const [colorOff1, setColorOff1] = useState('#c1c9cb');
  const [colorOn1, setColorOn1] = useState('#fee46f');
  useLayoutEffect(() => {
    if (activeLamp1 === false) {
      setColorLamp1('#c1c9cb');
      setIconLamp1('toggle-switch-off');
      setColorOff1('#c1c9cb');
      setColorOn1('white');
    } else {
      setColorLamp1('#fee46f');
      setIconLamp1('toggle-switch');
      setColorOff1('white');
      setColorOn1('#fee46f');
    }
    // dispatch({
    //   type: 'changeLamp',
    //   payload: {number: 1, name: dataTemp.name, state: activeLamp1},
    // });
  }, [activeLamp1]);
  const pressLamp1 = () => {
    setActiveLamp1(!activeLamp1);
  };
  //Lamp2
  const [activeLamp2, setActiveLamp2] = useState(false);
  const [colorLamp2, setColorLamp2] = useState('#c1c9cb');
  const [iconLamp2, setIconLamp2] = useState('toggle-switch-off');
  const [colorOff2, setColorOff2] = useState('#c1c9cb');
  const [colorOn2, setColorOn2] = useState('#fee46f');
  useLayoutEffect(() => {
    if (activeLamp2 === false) {
      setColorLamp2('#c1c9cb');
      setIconLamp2('toggle-switch-off');
      setColorOff2('#c1c9cb');
      setColorOn2('white');
    } else {
      setColorLamp2('#fee46f');
      setIconLamp2('toggle-switch');
      setColorOff2('white');
      setColorOn2('#fee46f');
    }
    // dispatch({
    //   type: 'changeLamp',
    //   payload: {number: 1, name: dataTemp.name, state: activeLamp1},
    // });
  }, [activeLamp2]);
  const pressLamp2 = () => {
    setActiveLamp2(!activeLamp2);
  };

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
  const {name, image, ...rest} = data;
  return (
    <View style={{height: height, width: width}}>
      <View style={{height: height * 0.3, width: width}}>
        <ImageBackground
          source={data?.image}
          style={{height: height * 0.3, width: width, position: 'relative'}}>
          <TouchableOpacity
            style={{
              position: 'absolute',
              backgroundColor: 'white',
              width: 40,
              height: 40,
              left: 10,
              top: 10,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
            }}
            onPress={() => navigation.goBack()}>
            <Icon
              name="arrow-back-outline"
              color="black"
              size={30}
              style={{position: 'absolute', opacity: 0.6}}
            />
          </TouchableOpacity>
          <View
            style={{
              position: 'absolute',
              width: width * 0.6,
              height: height * 0.05,
              backgroundColor: 'white',
              marginHorizontal: width * 0.2,
              marginTop: height * 0.275,
              zIndex: 1,
              borderRadius: 15,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: '#333', fontSize: 17}}>{data?.name}</Text>
          </View>
        </ImageBackground>
      </View>
      <LinearGradient
        colors={['#284d9e', '#587fbd', '#89b1dd', '#afd8f6']}
        style={{
          height: height * 0.7,
          width: width,
          backgroundColor: '#f2f2f1',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginTop: height * 0.05,
          }}>
          {rest?.temperature && (
            <View
              style={{
                height: height * 0.2,
                width: width * 0.4,
                backgroundColor: '#fefffe',
                margin: width * 0.05,
                borderRadius: 20,
                elevation: 40,
                shadowColor: 'black',
                position: 'relative',
                borderColor: 'red',
                borderWidth: 1,
                borderStyle: 'solid',
              }}>
              <View
                style={{
                  position: 'absolute',
                  backgroundColor: 'white',
                  top: -10,
                  left: 30,
                  borderRadius: 10,
                }}>
                <Text
                  style={{
                    color: 'red',
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingBottom: 5,
                    paddingTop: 5,
                    fontSize: 17,
                  }}>
                  Nhiệt độ
                </Text>
              </View>
              <View
                style={{display: 'flex', alignItems: 'center', marginTop: 20}}>
                <Icon name="thermometer-outline" color="red" size={80} />
              </View>
              <View
                style={{
                  position: 'absolute',
                  width: '100%',
                  bottom: 5,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'red',
                    fontSize: 30,
                  }}>
                  {rest.temperature}&deg;C
                </Text>
              </View>
            </View>
          )}
          {rest?.humidity && (
            <View
              style={{
                height: height * 0.2,
                width: width * 0.4,
                backgroundColor: '#fefffe',
                margin: width * 0.05,
                borderRadius: 20,
                elevation: 40,
                shadowColor: 'black',
                position: 'relative',
                borderColor: '#5090fe',
                borderWidth: 1,
                borderStyle: 'solid',
              }}>
              <View
                style={{
                  position: 'absolute',
                  backgroundColor: 'white',
                  top: -10,
                  left: 38,
                  borderRadius: 10,
                }}>
                <Text
                  style={{
                    color: '#5090fe',
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingBottom: 5,
                    paddingTop: 5,
                    fontSize: 17,
                  }}>
                  Độ ẩm
                </Text>
              </View>
              <View
                style={{display: 'flex', alignItems: 'center', marginTop: 20}}>
                <Icon name="water" color="#5090fe" size={80} />
              </View>
              <View
                style={{
                  position: 'absolute',
                  width: '100%',
                  bottom: 5,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#5090fe',
                    fontSize: 30,
                  }}>
                  {rest.humidity}%
                </Text>
              </View>
            </View>
          )}
          {rest?.lamp1 !== undefined && (
            <View
              style={{
                height: height * 0.2,
                width: width * 0.4,
                backgroundColor: '#fefffe',
                margin: width * 0.05,
                borderRadius: 20,
                elevation: 40,
                shadowColor: 'black',
                position: 'relative',
                borderColor: colorLamp1,
                borderWidth: 1,
                borderStyle: 'solid',
              }}>
              <View
                style={{
                  position: 'absolute',
                  backgroundColor: 'white',
                  top: -10,
                  left: 38,
                  borderRadius: 10,
                }}>
                <Text
                  style={{
                    color: colorLamp1,
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingBottom: 5,
                    paddingTop: 5,
                    fontSize: 17,
                  }}>
                  Đèn 1
                </Text>
              </View>
              <View
                style={{display: 'flex', alignItems: 'center', marginTop: 20}}>
                <Icon1 name="lamp" color={colorLamp1} size={80} />
              </View>
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: 40,
                  bottom: 0,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={pressLamp1}>
                <Text style={{color: colorOff1, marginTop: 6}}>Off</Text>
                <Icon1
                  name={iconLamp1}
                  color={colorLamp1}
                  size={45}
                  style={{alignSelf: 'center'}}
                />
                <Text style={{color: colorOn1, marginTop: 6}}>On</Text>
              </TouchableOpacity>
            </View>
          )}
          {rest?.lamp2 !== undefined && (
            <View
              style={{
                height: height * 0.2,
                width: width * 0.4,
                backgroundColor: '#fefffe',
                margin: width * 0.05,
                borderRadius: 20,
                elevation: 40,
                shadowColor: 'black',
                position: 'relative',
                borderColor: colorLamp2,
                borderWidth: 1,
                borderStyle: 'solid',
              }}>
              <View
                style={{
                  position: 'absolute',
                  backgroundColor: 'white',
                  top: -10,
                  left: 38,
                  borderRadius: 10,
                }}>
                <Text
                  style={{
                    color: colorLamp2,
                    paddingLeft: 10,
                    paddingRight: 10,
                    paddingBottom: 5,
                    paddingTop: 5,
                    fontSize: 17,
                  }}>
                  Đèn 2
                </Text>
              </View>
              <View
                style={{display: 'flex', alignItems: 'center', marginTop: 20}}>
                <Icon1 name="lamp" color={colorLamp2} size={80} />
              </View>
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: 40,
                  bottom: 0,
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={pressLamp2}>
                <Text style={{color: colorOff2, marginTop: 6}}>Off</Text>
                <Icon1
                  name={iconLamp2}
                  color={colorLamp2}
                  size={45}
                  style={{alignSelf: 'center'}}
                />
                <Text style={{color: colorOn2, marginTop: 6}}>On</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </LinearGradient>
    </View>
  );
};

export default Room;
