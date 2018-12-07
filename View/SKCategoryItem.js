import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
import {Dimensions} from 'react-native'
import SKConstant from "../common/SKConstant";

type Props = {
    img:string,
    title:string,
};
export default class SKOrderItem extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topView}>
                    <Image style={styles.icon}
                           source={ this.props.img }
                    />
                </View>
                <Text style={styles.text}>
                    {this.props.title}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'column',
        width:SKConstant.kScreenWidth/4,
        height: SKConstant.kScreenWidth/5,
        backgroundColor:'#ffffff'
    },

    topView:{
        flex:3,
        justifyContent: 'center',
        alignItems: 'center',
    },

    icon:{
        resizeMode:'contain',
        width: SKConstant.viewWidth(30),
        height: SKConstant.viewWidth(30),
        // backgroundColor: '#FF1E4A'
    },

    text:{
        color:'#333333',
        fontSize:SKConstant.kFontSize(14),
        flex:1,
        textAlign: 'center',
    },

});