import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,ScrollView,Image} from 'react-native';
import SKOrderItem from "../View/SKOrderItem";
import SKConstant from '../common/SKConstant'
import SkHttpRequest from '../common/skHttpRequest'
import Swiper from 'react-native-swiper'
import SKActivityProductItem from "../View/SKActivityProductItem";
import SKRecommondProductItem from "../View/SKRecommondProductItem";

export default class SkHomeVc extends Component {

    static navigationOptions = {
        header:null,
    };

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            banners:[],
            firstFloor:[],
            secondFloor:[],
            activetyFloor:[],
            recommondFloor:[],
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

                    <View>
                        <View style={{flexDirection:"row",justifyContent:'center',alignItems:'center',
                            width:SKConstant.kScreenWidth,height:SKConstant.viewHeight(40)}}>
                            <Text style={{color:'#e5e5e5'}}> ---- </Text>
                            <Text style={{fontSize:SKConstant.kFontSize(16),color:'#000000'}}>推荐商品</Text>
                            <Text style={{color:'#e5e5e5'}}> ---- </Text>
                        </View>

                        <View style={styles.recommondFloor}>
                            {this._renderRecommondFloor()}
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
            // console.log(response.data);
            this.setState({
                banners:response.data.banner,
                firstFloor:response.data.firstIcon,
                secondFloor:response.data['secondIcon'],
                activetyFloor:response.data['newProducts'],
                recommondFloor:response.data['recommendProducts'],
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
            let activeItem = <SKActivityProductItem productImg={ {uri:this._returnPicPath(value['picturePath'],'100x100')} } productName={value['name']} price={'￥' + value['price']}
                                                    key = {index}/>
            return activeItem;
        })
        return item;
    }

    _renderRecommondFloor(){

        console.log('****************');
        console.log(SKConstant.kDeivceIsIphoneX());
        // SKConstant.b();

        let arr = this.state.recommondFloor;
        let item = [];
        for (let i = 0; i < arr.length; i++) {
            let value = arr[i];
            let productItem = <SKRecommondProductItem
                productImg={ {uri:this._returnPicPath(value['picturePath'],'200x200')} } productName={value['name']} price={'￥' + value['price']}
                key = {i}/>
            item.push(productItem)

            if (i%2 == 0) {
                let  varLine = <View style={{backgroundColor:SKConstant.appLineColor,height:productItem.height,width:1} }  key = {i + 100}></View>
                item.push(varLine);
            }  else {
                let horLine = <View style={{backgroundColor:SKConstant.appLineColor,height:1,width:SKConstant.kScreenWidth}}  key = {i + 1001}/>
                item.push(horLine)
            }

        }
        return item;

    }

    _returnPicPath(pic,size){
        let newPicPath =  pic.replace('{0}',size)
        let picUrl = SKConstant.kBasePicPrefixUrl + newPicPath
        return picUrl
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
        height:SKConstant.kNaviBarHeight(),
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

    recommondFloor:{
        width:SKConstant.kScreenWidth,
        justifyContent:'flex-start',
        flexDirection:'row',
        flexWrap:'wrap',
    },

    activityProductItem:{
        width:SKConstant.kScreenWidth/3,
        // height:SKConstant.kScreenWidth*7/12
    }


});
