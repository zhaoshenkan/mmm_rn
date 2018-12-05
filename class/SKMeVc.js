import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,ScrollView,Image,ImageBackground} from 'react-native';
import SKConstant from "../common/SKConstant";
import {Dimensions} from 'react-native';

export default class SKMeVc extends Component {
    
    static navigationOptions = {
        title:'我的',
        // header:null,
    };
    
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <ImageBackground
                        style = {styles.headView}
                        source = {require('../image/minebanner.png')}>
                        <Image style = {styles.avatar}/>
                        <View style = {styles.textView}>
                            <Text style={styles.headText}>赵申侃</Text>
                            <Text style={styles.headText}>已认证</Text>
                        </View>
                    </ImageBackground>

                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#4CFFE7',
    },

    scrollView:{
        flex:1,
        backgroundColor:'#8A84FF',
        flexDirection: 'column',
    },

    headView:{
        width:SKConstant.kScreenWidth,
        height:150,
        backgroundColor:'#51FF7F',
        flexDirection:'row',
    },

    avatar:{
        width:75,
        height:75,
        marginLeft:20,
        marginTop:30,
        borderRadius:75/2,
        backgroundColor: '#FF4A6A',
    },

    textView:{
        marginLeft:30,
        marginTop:40,
    },

    headText:{
        color: '#ffffff',
        fontSize:16,
        height:30,
    },

});
