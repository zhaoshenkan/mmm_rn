import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,Image} from 'react-native';
import SKOrderItem from "../View/SKOrderItem";
import SKConstant from '../common/SKConstant'
import SkHttpRequest from '../common/skHttpRequest'
import Swiper from 'react-native-swiper'
import SKActivityProductItem from "../View/SKActivityProductItem";

export default class SkHomeVc extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            banners:[],
            firstFloor:[],
            secondFloor:[],
            activetyFloor:[],
        };
    }

    render() {

        return (
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.naviView}>
                        <Image source={require('../image/homeCode.png')}
                               style={styles.scan}/>
                        <View style={styles.searchView}>
                            <Image style={styles.searchIcon}
                                   source={require('../image/searchGray.png')}/>
                            <Text style={styles.searchText}>
                                搜索你想要的产品
                            </Text>
                        </View>
                        <Image source={require('../image/homeMessage.png')}
                               style={styles.messageIcon}/>
                    </View>
                    <Swiper style={styles.wrapper}
                            showsButtons={false}
                            loop = {true}
                            key={this.state.banners.length}
                            dotStyle={styles.dotStyle}
                            activeDotStyle={styles.activeDotStyle}
                            autoplay = {true}>
                        {this._renderBanner()}
                    </Swiper>
                    <View style={styles.firstFloor}>
                        {this._renderFirstFloor()}
                    </View>
                    <View style={styles.secondFloor}>
                        {this._renderSecondFloor()}
                    </View>
                    <View>
                        <View style={{flexDirection:"row",justifyContent:'center',alignItems:'center',
                                        width:SKConstant.kScreenWidth,height:SKConstant.viewHeight(40)}}>
                            <Text style={{color:'#e5e5e5'}}> ---- </Text>
                            <Text style={{fontSize:SKConstant.kFontSize(16),color:'#000000'}}>活动专区</Text>
                            <Text style={{color:'#e5e5e5'}}> ---- </Text>
                        </View>

                        <View style={styles.activityFloor}>
                            {this._renderActivityFloor()}
                        </View>

                    </View>

                </ScrollView>
            </View>
        );
    }

    componentDidMount() {

        let httpRequest = new SkHttpRequest;
        let parmas = {'':''}
        httpRequest.postRequest('/api/index4phone',parmas,(response) => {
            console.log(response.data);
            this.setState({
                banners:response.data.banner,
                firstFloor:response.data.firstIcon,
                secondFloor:response.data['secondIcon'],
                activetyFloor:response.data['newProducts'],
            });

        });
    }

    _renderBanner(){
        let banner = [];
        let arr = this.state.banners;
        for (let i = 0; i < arr.length; i++) {
            let dic = arr[i];
            let bannerimage = <Image style={styles.slide1} source={{uri: SKConstant.kBasePicPrefixUrl + dic['picturePath'] }} key = {i}/>
            banner.push(bannerimage)
        }
        return banner;
    }

    _renderFirstFloor(){
        let item = [];
        let arr = this.state.firstFloor;
        for (let i = 0; i < arr.length; i++) {
            let dic = arr[i];
            let homeItem = <SKOrderItem img={ {uri:SKConstant.kBasePicPrefixUrl +  dic['picturePath']} } title={dic['title']} key = {i}/>
            item.push(homeItem)
        }
        return item;
    }

    _renderSecondFloor(){
        let arr = this.state.secondFloor;
        let item = arr.map((value,index) =>{
            let floorItem = <Image style={styles.secondFloorImage} source={{uri: SKConstant.kBasePicPrefixUrl + value['picturePath']}} key = {index}/>
            return floorItem;
        })
        return item;
    }

    _renderActivityFloor(){
        let arr = this.state.activetyFloor;
        let item = arr.map((value,index) =>{
            let activeItem = <SKActivityProductItem style={styles.activityProductItem}
                                                    productImg={ {uri:this._returnPicPath(value['picturePath'])} } productName={value['name']} price={'￥' + value['price']}
                                                    key = {index}/>
            return activeItem;
        })
        return item;
    }

    _returnPicPath(pic){
        let newPicPath =  pic.replace('{0}','100x100')
        console.log(SKConstant.kBasePicPrefixUrl + newPicPath);
        return (SKConstant.kBasePicPrefixUrl + newPicPath)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },

    scroll:{
        flex:1,
    },

    naviView:{
        flexDirection: 'row',
        alignItems:'flex-end',
        height:88,
        width:SKConstant.kScreenWidth,
        backgroundColor:'#ffffff',
    },

    scan:{
        height: 44,
        resizeMode: 'center',
        flex:1,
    },

    searchView:{
        backgroundColor: '#FFF0D1',
        borderRadius:3,
        height:39,
        flex:6,
        marginBottom: 5,
        flexDirection: 'row',
        paddingLeft: 5,
        alignItems: 'center'
    },

    searchIcon:{
        width:18,
        height:18,
        resizeMode:'contain',
    },

    searchText:{
        marginLeft:5,
        color:'#c5c5c5',
        fontSize:SKConstant.kFontSize(15),
    },

    messageIcon:{
        width:100,
        height:44,
        resizeMode:'center',
        flex:1,
    },

    firstFloor:{
        flexDirection:'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        width:SKConstant.kScreenWidth,
        height:SKConstant.kScreenWidth*2/5,
    },

    wrapper: {
        height:SKConstant.viewHeight(150),
    },

    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },

    dotStyle:{
        marginBottom: -20,
    },

    activeDotStyle:{
       backgroundColor:SKConstant.appThemeColor,
        marginBottom:-20,
    },

    secondFloor:{
        width:SKConstant.kScreenWidth,
        flexDirection:'row',
        flexWrap:'wrap',
        backgroundColor:'#ffffff',
    },

    secondFloorImage:{
        width:SKConstant.kScreenWidth/2,
        height:SKConstant.viewHeight(110),
        resizeMode:'stretch',
    },

    activityFloor:{
        width:SKConstant.kScreenWidth,
        justifyContent:'flex-start',
        flexDirection:'row',
    },

    activityProductItem:{
        width:SKConstant.kScreenWidth/3,
        height:SKConstant.kScreenWidth*7/12
    }


});
