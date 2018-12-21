import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class SKShopCartVc extends Component<Props> {

    static navigationOptions = {
        title:'购物车',
    };

    render() {
        return (
            <View style={styles.container}>

                <TouchableOpacity
                    style={styles.loginView}
                    onPress={()=> {
                        this._toLogin()
                    }}
                >
                    <Text > 登录 </Text>
                </TouchableOpacity>

            </View>
        );
    }

    _toLogin(){
        this.props.navigation.navigate('Login');
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFDAB9',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },

    loginView:{

        width:100,
        height:40,
        backgroundColor:'#64FFA4',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
