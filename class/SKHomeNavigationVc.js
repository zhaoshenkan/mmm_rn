import React from 'react';
import { createStackNavigator,createAppContainer } from 'react-navigation';
import SKLogin from "./SKLogin";
import SkHomeVc from "./SkHomeVc";

const SKHomeNavigationVc = createStackNavigator({
        Home:SkHomeVc,
        Login:SKLogin,
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

export default createAppContainer(SKHomeNavigationVc);