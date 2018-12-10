import {createAppContainer, createStackNavigator} from "react-navigation";
import SkHomeVc from "./SkHomeVc";
import SKLogin from "./SKLogin";
import SKCatergory from "./SKCatergory";

const SKCategoryNavigation = createStackNavigator({
        catergory:SKCatergory,
        login:SKLogin,

    },
    {
        initialRouteName: 'catergory',
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

export default createAppContainer(SKCategoryNavigation);