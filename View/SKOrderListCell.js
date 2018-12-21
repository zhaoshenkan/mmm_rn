import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,Image,TouchableOpacity} from 'react-native';
import SKConstant from "../common/SKConstant";

type Props = {
    orderNo:string,
    productList:[],
    productInfo:string,
    price:string,
    express:string,
    state:int,
};
export default class SKOrderListCell extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <View style={ styles.downline }/>
                <Text style = {styles.orderNo}>
                    { this.props.orderNo }
                    </Text>
                <ScrollView style = {styles.productScroll} contentContainerStyle={styles.scrollContainStyle} >
                    {this._renderProductItem()}
                </ScrollView>
                <View style={styles.productInfoView}>
                    <Text style={styles.productInfoText}>{this.props.productInfo}</Text>
                    <Text style={styles.price}>{this.props.price}</Text>
                    <Text style={styles.express}>{this.props.express}</Text>
                </View>
                <View style = {styles.downline2}></View>
                <View style = {styles.bottomView}>
                    <View style={styles.stateLeftView}>
                        <Text style = {styles.state}> 已关闭 </Text>
                    </View>
                    <View style={styles.stateBtnView}>
                        {this._renderStateBtn()}
                    </View>
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
    _renderStateBtn() {
        let state = this.props.state;
        var titlearr = [];
        switch (state) {
            case 0:
                titlearr = ['删除订单','取消订单'];
                break;
            case 3:
                titlearr = ['确认收货','查看物流'];
                break;
            case 4:
                titlearr = ['再次购买','取消订单'];
                break;
            case 5:
                titlearr = ['取消订单'];
                break;
            default:
                titlearr = [];
                break;
        }

        let btns = titlearr.map((value,index) => {
            let btn = <TouchableOpacity key = {index} style={styles.stateBtn}>
                        <Text style={ styles.stateText}>{value}</Text>
                        </TouchableOpacity>
            return btn;
        })
        return btns;
    }
        
    
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'column',
        flex:1,
        backgroundColor:'#ffffff'
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
        height:SKConstant.viewHeight(25),
        marginTop:SKConstant.viewHeight(5),
    },

    productScroll:{
        flexDirection:'row',

        height:SKConstant.viewHeight(80),
    },

    scrollContainStyle:{
        justifyContent:'flex-start',
        alignItems:'center',
    },

    productItem:{
        width:SKConstant.viewHeight(70),
        height:SKConstant.viewHeight(70),
        resizeMode:'contain',
        borderWidth:0.8,
        borderColor:'#e6e6e6',
        marginLeft:SKConstant.viewWidth(10),
    },

    productInfoView:{
       flexDirection:'row',
        justifyContent: 'flex-end',
        alignItems:'center',
        marginBottom: SKConstant.viewHeight(10),
    },

    productInfoText:{
        fontSize:SKConstant.kFontSize(15),
        color:'#000000',
    },

    price:{
        fontSize:SKConstant.kFontSize(15),
        color:'#E6384C',
    },

    express:{
        fontSize:SKConstant.kFontSize(15),
        color:'#B9B9B9',
    },

    downline2:{
        backgroundColor:SKConstant.appLineColor,
        height:SKConstant.viewHeight(1),
        width:SKConstant.kScreenWidth,
    },

    bottomView:{
        height:SKConstant.viewHeight(30),
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },

    stateLeftView:{
        marginLeft:10,
        height:SKConstant.viewHeight(30),
        justifyContent:'center',
        alignItems:'center',
    },

    state:{
        fontSize:SKConstant.kFontSize(14),
        color:'#FF233E',
    },

    stateBtnView:{
       flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
    },

    stateBtn:{
        marginRight: SKConstant.viewHeight(10),
        height:SKConstant.viewHeight(20),
        width:SKConstant.viewWidth(70),
        borderWidth: 0.8,
        borderColor: '#333333',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:4,
    },

    stateText:{
        fontSize:SKConstant.kFontSize(14),
        color:'#333333',
    },




});