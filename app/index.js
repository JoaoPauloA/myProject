/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import {AppRegistry} from 'react-native';
import App from './src';
import {name as appName} from './app.json';
import "./src/config/StatusBarConfig"

AppRegistry.registerComponent(appName, () => App);
