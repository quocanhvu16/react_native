import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Button,
  Dimensions,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {isValidSdt, isValidPass} from '../../Validation/Validate';
import {background, image, home, pass} from '../../image/image';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SignIn = () => {
  const [keyboardIsShown, setKeyBoardIsShown] = useState(false);
  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      setKeyBoardIsShown(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setKeyBoardIsShown(false);
    });
  });
  const navigation = useNavigation();
  //states for validating
  const [IDErr, setIDErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');
  //states to store sdt, pass
  const [ID, setID] = useState('');
  const [password, setPassword] = useState('');
  const [pwHidden, setpwHidden] = useState(true);
  const [iconName, seticonName] = useState('eye-off');
  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.background}>
        {keyboardIsShown == false && <View style={{height: 80}} />}
        <View style={styles.top}>
          <Image source={image} style={styles.image} />
          <Text style={styles.smarthome}>SMART HOME</Text>
        </View>
        <View
          style={{
            marginTop: 50,
            marginHorizontal: windowWidth * 0.09,
          }}>
          <View style={styles.input_text}>
            <Image source={home} style={styles.icon} />
            <TextInput
              onChangeText={text => {
                setID(text);
              }}
              style={[styles.input, {paddingRight: 50}]}
              placeholder="ID"
              keyboardType="numeric"
              placeholderTextColor={'black'}
            />
          </View>
          {keyboardIsShown == false && (
            <View style={{marginVertical: 10, marginLeft: 25}}>
              <Text style={{color: 'red', fontSize: 10}}>{IDErr}</Text>
            </View>
          )}
          {keyboardIsShown == true && <View style={{height: 10}} />}
          <View style={styles.input_text}>
            <Image source={pass} style={styles.icon} />
            <TextInput
              onChangeText={text => {
                setPassword(text);
              }}
              secureTextEntry={pwHidden ? true : false}
              style={[styles.input, {paddingRight: 50}]}
              placeholder="M???t Kh???u"
              placeholderTextColor={'black'}
            />
            <TouchableOpacity
              style={{
                width: 35,
                height: 35,
                resizeMode: 'stretch',
                position: 'absolute',
                marginLeft: windowWidth - 100,
                justifyContent: 'center',
                alignItems: 'center',
                right: 5,
                top: 2,
              }}
              onPress={() => {
                setpwHidden(!pwHidden);
                seticonName(pwHidden === true ? 'eye' : 'eye-off');
              }}>
              <Icon name={iconName} size={20} color={'black'} />
            </TouchableOpacity>
          </View>
          {keyboardIsShown == false && (
            <View style={{marginTop: 10, marginLeft: 25}}>
              <Text style={{color: 'red', fontSize: 10}}>{passwordErr}</Text>
            </View>
          )}
          {keyboardIsShown == true && <View style={{height: 10}} />}
          <Text style={styles.forgetpass}>Qu??n m???t kh???u ?</Text>
        </View>
        {keyboardIsShown == false && (
          <View style={{paddingBottom: 20}}>
            <TouchableOpacity
              style={{width: '40%', alignSelf:'center' }}
              onPress={() => {
                setIDErr(isValidSdt(ID) == true ? '' : 'ID c?? 4 k?? t???');
                setPasswordErr(
                  isValidPass(password) == true
                    ? ''
                    : 'M???t kh???u ph???i c?? ??t nh???t 3 k?? t???',
                );
                if (ID == 1234 && (password == 'admin' || password == 'Admin')) {
                  navigation.navigate('Ad_Dasboard')
                }
                else if (isValidSdt(ID) && isValidPass(password)) {
                  alert('????ng nh???p th??nh c??ng');
                  navigation.navigate('Dashboard');
                } else {
                  alert('????ng nh???p th???t b???i');
                }
              }}
            >
              <View style={{ padding: 10, marginTop: 20, width: '100%', backgroundColor: "#3f6eb9", alignItems: 'center', borderRadius: 10, }}>
                <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 14 }}>????NG NH???P</Text>
              </View>
            </TouchableOpacity>
            <View style={[styles.button2, {flexDirection: 'row', justifyContent: 'center'}]}>
              <Text style={{ color: 'black' }}>B???n ch??a c?? s???n t??i kho???n?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={{ color: 'blue' }}> ????ng k??</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              height: 40,
            }}>
            <View
              style={{
                height: 2,
                width: '20%',
                backgroundColor: 'black',
                marginRight: 5,
              }}
            />
            <Text style={{fontSize: 15, color: 'black'}}>
              Ph????ng th???c kh??c?
            </Text>
            <View
              style={{
                height: 2,
                width: '20%',
                backgroundColor: 'black',
                marginLeft: 5,
              }}
            />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <View style={{marginRight: 25}}>
              <Icon name={'logo-facebook'} color={'#1068c9'} size={40} />
            </View>
            <View style={{marginRight: 15}}>
              <Icon name={'logo-twitter'} color={'#0b84ed'} size={40} />
            </View>
            <View>
              <Icon name={'logo-google'} color={'#ce5533'} size={40} />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: windowWidth,
    height: windowHeight,
  },
  top: {
    flexDirection: 'row',
    marginTop: 60,
  },
  image: {
    flex: 1,
    height: 70,
  },
  smarthome: {
    fontSize: 35,
    color: '#2852e1',
    flex: 2,
    marginTop: 13,
    marginRight: 10,
  },
  input: {
    height: 40,
    width: 270,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#e6e6e6',
    color: 'black',
    borderRadius: 10,
  },
  forgetpass: {
    fontSize: 15,
    color: 'blue',
    marginTop: 5,
    alignSelf: 'flex-end',
    fontStyle: 'italic'
  },
  button2: {
    marginTop: 20,
  },
  input_text: {
    flexDirection: 'row',
  },
  icon: {
    height: 25,
    width: 25,
    position: 'relative',
    top: 6,
    right: 4,
  },
});

export default SignIn;
