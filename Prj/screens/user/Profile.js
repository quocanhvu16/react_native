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
import AntDesign from 'react-native-vector-icons/AntDesign';

import {useDispatch, useSelector} from 'react-redux';
import set from '@babel/runtime/helpers/esm/set';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Profile = () => {
  const color = useSelector(state => state.color);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    const backAction = () => {
      navigation.goBack();
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
  const [setting, setSetting] = useState(false);
  const pressSetting = () => {
    setSetting(!setting);
  };
  const [changeColor, setChangeColor] = useState(false);
  const [mode, setMode] = useState(color.name);
  const [changeLang, setChangeLang] = useState(false);
  const language = useSelector(state => state.lang);
  const [lang, setLang] = useState(language);
  useEffect(() => {
    if (mode === 'light') {
      dispatch({type: 'setWhite'});
    }
    if (mode === 'dark') {
      dispatch({type: 'setDark'});
    }
  }, [mode]);
  useEffect(() => {
    if (lang === 'vn') {
      dispatch({type: 'setVN'});
    }
    if (lang === 'eng') {
      dispatch({type: 'setENG'});
    }
  }, [lang]);
  const pressChangeColor = () => {
    setChangeColor(false);
  };
  const pressChangeLang = () => {
    setChangeLang(false);
  };
  return (
    // <View>
    //   <View
    //     style={{
    //       height: height * 0.927,
    //       backgroundColor: '#EEEEEE',
    //     }}>
    //     <LinearGradient
    //       colors={['#4c669f', '#3b5998', '#192f6a']}
    //       style={{
    //         height: height * 0.08,
    //         backgroundColor: 'white',
    //         display: 'flex',
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //       }}>
    //       <Text style={{color: '#eae7d6', fontSize: 30}}>Tài khoản</Text>
    //     </LinearGradient>
    //     <View
    //       style={{
    //         height: height * 0.847,
    //         display: 'flex',
    //         flexDirection: 'column',
    //         marginTop: 15,
    //         marginLeft: 15,
    //         marginRight: 15,
    //       }}>
    //       <TouchableOpacity
    //         style={{
    //           display: 'flex',
    //           flexDirection: 'row',
    //           alignItems: 'center',
    //           backgroundColor: 'white',
    //           borderRadius: 25,
    //           elevation: 30,
    //           marginBottom: 20,
    //         }}>
    //         <Icon
    //           name="user"
    //           size={30}
    //           color="red"
    //           style={{
    //             paddingLeft: 20,
    //             paddingBottom: 10,
    //             paddingTop: 10,
    //             paddingRight: 20,
    //           }}
    //         />
    //         <Text style={{color: 'black', fontSize: 20}}>
    //           Thông tin tài khoản
    //         </Text>
    //       </TouchableOpacity>
    //       <TouchableOpacity
    //         style={{
    //           display: 'flex',
    //           flexDirection: 'row',
    //           alignItems: 'center',
    //           backgroundColor: 'white',
    //           borderRadius: 25,
    //           elevation: 30,
    //           marginBottom: 20,
    //         }}
    //         onPress={changePass}>
    //         <Icon
    //           name="key"
    //           size={30}
    //           color="red"
    //           style={{
    //             paddingLeft: 20,
    //             paddingBottom: 10,
    //             paddingTop: 10,
    //             paddingRight: 20,
    //           }}
    //         />
    //         <Text style={{color: 'black', fontSize: 20}}>Đổi mật khẩu</Text>
    //       </TouchableOpacity>
    //       {change === true && (
    //         <View
    //           style={{
    //             backgroundColor: 'white',
    //             marginBottom: 20,
    //             borderRadius: 20,
    //           }}>
    //           <View style={{position: 'relative', marginTop: 20}}>
    //             <TextInput
    //               onChangeText={text => {
    //                 setPassOld(text);
    //               }}
    //               secureTextEntry={hiddenPassOld ? true : false}
    //               style={{
    //                 height: 40,
    //                 width: '80%',
    //                 borderWidth: 1,
    //                 padding: 10,
    //                 backgroundColor: '#e6e6e6',
    //                 color: 'black',
    //                 borderRadius: 10,
    //                 marginHorizontal: '10%',
    //                 marginBottom: 10,
    //                 paddingRight: 40,
    //               }}
    //               placeholder="Mật Khẩu cũ"
    //               placeholderTextColor={'black'}
    //             />
    //             <TouchableOpacity
    //               style={{position: 'absolute', top: 10, right: '13%'}}
    //               onPress={() => {
    //                 setHiddenPassOld(!hiddenPassOld);
    //                 setIconHiddenPassOld(
    //                   hiddenPassOld === true ? 'eye' : 'eye-with-line',
    //                 );
    //               }}>
    //               <Icon name={iconHiddenPassOld} size={20} color="black" />
    //             </TouchableOpacity>
    //           </View>
    //           <View style={{position: 'relative'}}>
    //             <TextInput
    //               onChangeText={text => {
    //                 setPassNew(text);
    //               }}
    //               secureTextEntry={hiddenPassNew ? true : false}
    //               style={{
    //                 height: 40,
    //                 width: '80%',
    //                 borderWidth: 1,
    //                 padding: 10,
    //                 backgroundColor: '#e6e6e6',
    //                 color: 'black',
    //                 borderRadius: 10,
    //                 marginHorizontal: '10%',
    //                 marginBottom: 10,
    //               }}
    //               placeholder="Mật Khẩu mới"
    //               placeholderTextColor={'black'}
    //             />
    //             <TouchableOpacity
    //               style={{position: 'absolute', top: 10, right: '13%'}}
    //               onPress={() => {
    //                 setHiddenPassNew(!hiddenPassNew);
    //                 setIconHiddenPassNew(
    //                   hiddenPassNew === true ? 'eye' : 'eye-with-line',
    //                 );
    //               }}>
    //               <Icon name={iconHiddenPassNew} size={20} color="black" />
    //             </TouchableOpacity>
    //           </View>
    //           <View style={{position: 'relative'}}>
    //             <TextInput
    //               onChangeText={text => {
    //                 setPass(text);
    //               }}
    //               secureTextEntry={hiddenPass ? true : false}
    //               style={{
    //                 height: 40,
    //                 width: '80%',
    //                 borderWidth: 1,
    //                 padding: 10,
    //                 backgroundColor: '#e6e6e6',
    //                 color: 'black',
    //                 borderRadius: 10,
    //                 marginHorizontal: '10%',
    //               }}
    //               placeholder="Nhập lại mật khẩu mới"
    //               placeholderTextColor={'black'}
    //             />
    //             <TouchableOpacity
    //               style={{position: 'absolute', top: 10, right: '13%'}}
    //               onPress={() => {
    //                 setHiddenPass(!hiddenPass);
    //                 setIconHiddenPass(
    //                   hiddenPass === true ? 'eye' : 'eye-with-line',
    //                 );
    //               }}>
    //               <Icon name={iconHiddenPass} size={20} color="black" />
    //             </TouchableOpacity>
    //           </View>
    //           <TouchableOpacity
    //             style={{
    //               width: '60%',
    //               height: 50,
    //               marginHorizontal: '20%',
    //               backgroundColor: 'yellow',
    //               marginVertical: 20,
    //               borderRadius: 25,
    //               display: 'flex',
    //               justifyContent: 'center',
    //             }}
    //             onPress={() => {
    //               Alert.alert(
    //                 'Đổi mật khẩu!',
    //                 'Bạn có chắc chắn muốn đổi mật khẩu?',
    //                 [
    //                   {
    //                     text: 'KHÔNG',
    //                     onPress: () => null,
    //                     style: 'cancel',
    //                   },
    //                   {text: 'CÓ', onPress: () => setChange(!change)},
    //                 ],
    //               );
    //             }}>
    //             <Text
    //               style={{
    //                 textAlign: 'center',
    //                 color: '#333',
    //                 fontWeight: 'bold',
    //               }}>
    //               Đổi mật khẩu
    //             </Text>
    //           </TouchableOpacity>
    //         </View>
    //       )}
    //       <TouchableOpacity
    //         style={{
    //           display: 'flex',
    //           flexDirection: 'row',
    //           alignItems: 'center',
    //           backgroundColor: 'white',
    //           borderRadius: 25,
    //           elevation: 30,
    //         }}
    //         onPress={logout}>
    //         <Icon
    //           name="log-out"
    //           size={30}
    //           color="red"
    //           style={{
    //             paddingLeft: 20,
    //             paddingBottom: 10,
    //             paddingTop: 10,
    //             paddingRight: 20,
    //           }}
    //         />
    //         <Text style={{color: 'black', fontSize: 20}}>Đăng xuất</Text>
    //       </TouchableOpacity>
    //     </View>
    //   </View>
    //   <TabNavBar setting={true} />
    // </View>
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
      {changeLang === true && (
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(37, 25, 25, 0.4)',
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',
          }}>
          <LinearGradient
            colors={[
              color.backgroundColor1,
              color.backgroundColor1,
              color.backgroundColor2,
            ]}
            style={{
              width: width * 0.8,
              // height: 200,
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: '#cccccc',
              top: height * 0.2,
              borderRadius: 20,
              position: 'relative',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{
                  // backgroundColor: 'red',
                  marginLeft: 20,
                  marginVertical: 10,
                }}>
                <Text style={{fontSize: 22, color: color.textLightColor}}>
                  {lang === 'vn' ? 'Tiếng Việt' : 'Vietnamese'}
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: lang === 'vn' ? '#1f86e4' : 'white',
                  marginRight: 20,
                  postion: 'relative',
                  borderRadius: 10,
                  borderWidth: 1,
                }}
                onPress={() => setLang('vn')}>
                <View />
              </TouchableOpacity>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{
                  // backgroundColor: 'red',
                  marginLeft: 20,
                  marginVertical: 10,
                }}>
                <Text style={{fontSize: 22, color: color.textLightColor}}>
                  {lang === 'vn' ? 'Tiếng Anh' : 'English'}
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: lang === 'eng' ? '#1f86e4' : 'white',
                  marginRight: 20,
                  borderRadius: 10,
                  borderWidth: 1,
                }}
                onPress={() => setLang('eng')}>
                <View />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{
                // marginLeft: 190,
                borderWidth: 1,
                borderColor: color.textLightColor,
                marginBottom: 20,
                marginTop: 10,
                marginHorizontal: 90,
                borderRadius: 10,
                minWidth: 70,
              }}
              onPress={pressChangeLang}>
              <Text
                style={{
                  fontSize: 20,
                  marginHorizontal: 10,
                  marginVertical: 10,
                  color: color.textLightColor,
                  textAlign: 'center',
                }}>
                {lang === 'vn' ? 'Xác nhận' : 'OKAY'}
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      )}
      {changeColor === true && (
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(37, 25, 25, 0.4)',
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',
          }}>
          <LinearGradient
            colors={[
              color.backgroundColor1,
              color.backgroundColor1,
              color.backgroundColor2,
            ]}
            style={{
              width: width * 0.8,
              // height: 200,
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: '#cccccc',
              top: height * 0.2,
              borderRadius: 20,
              position: 'relative',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{
                  // backgroundColor: 'red',
                  marginLeft: 20,
                  marginVertical: 10,
                }}>
                <Text style={{fontSize: 22, color: color.textLightColor}}>
                  {lang === 'vn' ? 'Chế độ sáng' : 'Light Mode'}
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: mode === 'light' ? '#1f86e4' : 'white',
                  marginRight: 20,
                  postion: 'relative',
                  borderRadius: 10,
                  borderWidth: 1,
                }}
                onPress={() => setMode('light')}>
                <View />
              </TouchableOpacity>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{
                  // backgroundColor: 'red',
                  marginLeft: 20,
                  marginVertical: 10,
                }}>
                <Text style={{fontSize: 22, color: color.textLightColor}}>
                  {lang === 'vn' ? 'Chế độ tối' : 'Dark Mode'}
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: mode === 'dark' ? '#1f86e4' : 'white',
                  marginRight: 20,
                  borderRadius: 10,
                  borderWidth: 1,
                }}
                onPress={() => setMode('dark')}>
                <View />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{
                // marginLeft: 190,
                borderWidth: 1,
                borderColor: color.textLightColor,
                marginBottom: 20,
                marginTop: 10,
                marginHorizontal: 90,
                borderRadius: 10,
                minWidth: 70,
              }}
              onPress={pressChangeColor}>
              <Text
                style={{
                  fontSize: 20,
                  marginHorizontal: 10,
                  marginVertical: 10,
                  color: color.textLightColor,
                  textAlign: 'center',
                }}>
                {lang === 'vn' ? 'Xác nhận' : 'OKAY'}
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      )}
      <View
        style={{
          marginTop: height * 0.063,
          marginLeft: width * 0.06,
          marginRight: width * 0.06,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 22,
            color: color.textLightColor,
          }}>
          {lang === 'vn' ? 'Tài khoản' : 'User'}
        </Text>
      </View>
      <TouchableOpacity onPress={pressSetting}>
        <LinearGradient
          colors={[color.backgroundChartColor1, color.backgroundChartColor1]}
          style={{
            marginTop: height * 0.063,
            marginLeft: width * 0.06,
            marginRight: width * 0.06,
            height: 60,
            // borderWidth: 1,
            // borderColor: color.iconColor,
            borderRadius: 25,
            elevation: 15,
            shadowColor: color.iconColor,
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{marginLeft: 20, display: 'flex', flexDirection: 'row'}}>
            <AntDesign
              name="setting"
              size={30}
              color={color.textLightColor}
              style={{marginRight: 20}}
            />
            <Text style={{fontSize: 20, color: color.textLightColor}}>
              {lang === 'vn' ? 'Cài đặt' : 'Setting'}
            </Text>
          </View>
          <AntDesign
            name={setting === true ? 'caretup' : 'caretdown'}
            size={20}
            color={color.textLightColor}
            style={{marginRight: 20}}
          />
        </LinearGradient>
      </TouchableOpacity>
      {setting === true && (
        <View>
          <TouchableOpacity onPress={() => setChangeColor(true)}>
            <LinearGradient
              colors={[
                color.backgroundChartColor1,
                color.backgroundChartColor1,
              ]}
              style={{
                marginTop: height * 0.03,
                marginLeft: width * 0.1,
                marginRight: width * 0.1,
                height: 40,
                borderWidth: 1,
                borderColor: color.textDarkColor,
                borderRadius: 25,
                elevation: 15,
                shadowColor: color.iconColor,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View
                style={{marginLeft: 20, display: 'flex', flexDirection: 'row'}}>
                <Text style={{fontSize: 20, color: color.textDarkColor}}>
                  {lang === 'vn'
                    ? 'Đổi màu giao diện'
                    : 'Change Interface Color'}
                </Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setChangeLang(true)}>
            <LinearGradient
              colors={[
                color.backgroundChartColor1,
                color.backgroundChartColor1,
              ]}
              style={{
                marginTop: height * 0.03,
                marginLeft: width * 0.1,
                marginRight: width * 0.1,
                height: 40,
                borderWidth: 1,
                borderColor: color.textDarkColor,
                borderRadius: 25,
                elevation: 15,
                shadowColor: color.iconColor,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View
                style={{marginLeft: 20, display: 'flex', flexDirection: 'row'}}>
                <Text style={{fontSize: 20, color: color.textDarkColor}}>
                  {lang === 'vn' ? 'Đổi ngôn ngữ' : 'Change Languages'}
                </Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity>
            <LinearGradient
              colors={[
                color.backgroundChartColor1,
                color.backgroundChartColor1,
              ]}
              style={{
                marginTop: height * 0.03,
                marginLeft: width * 0.1,
                marginRight: width * 0.1,
                height: 40,
                borderWidth: 1,
                borderColor: color.textDarkColor,
                borderRadius: 25,
                elevation: 15,
                shadowColor: color.iconColor,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View
                style={{marginLeft: 20, display: 'flex', flexDirection: 'row'}}>
                <Text style={{fontSize: 20, color: color.textDarkColor}}>
                  {lang === 'vn' ? 'Báo cáo sự cố' : 'Report Problem'}
                </Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity>
            <LinearGradient
              colors={[
                color.backgroundChartColor1,
                color.backgroundChartColor1,
              ]}
              style={{
                marginTop: height * 0.03,
                marginLeft: width * 0.1,
                marginRight: width * 0.1,
                height: 40,
                borderWidth: 1,
                borderColor: color.textDarkColor,
                borderRadius: 25,
                elevation: 15,
                shadowColor: color.iconColor,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View
                style={{marginLeft: 20, display: 'flex', flexDirection: 'row'}}>
                <Text style={{fontSize: 20, color: color.textDarkColor}}>
                  {lang === 'vn'
                    ? 'Điều khoản và chính sách'
                    : 'Terms and Policies'}
                </Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      )}
      <TouchableOpacity>
        <LinearGradient
          colors={[color.backgroundChartColor1, color.backgroundChartColor1]}
          style={{
            marginTop: height * 0.03,
            marginLeft: width * 0.06,
            marginRight: width * 0.06,
            height: 60,
            // borderWidth: 1,
            // borderColor: color.iconColor,
            borderRadius: 25,
            elevation: 15,
            shadowColor: color.iconColor,
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{marginLeft: 20, display: 'flex', flexDirection: 'row'}}>
            <AntDesign
              name="key"
              size={30}
              color={color.textLightColor}
              style={{marginRight: 20}}
            />
            <Text style={{fontSize: 20, color: color.textLightColor}}>
              {lang === 'vn' ? 'Đổi mật khẩu' : 'Change Password'}
            </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity onPress={logout}>
        <LinearGradient
          colors={[color.backgroundChartColor1, color.backgroundChartColor1]}
          style={{
            marginTop: height * 0.03,
            marginLeft: width * 0.06,
            marginRight: width * 0.06,
            height: 60,
            // borderWidth: 1,
            // borderColor: color.iconColor,
            borderRadius: 25,
            elevation: 15,
            shadowColor: color.iconColor,
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{marginLeft: 20, display: 'flex', flexDirection: 'row'}}>
            <AntDesign
              name="logout"
              size={30}
              color="red"
              style={{marginRight: 20}}
            />
            <Text style={{fontSize: 20, color: color.textLightColor}}>
              {lang === 'vn' ? 'Thoát tài khoản' : 'Log Out'}
            </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
      <TabNavBar setting={true} />
    </LinearGradient>
  );
};

export default Profile;
