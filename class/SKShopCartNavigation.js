import {createAppContainer, createStackNavigator} from "react-navigation";
import SkHomeVc from "./SkHomeVc";
import SKLogin from "./SKLogin";
import SKCatergory from "./SKCatergory";
import SKShopCartVc from "./SKShopCartVc";

const SKShopCartNavigation = createStackNavigator({
        shopcart:SKShopCartVc,
        login:SKLogin,
    },
    {
        initialRouteName: 'shopcart',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#3192F4',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);

export default createAppContainer(SKShopCartNavigation);