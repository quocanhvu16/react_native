import React from 'react';
import {Image, Text, View, Dimensions, TouchableOpacity} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
import {useNavigation} from '@react-navigation/native';
import classApplyDescriptorGet from '@babel/runtime/helpers/esm/classApplyDescriptorGet';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/AntDesign';
import LinearGradient from 'react-native-linear-gradient';

const Room = props => {
  const navigation = useNavigation();
  // const handleOnPress = () => {
  //   if (props.name === 'Living Room') {
  //     navigation.navigate('Living Room');
  //   } else if (props.name === 'Kitchen') {
  //     navigation.navigate('Kitchen');
  //   } else if (props.name === 'Bed Room') {
  //     navigation.navigate('Bed Room');
  //   }
  // };
  const handleOnPress = () => {
    navigation.navigate('Room', {data: props.data});
  };
  const data = props.data;
  const {name, image, ...rest} = data;
  const parameter = Object.keys(rest);
  return (
    <TouchableOpacity onPress={() => handleOnPress()}>
      <LinearGradient
        colors={['#1f2328', '#1a1c1f']}
        style={{
          width: 150,
          height: 160,
          position: 'relative',
          marginHorizontal: 5,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomLeftRadius:10,
          elevation: 5,
          shadowColor: '#262e32',
          // shadowColor: 'white',
          shadowOffset: {width: 0, height: 0},
          // shadowOpacity: 0.9,
          // shadowRadius: 0,
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
            backgroundColor: '#1b1d21',
              // backgroundColor: 'yellow',
            top: 70,
            opacity: 0.95,
          }}>
          <Text style={{color: '#ffffff', fontSize: 17,marginLeft:15,marginTop:15}}>{name}</Text>
        </View>
          <Text style={{color: '#7f8489', fontSize: 15,marginLeft:15,marginTop:25}}>{parameter.length} Devices</Text>
        {/*<Text style={{color: '#ffffff', fontSize: 17}}>{name}</Text>*/}
        {/*<View>*/}
        {/*  <Image*/}
        {/*    source={image}*/}
        {/*    style={{*/}
        {/*      width: width * 0.94,*/}
        {/*      height: height * 0.185,*/}
        {/*      borderRadius: 15,*/}
        {/*    }}*/}
        {/*  />*/}
        {/*</View>*/}
        {/*<View*/}
        {/*  style={{*/}
        {/*    position: 'absolute',*/}
        {/*    // backgroundColor: '#859bac',*/}
        {/*    left: 10,*/}
        {/*    top: 0,*/}
        {/*  }}>*/}
        {/*  <Text*/}
        {/*    style={{*/}
        {/*      color: 'white',*/}
        {/*      fontWeight: 'bold',*/}
        {/*      fontSize: 20,*/}
        {/*      opacity: 1,*/}
        {/*    }}>*/}
        {/*    {name}*/}
        {/*  </Text>*/}
        {/*</View>*/}
        {/*<View*/}
        {/*  style={{*/}
        {/*    position: 'absolute',*/}
        {/*    right: 10,*/}
        {/*    top: 5,*/}
        {/*    backgroundColor: '#fe824c',*/}
        {/*    width: 30,*/}
        {/*    height: 30,*/}
        {/*    borderRadius: 20,*/}
        {/*    display: 'flex',*/}
        {/*    justifyContent: 'center',*/}
        {/*    alignItems: 'center',*/}
        {/*  }}>*/}
        {/*  <Text style={{color: 'white', fontSize: 20}}>{parameter.length}</Text>*/}
        {/*</View>*/}
        {/*<View*/}
        {/*  style={{*/}
        {/*    position: 'absolute',*/}
        {/*    left: 10,*/}
        {/*    bottom: 5,*/}
        {/*    backgroundColor: '#5e6366',*/}
        {/*    width: 160,*/}
        {/*    height: 40,*/}
        {/*    borderRadius: 20,*/}
        {/*    opacity: 0.7,*/}
        {/*  }}*/}
        {/*/>*/}
        {/*<View*/}
        {/*  style={{*/}
        {/*    position: 'absolute',*/}
        {/*    left: 20,*/}
        {/*    bottom: 13,*/}
        {/*  }}>*/}
        {/*  <View style={{display: 'flex', flexDirection: 'row'}}>*/}
        {/*    <Icon name="thermometer-outline" color="white" size={20} />*/}
        {/*    <Text style={{color: 'white', fontSize: 17}}>*/}
        {/*      {rest.temperature}&deg;C*/}
        {/*    </Text>*/}
        {/*  </View>*/}
        {/*</View>*/}
        {/*<View*/}
        {/*  style={{*/}
        {/*    position: 'absolute',*/}
        {/*    left: 100,*/}
        {/*    bottom: 13,*/}
        {/*  }}>*/}
        {/*  <View style={{display: 'flex', flexDirection: 'row'}}>*/}
        {/*    <Icon name="water" color="white" size={20} />*/}
        {/*    <Text style={{color: 'white', fontSize: 17}}>*/}
        {/*      {rest.humidity}%*/}
        {/*    </Text>*/}
        {/*  </View>*/}
        {/*</View>*/}
      </LinearGradient>
    </TouchableOpacity>
  );
};
// <Icon name="thermometer-outline"></Icon>
export default Room;
