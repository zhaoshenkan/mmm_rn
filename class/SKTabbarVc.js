import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
import SkHomeVc from "./SkHomeVc";
import SKMeVc from "./SKMeVc";
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import SKCatergory from "./SKCatergory";
import SKConstant from "../common/SKConstant";
import SKShopCartVc from "./SKShopCartVc";


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
        首页: {
            screen:SkHomeVc,
        },
        分类:{screen:SKCatergory},
        购物车:{screen:SKShopCartVc},
        我的: {screen:SKMeVc},
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
            header:'haha',
        }),
        tabBarOptions: {
            activeTintColor: SKConstant.appThemeColor,
            inactiveTintColor: 'gray',
        },

        navigation:{
            header: '哈哈',
        }
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


