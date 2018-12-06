import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import SkHomeVc from "./SkHomeVc";
import SKMeVc from "./SKMeVc";
import TabNavigator from 'react-native-tab-navigator';
import SKMeNavigationVc from './SKMeNavigationVc';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

const SKTabbarVc = createBottomTabNavigator({

    Home: SkHomeVc,
    Me:SKMeNavigationVc,
});

export default createAppContainer(SKTabbarVc);


// export default class SKTabbarVc extends Component {
//
// //     state= {
// //         selectedTab: 'home'
// //     };
// //
// //     render() {
// //         return (
// //             <TabNavigator>
// //                 <TabNavigator.Item
// //                     selected={this.state.selectedTab === 'home'}
// //                     title="首页"
// //                     onPress={() => this.setState({ selectedTab: 'home' })}>
// //                     <SkHomeVc/>
// //                 </TabNavigator.Item>
// //                 <TabNavigator.Item
// //                     selected={this.state.selectedTab === 'profile'}
// //                     title="我的"
// //                     onPress={() => this.setState({ selectedTab: 'profile' })}>
// //                     <SKMeNavigationVc/>
// //                 </TabNavigator.Item>
// //             </TabNavigator>
// //         );
// //     }
// // }
// //
// // const styles = StyleSheet.create({
// //     container: {
// //         flex: 1,
// //         justifyContent: 'center',
// //         alignItems: 'center',
// //         backgroundColor: '#535FFF',
// //     },
// //     welcome: {
// //         fontSize: 20,
// //         textAlign: 'center',
// //         margin: 10,
// //     },
// //     instructions: {
// //         textAlign: 'center',
// //         color: '#333333',
// //         marginBottom: 5,
// //     },
// });