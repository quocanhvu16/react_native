import React, {useEffect, useState} from 'react';
import {
  BackHandler,
  Dimensions,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import TabNavBar from '../../components/user/TabNavbar';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Entypo';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Profile = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const backAction = () => {
      navigation.goBack(-2);
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
  const [change, setChange] = useState(false);
  const [passOld, setPassOld] = useState('');
  const [hiddenPassOld, setHiddenPassOld] = useState(true);
  const [iconHiddenPassOld, setIconHiddenPassOld] = useState('eye-with-line');
  const [passNew, setPassNew] = useState('');
  const [hiddenPassNew, setHiddenPassNew] = useState(true);
  const [iconHiddenPassNew, setIconHiddenPassNew] = useState('eye-with-line');
  const [pass, setPass] = useState('');
  const [hiddenPass, setHiddenPass] = useState(true);
  const [iconHiddenPass, setIconHiddenPass] = useState('eye-with-line');
  const changePass = () => {
    setChange(!change);
  };
  const logout = () => {
    Alert.alert('Đăng xuất!', 'Bạn có chắc chắn muốn đăng xuất?', [
      {
        text: 'KHÔNG',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'CÓ', onPress: () => navigation.navigate('SignIn')},
    ]);
  };
  return (
    <View>
      <View
        style={{
          height: height * 0.927,
          backgroundColor: '#EEEEEE',
        }}>
        <LinearGradient
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={{
            height: height * 0.08,
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: '#eae7d6', fontSize: 30}}>Tài khoản</Text>
        </LinearGradient>
        <View
          style={{
            height: height * 0.847,
            display: 'flex',
            flexDirection: 'column',
            marginTop: 15,
            marginLeft: 15,
            marginRight: 15,
          }}>
          <TouchableOpacity
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: 'white',
              borderRadius: 25,
              elevation: 30,
              marginBottom: 20,
            }}>
            <Icon
              name="user"
              size={30}
              color="red"
              style={{
                paddingLeft: 20,
                paddingBottom: 10,
                paddingTop: 10,
                paddingRight: 20,
              }}
            />
            <Text style={{color: 'black', fontSize: 20}}>
              Thông tin tài khoản
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: 'white',
              borderRadius: 25,
              elevation: 30,
              marginBottom: 20,
            }}
            onPress={changePass}>
            <Icon
              name="key"
              size={30}
              color="red"
              style={{
                paddingLeft: 20,
                paddingBottom: 10,
                paddingTop: 10,
                paddingRight: 20,
              }}
            />
            <Text style={{color: 'black', fontSize: 20}}>Đổi mật khẩu</Text>
          </TouchableOpacity>
          {change === true && (
            <View
              style={{
                backgroundColor: 'white',
                marginBottom: 20,
                borderRadius: 20,
              }}>
              <View style={{position: 'relative', marginTop: 20}}>
                <TextInput
                  onChangeText={text => {
                    setPassOld(text);
                  }}
                  secureTextEntry={hiddenPassOld ? true : false}
                  style={{
                    height: 40,
                    width: '80%',
                    borderWidth: 1,
                    padding: 10,
                    backgroundColor: '#e6e6e6',
                    color: 'black',
                    borderRadius: 10,
                    marginHorizontal: '10%',
                    marginBottom: 10,
                    paddingRight: 40,
                  }}
                  placeholder="Mật Khẩu cũ"
                  placeholderTextColor={'black'}
                />
                <TouchableOpacity
                  style={{position: 'absolute', top: 10, right: '13%'}}
                  onPress={() => {
                    setHiddenPassOld(!hiddenPassOld);
                    setIconHiddenPassOld(
                      hiddenPassOld === true ? 'eye' : 'eye-with-line',
                    );
                  }}>
                  <Icon name={iconHiddenPassOld} size={20} color="black" />
                </TouchableOpacity>
              </View>
              <View style={{position: 'relative'}}>
                <TextInput
                  onChangeText={text => {
                    setPassNew(text);
                  }}
                  secureTextEntry={hiddenPassNew ? true : false}
                  style={{
                    height: 40,
                    width: '80%',
                    borderWidth: 1,
                    padding: 10,
                    backgroundColor: '#e6e6e6',
                    color: 'black',
                    borderRadius: 10,
                    marginHorizontal: '10%',
                    marginBottom: 10,
                  }}
                  placeholder="Mật Khẩu mới"
                  placeholderTextColor={'black'}
                />
                <TouchableOpacity
                  style={{position: 'absolute', top: 10, right: '13%'}}
                  onPress={() => {
                    setHiddenPassNew(!hiddenPassNew);
                    setIconHiddenPassNew(
                      hiddenPassNew === true ? 'eye' : 'eye-with-line',
                    );
                  }}>
                  <Icon name={iconHiddenPassNew} size={20} color="black" />
                </TouchableOpacity>
              </View>
              <View style={{position: 'relative'}}>
                <TextInput
                  onChangeText={text => {
                    setPass(text);
                  }}
                  secureTextEntry={hiddenPass ? true : false}
                  style={{
                    height: 40,
                    width: '80%',
                    borderWidth: 1,
                    padding: 10,
                    backgroundColor: '#e6e6e6',
                    color: 'black',
                    borderRadius: 10,
                    marginHorizontal: '10%',
                  }}
                  placeholder="Nhập lại mật khẩu mới"
                  placeholderTextColor={'black'}
                />
                <TouchableOpacity
                  style={{position: 'absolute', top: 10, right: '13%'}}
                  onPress={() => {
                    setHiddenPass(!hiddenPass);
                    setIconHiddenPass(
                      hiddenPass === true ? 'eye' : 'eye-with-line',
                    );
                  }}>
                  <Icon name={iconHiddenPass} size={20} color="black" />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={{
                  width: '60%',
                  height: 50,
                  marginHorizontal: '20%',
                  backgroundColor: 'yellow',
                  marginVertical: 20,
                  borderRadius: 25,
                  display: 'flex',
                  justifyContent: 'center',
                }}
                onPress={() => {
                  Alert.alert(
                    'Đổi mật khẩu!',
                    'Bạn có chắc chắn muốn đổi mật khẩu?',
                    [
                      {
                        text: 'KHÔNG',
                        onPress: () => null,
                        style: 'cancel',
                      },
                      {text: 'CÓ', onPress: () => setChange(!change)},
                    ],
                  );
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#333',
                    fontWeight: 'bold',
                  }}>
                  Đổi mật khẩu
                </Text>
              </TouchableOpacity>
            </View>
          )}
          <TouchableOpacity
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: 'white',
              borderRadius: 25,
              elevation: 30,
            }}
            onPress={logout}>
            <Icon
              name="log-out"
              size={30}
              color="red"
              style={{
                paddingLeft: 20,
                paddingBottom: 10,
                paddingTop: 10,
                paddingRight: 20,
              }}
            />
            <Text style={{color: 'black', fontSize: 20}}>Đăng xuất</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TabNavBar setting={true} />
    </View>
  );
};

export default Profile;
