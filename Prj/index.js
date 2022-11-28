import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Navbar from './components/user/NavBar';
import Dashboard from './screens/user/dashboard';

AppRegistry.registerComponent(appName, () => Dashboard);
