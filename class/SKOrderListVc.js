import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,FlatList} from 'react-native';
import SkHttpRequest from "../common/skHttpRequest";
import SKOrderListCell from "../View/SKOrderListCell";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class SKOrderListVc extends Component<Props> {

    static navigationOptions = {
        title:'我的订单',
    };

    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            orderList:[],
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.OrderList}
                    renderItem={({item}) => <SKOrderListCell orderNo = {this.state.orderList.orderNo} productList = {this.state.orderList.goods} /> }/>
            </View>
        );
    }

    componentDidMount() {
        // -1 0 1 2 3 4
        let httpRequest = new SkHttpRequest;
        let parmas = {  'keyword':'',
                        'pageIndex':'0',
                         'status':'-1',
                         'pageSize':'10'}
        httpRequest.postRequest('/authapi/order/getOrders',parmas,(response) => {
            console.log(response);
            this.setState({
                orderList:response.data['list']
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
