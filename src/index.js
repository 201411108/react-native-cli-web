/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import appInfo from './app.json';

const {appName} = appInfo;

AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, {
  rootTag: document.getElementById('root'),
});
