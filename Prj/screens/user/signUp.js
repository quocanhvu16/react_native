import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Button,
  Dimensions,
  TouchableOpacity,
  Keyboard,
  Alert,
  BackHandler,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {user, home, pass, retypepass, background} from '../../image/image';
import {useNavigation} from '@react-navigation/native';
import {
  isValidSdt,
  isValidPass,
  isValidName,
  isValidMail,
} from '../../Validation/Validate';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SignUp = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // useEffect(() => {
  //   const backAction = () => {
  //     Alert.alert('Thoát!', 'Bạn có chắc chắn muốn thoát ứng dụng?', [
  //       {
  //         text: 'KHÔNG',
  //         onPress: () => null,
  //         style: 'cancel',
  //       },
  //       {text: 'CÓ', onPress: () => BackHandler.exitApp()},
  //     ]);
  //     return true;
  //   };
  //
  //   const backHandler = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     backAction,
  //   );
  //
  //   return () => backHandler.remove();
  // }, []);
  const [keyboardIsShown, setKeyBoardIsShown] = useState(false);
  const [IDErr, setIDErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');
  const [ID, setID] = useState('');
  const [name, setName] = useState('');
  const [nameErr, setNameErr] = useState('');
  const [password, setPassword] = useState('');
  const [retypassword, setretyPassword] = useState('');
  const [retypasswordErr, setretyPasswordErr] = useState('');
  const [mail, setMail] = useState('');
  const [mailErr, setMailErr] = useState('');
  const [pwHidden1, setpwHidden1] = useState(true);
  const [iconName1, seticonName1] = useState('eye-off');
  const [pwHidden2, setpwHidden2] = useState(true);
  const [iconName2, seticonName2] = useState('eye-off');
  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => {
      setKeyBoardIsShown(true);
    });
    Keyboard.addListener('keyboardDidHide', () => {
      setKeyBoardIsShown(false);
    });
  });

  const checkSignUp = async (ID, email, name, password) => {
    const res = await fetch(
      'https://dev-smarthome.onrender.com/api/user/signup',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          username: ID,
          email: email,
          name: name,
          code: ID,
          password: password,
        }),
      },
    );
    const json = await res.json();
    if (json.hasOwnProperty('message')) {
      alert(json.message);
    } else {
      alert('Đăng ký thành công');
      // dispatch({type: 'setInfor', payload: {ID: ID, password: password}});
      navigation.navigate('SignIn', {user: ID, password: password});
    }
    // alert('Đăng ký thành công');
    // navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.background}>
        {keyboardIsShown == false && (
          <View style={styles.dangky}>
            {/*{keyboardIsShown == false && (*/}
            {/*  <Image source={image} style={[styles.image, {marginBottom: 10}]} />*/}
            {/*)}*/}
            <Text style={styles.dangky_text}>ĐĂNG KÝ</Text>
          </View>
        )}
        <View style={{marginTop: 30, marginHorizontal: 30}}>
          <View style={styles.input_text}>
            <Image source={user} style={styles.icon} />
            <TextInput
              style={styles.input}
              onChangeText={text => {
                setName(text);
              }}
              placeholder="Họ và tên"
              placeholderTextColor={'gray'}
            />
          </View>
          {keyboardIsShown == false && (
            <View style={{marginVertical: 5, marginLeft: 25}}>
              <Text style={{color: 'red', fontSize: 10}}>{nameErr}</Text>
            </View>
          )}
          {keyboardIsShown == true && <View style={{height: 10}} />}
          <View style={styles.input_text}>
            <Image source={home} style={styles.icon} />
            <TextInput
              onChangeText={text => {
                setID(text);
              }}
              style={styles.input}
              placeholder="ID"
              placeholderTextColor={'gray'}
            />
          </View>
          {keyboardIsShown == false && (
            <View style={{marginVertical: 5, marginLeft: 25}}>
              <Text style={{color: 'red', fontSize: 10}}>{IDErr}</Text>
            </View>
          )}
          {keyboardIsShown == true && <View style={{height: 10}} />}
          <View style={styles.input_text}>
            <Icon
              name="mail"
              size={25}
              color="#333"
              style={{marginRight: 0, marginTop: 7}}
            />
            <TextInput
              onChangeText={text => {
                setMail(text);
              }}
              style={styles.input}
              placeholder="Email"
              placeholderTextColor={'gray'}
            />
          </View>
          {keyboardIsShown == false && (
            <View style={{marginVertical: 5, marginLeft: 25}}>
              <Text style={{color: 'red', fontSize: 10}}>{mailErr}</Text>
            </View>
          )}
          {keyboardIsShown == true && <View style={{height: 10}} />}
          <View style={styles.input_text}>
            <Image source={pass} style={styles.icon} />
            <TextInput
              onChangeText={text => {
                setPassword(text);
              }}
              secureTextEntry={pwHidden1 ? true : false}
              style={styles.input}
              placeholder="Mật Khẩu"
              placeholderTextColor={'gray'}
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
                setpwHidden1(!pwHidden1);
                seticonName1(pwHidden1 === true ? 'eye' : 'eye-off');
              }}>
              <Icon name={iconName1} size={20} color={'black'} />
            </TouchableOpacity>
          </View>
          {keyboardIsShown == false && (
            <View style={{marginVertical: 5, marginLeft: 25}}>
              <Text style={{color: 'red', fontSize: 10}}>{passwordErr}</Text>
            </View>
          )}
          {keyboardIsShown == true && <View style={{height: 10}} />}
          <View style={styles.input_text}>
            <Image source={retypepass} style={styles.icon} />
            <TextInput
              onChangeText={text => {
                setretyPassword(text);
              }}
              secureTextEntry={pwHidden2 ? true : false}
              style={styles.input}
              placeholder="Nhập lại mật khẩu"
              placeholderTextColor={'gray'}
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
                setpwHidden2(!pwHidden2);
                seticonName2(pwHidden2 === true ? 'eye' : 'eye-off');
              }}>
              <Icon name={iconName2} size={20} color={'black'} />
            </TouchableOpacity>
          </View>
          {keyboardIsShown == false && (
            <View style={{marginVertical: 10, marginLeft: 25}}>
              <Text style={{color: 'red', fontSize: 10}}>
                {retypasswordErr}
              </Text>
            </View>
          )}
          {keyboardIsShown == true && <View style={{height: 10}} />}
        </View>
        {keyboardIsShown == false && (
          <View style={styles.button}>
            <Button
              onPress={() => {
                setPasswordErr(
                  isValidPass(password) === 0
                    ? ''
                    : isValidPass(password) === 1
                    ? 'Mật khẩu không được để trống'
                    : 'Mật khẩu chứa ít nhất 8 ký tự, trong đó có ít nhất 1 chữ số, 1 chữ in hoa và 1 chữ thường',
                );
                setNameErr(
                  isValidName(name) === 0
                    ? ''
                    : isValidName(name) === 2
                    ? 'Không được để trống họ tên'
                    : 'HỌ tên chỉ chứa chữ cái và khoảng trắng',
                );
                setMailErr(isValidMail(mail) === 0 ? '' : 'Mail không hợp lệ');
                setretyPasswordErr(
                  password === retypassword
                    ? ''
                    : 'Xác thực mật khẩu không khớp',
                );
                if (
                  isValidPass(password) === 0 &&
                  password === retypassword &&
                  isValidName(name) === 0 &&
                  isValidMail(mail) === 0
                ) {
                  checkSignUp(ID, mail, name, password);
                }
              }}
              title="Tạo tài khoản"
              color="#f03b2c"
            />
          </View>
        )}
        <View
          style={[
            styles.input_text,
            {justifyContent: 'center', marginBottom: 20},
          ]}>
          <Text style={styles.text}>Bạn đã có sẵn tài khoản?</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.text1}> Đăng nhập</Text>
          </TouchableOpacity>
        </View>
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
    color: 'black',
  },
  background: {
    width: windowWidth,
    height: windowHeight,
  },
  dangky: {
    alignItems: 'center',
    marginTop: 50,
  },
  image: {
    width: 100,
    height: 100,
  },
  dangky_text: {
    fontSize: 50,
    color: 'black',
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
  button: {
    marginHorizontal: 100,
    paddingTop: 10,
  },
  text: {
    marginTop: 15,
    color: 'black',
  },
  text1: {
    marginTop: 15,
    color: 'blue',
  },
});

export default SignUp;
