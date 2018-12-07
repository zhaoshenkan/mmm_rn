import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
import {Dimensions} from 'react-native'
import SKConstant from "../common/SKConstant";

type Props = {
    productImg:string,
    productName:string,
    price:string,
};
export default class SKRecommondProductItem extends Component<Props> {

    render() {

        return (
            <View style={styles.container}>
                <Image style={styles.icon}
                       source={ this.props.productImg}
                />
                <Text style={styles.productName} numberOfLines={2} >
                    {this.props.productName }
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
        flexDirection: 'column',
        backgroundColor:'#ffffff',
        alignItems: 'center',
        width:SKConstant.kScreenWidth/2 - 1,
        height: SKConstant.kScreenWidth/2 - 20 + SKConstant.viewWidth(60),
    },

    icon:{
        resizeMode:'contain',
        width:SKConstant.kScreenWidth/2 - 20,
        height:SKConstant.kScreenWidth/2 - 20,
    },

    productName:{
        color:'#333333',
        fontSize:SKConstant.kFontSize(13),
        flexWrap:'wrap',
        marginTop:SKConstant.viewWidth(10),
        height:SKConstant.viewWidth(33),
        marginLeft: 10,
        marginRight: 10,
    },

    price:{
        color:'#FF383D',
        fontSize: SKConstant.kFontSize(13),
        marginLeft: 10,
        alignSelf: 'flex-start',
    },


});