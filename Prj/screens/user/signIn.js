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
          <View style={{marginVertical: 10, marginLeft: 25}}>
            <Text style={{color: 'red', fontSize: 10}}>{IDErr}</Text>
          </View>
          <View style={styles.input_text}>
            <Image source={pass} style={styles.icon} />
            <TextInput
              onChangeText={text => {
                setPassword(text);
              }}
              secureTextEntry={pwHidden ? true : false}
              style={[styles.input, {paddingRight: 50}]}
              placeholder="Mật Khẩu"
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
          <View style={{marginTop: 10, marginLeft: 25}}>
            <Text style={{color: 'red', fontSize: 10}}>{passwordErr}</Text>
          </View>
          <Text style={styles.forgetpass}>Quên mật khẩu ?</Text>
        </View>
        {keyboardIsShown == false && (
          <View style={{paddingBottom: 20}}>
            <View style={styles.button1}>
              <Button
                title="Đăng nhập"
                color="#3f6eb9"
                onPress={() => {
                  setIDErr(isValidSdt(ID) == true ? '' : 'ID có 4 ký tự');
                  setPasswordErr(
                    isValidPass(password) == true
                      ? ''
                      : 'Mật khẩu phải có ít nhất 3 ký tự',
                  );
                  if (isValidSdt(ID) && isValidPass(password)) {
                    alert('Đăng nhập thành công');
                    navigation.navigate('Dashboard');
                  } else {
                    alert('Đăng nhập thất bại');
                  }
                }}
              />
            </View>
            <View style={styles.button2}>
              <Button
                title="Đăng ký"
                color="#f03b2c"
                onPress={() => navigation.navigate('SignUp')}
              />
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
              Phương thức khác?
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
    marginTop: 10,
    alignSelf: 'flex-end',
  },
  button1: {
    marginHorizontal: 120,
    marginTop: 30,
  },
  button2: {
    marginHorizontal: 120,
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
