import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,Image} from 'react-native';
import SKConstant from "../common/SKConstant";

type Props = {
    orderNo:string,
    productList:[],

};
export default class SKOrderListCell extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <View style={ styles.downline }/>
                <Text style = {styles.orderNo}>
                    { this.props.orderNo }
                    </Text>
                <ScrollView style = {styles.productScroll} >
                    {this._renderProductItem()}
                </ScrollView>
                <Text style = {styles.price}>共计商品1件</Text>
                <View style = {styles.downline2}></View>
                <View style = {styles.bottomView}>
                    <Text style = {styles.state}> 已关闭 </Text>
                    <View></View>
                </View>
            </View>
        );
    }

    _renderProductItem() {
        let arr = this.props.productList;
        let items = arr.map((value,index) => {
            let item = <Image style={ styles.productItem} source = { {uri:this._returnPicPath(value['picturePath'],'200x200')} } key = {index}/>
            return item;
        })
        return items;
    }

    _returnPicPath(pic,size){
        let newPicPath =  pic.replace('{0}',size)
        let picUrl = SKConstant.kBasePicPrefixUrl + newPicPath
        return picUrl
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'column',
        flex:1,
    },

    downline:{
        backgroundColor:SKConstant.appLineColor,
        height:SKConstant.viewHeight(10),
        width:SKConstant.kScreenWidth,
    },

    orderNo:{
        color:'#333333',
        fontSize:SKConstant.kFontSize(14),
        marginLeft:10,
    },

    productScroll:{
        flexDirection:'row',
        height:SKConstant.viewHeight(100),
    },

    productItem:{
        width:SKConstant.viewHeight(70),
        height:SKConstant.viewHeight(70),
        resizeMode:'contain',
    },

    price:{
       width:SKConstant.kScreenWidth,
       height:40,
        color:'#333333',
        fontSize:SKConstant.kFontSize(14),
    },

    downline2:{
        backgroundColor:SKConstant.appLineColor,
        height:SKConstant.viewHeight(1),
        width:SKConstant.kScreenWidth,
    },

    bottomView:{
        height:SKConstant.viewHeight(40),
        flexDirection:'row',
        justifyContent:'space-around'
    },

    state:{
        fontSize:SKConstant.kFontSize(14),
        marginLeft:10,
        color:'#FF233E',
    }



});