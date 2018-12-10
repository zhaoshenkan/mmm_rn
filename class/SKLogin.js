import React, {Component} from 'react';
import {Platform, StyleSheet, View,TextInput,TouchableOpacity,Text,AsyncStorage} from 'react-native';
import test from '../common/test';
import skHttpRequest from "../common/skHttpRequest";


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class SKLogin extends Component<Props> {

    static navigationOptions = {
        title:'登录',
    };

    constructor(props) {
        super(props);
        this.state = {
            account: '',
            pwd:''
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style = {[styles.userInput,styles.marginStyle]}
                    placeholder = "请输入您的用户名"
                    onChangeText = {(Text) => {this._account(Text)}}
                />
                <TextInput
                    style = {[styles.pwdInput,styles.marginStyle]}
                    placeholder = "请输入您的密码"
                    onChangeText = {(pwd) => {this.state.pwd = pwd}}

                />
                <View
                  style = {styles.regist}
                >
                    <TouchableOpacity
                        style={styles.registBtn}
                        onPress={()=> {this.registAccount()}}
                    >
                        <Text style={styles.textStyle}>
                            免费注册
                        </Text>
                    </TouchableOpacity>


                    <TouchableOpacity
                        style={styles.forgetpwdBtn}
                        onPress={()=> {this.forgetPwd()}}
                    >
                        <Text style={[styles.textStyle,styles.alignStyle]}> 忘记密码 </Text>
                    </TouchableOpacity>

                </View>

                <TouchableOpacity
                    style={styles.login}
                    onPress={()=>{this.doLogin()}}
                >
                    <Text style={styles.loginTitle}>登录</Text>
                </TouchableOpacity>


            </View>
        );
    }

    registAccount(){
       alert('去注册账号')
    }

    forgetPwd(){
        alert('去修改密码')
    }

    _account(text){
        this.state.account = text;
    }

    doLogin(){

        console.log(this.state.account);
        console.log(this.state.pwd);

        let parmas = {
            'userName': this.state.account,
            'password': this.state.pwd,
            'captcha': 'iDn2CDECMyb6z0IqPQlypAyKbkvqaEax',
            'platform': '1',
            'version': '1.0.0',
        }

        let httpRequest = new  skHttpRequest();
        httpRequest.postRequest('/api/login',parmas,(response) => {
            console.log(response);
            if (response.isSuccess === true) {
                AsyncStorage.setItem('token', response.data['token'], function (error) {
                    if (error) {
                        alert('存储失败')
                    }else {
                        alert('存储完成')
                    }
                })
            }
        });

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        justifyContent: 'space-between',
    },

    registBtn:{
        width:100,
        height:30,
        marginLeft:20,
    },

    forgetpwdBtn:{
        marginRight:20,
        width:100,
        height:30,
    },

    textStyle:{
        lineHeight:30,
    },

    alignStyle:{
        textAlign: 'right',
    },

    login:{
        backgroundColor: '#00FFFF',
        height:40,
        marginLeft: 20,
        marginRight: 20,
        marginTop:100,
        borderRadius:4,


    },

    loginTitle:{
        color:'#000000',
        lineHeight: 40,
        textAlign: 'center',

    },

});
