import React, {Component} from 'react';
import {Platform, StyleSheet, View,TextInput,TouchableOpacity,Text} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class SKLogin extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style = {[styles.userInput,styles.marginStyle]}
                    placeholder = "请输入您的用户名"
                />
                <TextInput
                    style = {[styles.pwdInput,styles.marginStyle]}
                    placeholder = "请输入您的密码"
                />
                <View
                  style = {styles.regist}
                >
                    <TouchableOpacity
                        style={styles.registBtn}
                        onPress={this.registAccount()}
                    >
                        <Text> 免费注册 </Text>
                    </TouchableOpacity>


                    <TouchableOpacity
                        style={styles.forgetpwdBtn}
                        onPress={this.forgetPwd()}
                    >
                        <Text> 忘记密码 </Text>
                    </TouchableOpacity>

                </View>


            </View>
        );
    }

    registAccount(){
        alert("去注册账户")
    }

    forgetPwd(){
        alert('去修改密码')
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    userInput:{
        marginTop:100,
    },

    pwdInput:{
        marginTop:10,
    },

    marginStyle:{
        marginLeft:20,
        marginRight:20,
        height:40,
        borderBottomColor:'#000000',
        borderBottomWidth:0.8,

    },

    regist:{
        marginTop:5,
        height:30,
        flexDirection:'row',
        backgroundColor:'#FF6EB4',
    },

    registBtn:{
        marginLeft:20,
        width:100,
        height:30,
    },

    forgetpwdBtn:{
        marginRight:20,
        width:100,
        height:30,
    }




});
