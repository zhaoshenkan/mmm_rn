import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
import SkHomeVc from "./SkHomeVc";
import SKMeVc from "./SKMeVc";
import TabNavigator from 'react-native-tab-navigator';
import SKMeNavigationVc from './SKMeNavigationVc';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import SKHomeNavigationVc from "./SKHomeNavigationVc";
import SKCatergory from "./SKCatergory";
import SKCategoryNavigation from "./SKCategoryNavigation";
import SKShopCartNavigation from "./SKShopCartNavigation";
import SKConstant from "../common/SKConstant";

const homeIcon = require('../image/tabbar/home.png');
const homeIconSelect = require('../image/tabbar/home_select.png');
const catergoryIcon = require('../image/tabbar/classification.png');
const catergorySelectIcon = require('../image/tabbar/classification_select.png');
const shopCartIcon = require('../image/tabbar/shopping_cart.png');
const shopCartSelectIcon = require('../image/tabbar/shopping_cart_select.png');
const mineIcon = require('../image/tabbar/personal.png');
const mineSelectIcon = require('../image/tabbar/personal_select.png');

const SKTabbarVc = createBottomTabNavigator(
    {
        首页: {screen:SKHomeNavigationVc},
        分类:{screen:SKCategoryNavigation},
        购物车:{screen:SKShopCartNavigation},
        我的: {screen:SKMeNavigationVc},
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === '首页') {
                    iconName =  focused ? homeIconSelect:homeIcon;
                } else if (routeName === '分类') {
                    iconName =  focused ? catergorySelectIcon:catergoryIcon;
                } else if (routeName === '购物车') {
                    iconName =  focused ? shopCartSelectIcon:shopCartIcon;
                } else if (routeName === '我的') {
                    iconName =  focused ? mineSelectIcon:mineIcon;
                }
                return <Image style={styles.tabbarImage} source={iconName} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: SKConstant.appThemeColor,
            inactiveTintColor: 'gray',
        },
    },


);

export default createAppContainer(SKTabbarVc);


const styles = StyleSheet.create({

    tabbarImage:{
        width:25,
        height:25,
        marginBottom:-3,
    },
})