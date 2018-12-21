import React from 'react';
import { createStackNavigator,createAppContainer } from 'react-navigation';
import SKMeVc from "./SKMeVc";
import SKShopCartVc from "./SKShopCartVc";
import SKLogin from "./SKLogin";
import SKOrderListVc from "./SKOrderListVc";
import SKTabbarVc from "./SKTabbarVc";
import SKConstant from "../common/SKConstant";
import {Image} from "react-native";

const SKNavigationVc = createStackNavigator(
    {
        MainTabbar:{
            screen:SKTabbarVc,
        },
        Me:SKMeVc,
        Login:SKLogin,
        OrderList:SKOrderListVc,
    },
    {
        initialRouteName: 'MainTabbar',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: SKConstant.appThemeColor,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize:20,
            },

        },
    }
);

export default createAppContainer(SKNavigationVc);
