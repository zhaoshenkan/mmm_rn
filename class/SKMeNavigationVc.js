
import React from 'react';
import { createStackNavigator,createAppContainer } from 'react-navigation';
import SKMeVc from "./SKMeVc";
import SKShopCartVc from "./SKShopCartVc";

const SKMeNavigationVc = createStackNavigator({
    Home:SKMeVc,
    shopCart:SKShopCartVc,
},
    {
        initialRouteName: 'Home',
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


