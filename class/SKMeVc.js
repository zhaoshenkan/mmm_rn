import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,ScrollView,Image,ImageBackground} from 'react-native';
import SKConstant from "../common/SKConstant";
import SKMineHeaderCell from '../View/SKMineHeaderCell'
import SKOrderItem from "../View/SKOrderItem";
import SKMyWalletItem from "../View/SKMyWalletItem";
import SKCatergoryItem from "../View/SKCategoryItem";


export default class SKMeVc extends Component {
    
    static navigationOptions = {
        header:null,
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
                    <View style={ styles.downline }/>
                    <SKMineHeaderCell img={ require('../image/meOrder.png') } leftTitle={'我的订单'} rightTitle={'全部订单'} callback = { () => {
                        this.props.navigation.navigate('OrderList');
                    }} />
                    <View style={ styles.downline2 }/>
                    <View style={styles.orderView}>
                        {this._renderOrderItem()}
                    </View>
                    <View style={ styles.downline }/>
                    <SKMineHeaderCell img={ require('../image/me_Wallet.png') } leftTitle={'我的钱包'} rightTitle={''}/>
                    <View style={ styles.downline2 }/>
                    <View style={styles.orderView}>
                        {this._renderWalletItem()}
                    </View>
                    <View style={ styles.downline }/>
                    <View style={styles.categoryItem}>
                        {this._renderMeCatergoryItem()}
                    </View>
                    <View style={ styles.downline }/>
                </ScrollView>
            </View>
        );
    }

    _renderOrderItem(){
        let arr = [
            {'pic':require('../image/notDelivery.png'),'title':'待付款'},
            {'pic':require('../image/obligation.png'),'title':'待发货'},
            {'pic':require('../image/notReceieve.png'),'title':'待收货'},
            {'pic':require('../image/completed.png'),'title':'已完成'},
            {'pic':require('../image/shouhou_mine.png'),'title':'售后'}
            ];
        let items = arr.map(( value,index ) =>{
            let item = <SKOrderItem img={value['pic']} title={value['title']} key = {index}/>
            return item;
        })
        return items;
    }

    _renderWalletItem(){
        let arr = ['我的红包','我的现金券','我的积分','信用额度'];
        let items = arr.map((value, index) =>{
            let item = <SKMyWalletItem topTitle={ '123'} bottomTitle={value} key = {index}/>
            return item;
        })
        return items;
    }

    _renderMeCatergoryItem(){
        let arr = [
            {'pic':require('../image/mine_zhanghaoguanli.png'),'title':'账号管理'},
            {'pic':require('../image/mine_adress.png'),'title':'地址管理'},
            {'pic':require('../image/mine_shoucang.png'),'title':'我的收藏'},
            {'pic':require('../image/mine_noProduct.png'),'title':'缺货记录'},
            {'pic':require('../image/mine_shouhou.png'),'title':'售后管理'},
            {'pic':require('../image/mine_zizhi.png'),'title':'资质认证'},
            {'pic':require('../image/mine_fuwu.png'),'title':'服务中心'},
            {'pic':require('../image/mine_set2.png'),'title':'设置'},
        ];
        let items = arr.map((value, index) =>{
            let item = <SKCatergoryItem img={value['pic']} title={value['title']} key = {index}/>
            return item;
        })
        return items
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
        backgroundColor:SKConstant.appLineColor,
        flexDirection: 'column',
    },

    headView:{
        width:SKConstant.kScreenWidth,
        height:SKConstant.viewHeight(150) + SKConstant.kStatusHeight,
        backgroundColor:'#ffffff',
        flexDirection:'row',
    },

    avatar:{
        width:75,
        height:75,
        marginLeft:20,
        marginTop:20 + SKConstant.kNaviBarHeight(),
        borderRadius:75/2,
        backgroundColor: '#FF4A6A',
    },

    textView:{
        marginLeft:30,
        marginTop:20 + SKConstant.kNaviBarHeight(),
    },

    headText:{
        color: '#ffffff',
        fontSize:16,
        height:30,
    },

    downline:{
        backgroundColor:SKConstant.appLineColor,
        height:SKConstant.viewHeight(10),
        width:SKConstant.kScreenWidth,
    },

    downline2:{
        backgroundColor:SKConstant.appLineColor,
        height:SKConstant.viewHeight(1),
        width:SKConstant.kScreenWidth,
    },

    orderView:{
        flexDirection:'row',
    },

    categoryItem:{
        flexDirection:'row',
        flexWrap:'wrap',
    }

});
