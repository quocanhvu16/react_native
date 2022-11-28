/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Navbar from './components/user/NavBar';

AppRegistry.registerComponent(appName, () => Navbar);
