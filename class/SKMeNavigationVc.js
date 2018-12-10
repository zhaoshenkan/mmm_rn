
import React from 'react';
import { createStackNavigator,createAppContainer } from 'react-navigation';
import SKMeVc from "./SKMeVc";
import SKShopCartVc from "./SKShopCartVc";
import SKLogin from "./SKLogin";

const SKMeNavigationVc = createStackNavigator({
    Me:SKMeVc,
    Login:SKLogin,
},
    {
        initialRouteName: 'Me',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);

export default createAppContainer(SKMeNavigationVc);


