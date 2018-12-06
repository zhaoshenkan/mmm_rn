import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
import {Dimensions} from 'react-native'
import SKConstant from "../common/SKConstant";

type Props = {
    productImg:string,
    productName:string,
    price:string,
};
export default class SKActivityProductItem extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.icon}
                       source={ this.props.img }/>
                <Text style={styles.productName}>
                    {this.props.productName}
                </Text>
                <Text style={styles.price}>
                    {this.props.price}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor:'#ffffff'
    },

    topView:{
        flex:4,
        justifyContent: 'center',
        alignItems: 'center',
    },

    icon:{
        resizeMode:'contain',
        width:100,
        height:100,
        backgroundColor: '#FF383D',
    },

    productName:{
        color:'#333333',
        fontSize:SKConstant.kFontSize(15),
        textAlign: 'center',
        flexWrap: 'wrap',
        marginLeft: 20,
        marginRight: 20,
    },

    price:{
        color:'#FF383D',
        fontSize: SKConstant.kFontSize(13),
        marginLeft: 20,
        marginRight: 20,
    },


});
