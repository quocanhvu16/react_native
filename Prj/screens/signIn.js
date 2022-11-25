import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    Button,
    Dimensions,
  } from 'react-native';
  import React from 'react';
  
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  
  const background = {
    uri: 'https://w7.pngwing.com/pngs/235/933/png-transparent-blue-blue-abstract-graphics-blue-background-texture-angle-triangle.png',
  };
  const image = {
    uri: 'https://play-lh.googleusercontent.com/j2zV7iXJAQnxrWBCG8rhujQDZ0peiCwlEthTlCrR5Uoumge9ZL9wjxs0ooUd2jtkSbg=w600-h300-pc0xffffff-pd',
  };
  const user = {
    uri: 'https://cdn-icons-png.flaticon.com/512/25/25634.png',
  };
  const pass = {
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ4RGghRmM4WGtYh7ptc7w59YZhVy4kurv-Q&usqp=CAU',
  };
  
  const SignIn = ({ navigation }) => {
        return (
          <View style={styles.container}>
            <ImageBackground
              source={background}
              resizeMode="cover"
              style={styles.background}>
              <View style={styles.top}>
                <Image source={image} style={styles.image} />
                <Text style={styles.smarthome}>SMART HOME</Text>
              </View>
              <View style={{marginTop: 50, marginHorizontal: 30}}>
                <View style={styles.input_text}>
                  <Image source={user} style={styles.icon} />
                  <TextInput
                    style={[styles.input, {marginBottom: 20}]}
                    placeholder="Số điện thoại"
                    keyboardType="numeric"
                    placeholderTextColor={'black'}
                  />
                </View>
                <View style={styles.input_text}>
                  <Image source={pass} style={styles.icon} />
                  <TextInput
                    secureTextEntry
                    style={[styles.input, {marginBottom: 20}]}
                    placeholder="Mật Khẩu"
                    placeholderTextColor={'black'}
                  />
                </View>
                <Text style={styles.forgetpass}>Quên mật khẩu ?</Text>
              </View>

              <View style={styles.button1}>
                <Button title="Đăng nhập" color="#3f6eb9" />
              </View>
              <View style={styles.button2}>
                <Button title="Đăng ký" color="#f03b2c" onPress={() => navigation.navigate('SignUp')} />
              </View>
            </ImageBackground>
          </View>
        );
    
  }
  
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
      marginTop: 150,
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