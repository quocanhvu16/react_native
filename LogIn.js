/* eslint-disable react-native/no-inline-styles */
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Button,
} from 'react-native';
import {React} from 'react';

const background = {
  uri: 'https://w7.pngwing.com/pngs/235/933/png-transparent-blue-blue-abstract-graphics-blue-background-texture-angle-triangle.png',
};
const image = {
  uri: 'https://play-lh.googleusercontent.com/j2zV7iXJAQnxrWBCG8rhujQDZ0peiCwlEthTlCrR5Uoumge9ZL9wjxs0ooUd2jtkSbg=w600-h300-pc0xffffff-pd',
};

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={background} style={styles.background}>
        <View style={styles.top}>
          <Image source={image} style={styles.image} />
          <Text style={styles.smarthome}>SMART HOME</Text>
        </View>
        <View style={{marginTop: 50, marginHorizontal: 40}}>
          <TextInput
            style={[styles.input, {marginBottom: 15}]}
            placeholder="Số điện thoại"
            keyboardType="numeric"
            placeholderTextColor={'black'}
          />
          <TextInput
            secureTextEntry
            style={styles.input}
            placeholder="Mật Khẩu"
            placeholderTextColor={'black'}
          />
          <Text style={styles.forgetpass}>Quên mật khẩu ?</Text>
        </View>
        <View style={styles.button1}>
          <Button title="Đăng nhập" color="#3f6eb9" />
        </View>
        <View style={styles.button2}>
          <Button title="Đăng ký" color="#3f6eb9" />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'black',
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
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
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 10,
  },
  forgetpass: {
    fontSize: 15,
    color: 'black',
    marginTop: 10,
    alignSelf: 'flex-end',
  },
  button1: {
    marginHorizontal: 120,
    paddingTop: 30,
  },
  button2: {
    marginHorizontal: 120,
    paddingTop: 20,
  },
});
