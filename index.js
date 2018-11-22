/** @format */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import SKLogin from './class/SKLogin';
import SkHomeVc from "./class/SkHomeVc";
import SKTabbarVc from "./class/SKTabbarVc";
import SKMeNavigationVc from "./class/SKMeNavigationVc";
import App from "./App";

AppRegistry.registerComponent(appName, () => SKTabbarVc);
