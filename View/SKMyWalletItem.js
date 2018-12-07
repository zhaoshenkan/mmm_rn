import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
import {Dimensions} from 'react-native'
import SKConstant from "../common/SKConstant";

type Props = {
    topTitle:string,
    bottomTitle:string,
};
export default class SKMyWalletItem extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={[styles.text,styles.top]}>
                    {this.props.topTitle}
                </Text>
                <Text style={[styles.text,styles.bottom]}>
                    {this.props.bottomTitle}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        justifyContent:'center',
        flexDirection: 'column',
        width:SKConstant.kScreenWidth/4,
        height: SKConstant.viewHeight(60),
        backgroundColor:'#ffffff'
    },

    text:{
        color:'#333333',
        fontSize:SKConstant.kFontSize(15),
        textAlign: 'center',
    },

    top:{
        flex:3,
        paddingTop: 10
    },

    bottom:{
        flex:2
    },

});