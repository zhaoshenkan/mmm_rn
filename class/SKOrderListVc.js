import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,FlatList,RefreshControl} from 'react-native';
import SkHttpRequest from "../common/skHttpRequest";
import SKOrderListCell from "../View/SKOrderListCell";

type Props = {
};
export default class SKOrderListVc extends Component<Props> {

    page = 1;

    static navigationOptions = {
        title:'我的订单',
    };

    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            orderList:[],
            isRefreshing: false,
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.orderList}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => <SKOrderListCell orderNo = {  item.createTime.substr(0,10) +  '  订单号' + item.orderNo}
                                                             productList = {item.goods}
                                                             productInfo={'共计商品' + item.goods.length + '件 合计:'}
                                                             price = {'￥' + item.totalPrice}
                                                             express={'(含运费￥' + item.freight + '元)' }
                                                             state={item.status}
                                                />}
                />
            </View>
        );
    }

    _onRefresh() {

    }

    componentDidMount() {
        // -1 0 1 2 3 4
       this._postdata()
    }

    _postdata(){
        let httpRequest = new SkHttpRequest;
        let parmas = { 'keyword':'',
            'pageIndex':this.page,
            'status':'-1',
            'pageSize':'10'}
        httpRequest.postRequest('/authapi/order/getOrders',parmas,(response) => {
            console.log(response);
            this.setState({
                orderList:response.data['list'],
                isRefreshing: false
            });

        });
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },


});
