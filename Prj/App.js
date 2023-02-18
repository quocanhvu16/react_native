import {React} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainStackNavigator} from './navigation/StackNavigator';
import BottomTabNavigator from './navigation/TabNavigator';
//import DrawerNavigator from './navigation/DrawerNavigator';
import Living from './screens/user/livingroom';
import RoomName from './components/user/RoomName';
import LivingRoom from './screens/user/livingroom';
import store from './redux/store';
import {Provider} from 'react-redux';
import Dashboard from './screens/user/dashboard';
import NavBar from "./components/user/NavBar";
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStackNavigator />
        {/*<Dashboard />*/}
        {/*<NavBar />*/}
      </NavigationContainer>
    </Provider>
    // <NavigationContainer>
    //   <MainStackNavigator />
    // </NavigationContainer>
    // <LivingRoom />
  );
}
