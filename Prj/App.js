import {React} from 'react';
import SignIn from './screens/signIn';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './screens/signUp';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, animation: 'slide_from_right' }} >
        <Stack.Screen name='SignIn' component={ SignIn } />
        <Stack.Screen name='SignUp' component={ SignUp } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

