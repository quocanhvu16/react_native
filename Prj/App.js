import {React} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainStackNavigator} from './navigation/StackNavigator';
import BottomTabNavigator from './navigation/TabNavigator';
//import DrawerNavigator from './navigation/DrawerNavigator';
import Living from './screens/user/livingroom';
import RoomName from './components/user/RoomName';
import LivingRoom from './screens/user/livingroom';
export default function App() {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
    // <LivingRoom />
  );
}
