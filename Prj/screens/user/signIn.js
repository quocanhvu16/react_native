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
  Alert,
  BackHandler,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {isValidSdt, isValidPass} from '../../Validation/Validate';
import {background, image, home, pass} from '../../image/image';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SignIn = (props) => {
  const [keyboardIsShown, setKeyBoardIsShown] = useState(false);
  const dispatch = useDispatch();
  const infor = useSelector(state => state.infor);
  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      setKeyBoardIsShown(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setKeyBoardIsShown(false);
    });
  });
  const navigation = useNavigation();
  useEffect(() => {
    const backAction = () => {
      Alert.alert('Thoát!', 'Bạn có chắc chắn muốn thoát ứng dụng?', [
        {
          text: 'KHÔNG',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'CÓ', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  //states for validating
  const [IDErr, setIDErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');
  //states to store sdt, pass
  const [ID, setID] = useState(props.route.params ? props.route.params.user : '' );
  const [password, setPassword] = useState(props.route.params ? props.route.params.password : '');
  const [pwHidden, setpwHidden] = useState(true);
  const [iconName, seticonName] = useState('eye-off');
  // console.log(props.route.params.user)
  useEffect(() =>{
    if(props.route.params){
      setID(props.route.params.user)
      setPassword(props.route.params.password)
    }
  }, [props.route.params])

  const checkSignIn = async (ID, password) => {
    console.log(ID, password)
    const res = await fetch(
      'https://dev-smarthome.onrender.com/api/user/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          username: ID,
          password: password,
        }),
      },
    );
    const json = await res.json();
    if (json.message === 'Login successfully ') {
      alert('Đăng nhập thành công');
      dispatch({type: 'setDataUser', payload: json.data});
      
      navigation.navigate('Dashboard');
      console.log(json.data)
    } else {
      alert(json.message);
    }
  };
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
            <View style={[styles.input]}>
              <TextInput
                onChangeText={text => {
                  setID(text);
                }}
                // style={[styles.input, {paddingRight: 50}]}
                style={{ color: 'black', width: '85%'}}
                placeholder="ID"
                placeholderTextColor={'black'}
                defaultValue={ID}
              />
            </View>
          </View>
          {keyboardIsShown == false && (
            <View style={{marginVertical: 10, marginLeft: 25}}>
              <Text style={{color: 'red', fontSize: 10}}>{IDErr}</Text>
            </View>
          )}
          {keyboardIsShown == true && <View style={{height: 10}} />}
          <View style={styles.input_text}>
            <Image source={pass} style={styles.icon} />
            <View style={[styles.input]}>
              <TextInput
                onChangeText={text => {
                  setPassword(text);
                }}
                secureTextEntry={pwHidden ? true : false}
                style={{ color: 'black', width: '85%'}}
                placeholder="Mật Khẩu"
                placeholderTextColor={'black'}
                defaultValue={password}
              />
              <TouchableOpacity
                onPress={() => {
                  setpwHidden(!pwHidden);
                  seticonName(pwHidden === true ? 'eye' : 'eye-off');
                }}>
                <Icon name={iconName} size={20} color={'black'} />
              </TouchableOpacity>
            </View>
          </View>
          {keyboardIsShown == false && (
            <View style={{marginTop: 10, marginLeft: 25}}>
              <Text style={{color: 'red', fontSize: 10}}>{passwordErr}</Text>
            </View>
          )}
          {keyboardIsShown == true && <View style={{height: 10}} />}
          {/* <Text style={styles.forgetpass}>Quên mật khẩu ?</Text> */}
        </View>
        {keyboardIsShown == false && (
          <View style={{paddingBottom: 20}}>
            <TouchableOpacity
              style={{width: '40%', alignSelf: 'center'}}
              onPress={() => {
                setIDErr(isValidSdt(ID) == 0 ? '' : 'ID không được để trống');
                setPasswordErr(
                  isValidPass(password) == 0
                    ? ''
                    : isValidPass(password) == 1
                    ? 'Mật khẩu không được để trống'
                    : '',
                );
                if (
                  ID == 1234 &&
                  (password == 'admin' || password == 'Admin')
                ) {
                  navigation.navigate('Ad_Dasboard');
                } else if (
                  isValidSdt(ID) === 0 &&
                  isValidPass(password) !== 1
                ) {
                  checkSignIn(ID, password);
                  // alert('Đăng nhập thành công');
                  // navigation.navigate('Dashboard', {user: ID, pass: password});
                }
              }}>
              <View
                style={{
                  padding: 10,
                  marginTop: 20,
                  width: '100%',
                  backgroundColor: '#3f6eb9',
                  alignItems: 'center',
                  borderRadius: 10,
                }}>
                <Text
                  style={{fontWeight: 'bold', color: 'white', fontSize: 14}}>
                  ĐĂNG NHẬP
                </Text>
              </View>
            </TouchableOpacity>
            <View
              style={[
                styles.button2,
                {flexDirection: 'row', justifyContent: 'center'},
              ]}>
              <Text style={{color: 'black'}}>Bạn chưa có sẵn tài khoản?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={{color: 'blue'}}> Đăng ký</Text>
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
    // padding: ,
    paddingHorizontal: 10,
    backgroundColor: '#e6e6e6',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  forgetpass: {
    fontSize: 15,
    color: 'blue',
    marginTop: 5,
    alignSelf: 'flex-end',
    fontStyle: 'italic',
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
