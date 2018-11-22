import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Button,ScrollView,Image} from 'react-native';
import SKConstant from "../common/SKConstant";

export default class SKMeVc extends Component {
    
    static navigationOptions = {
        title:'我的',
        // header:null,
    };
    
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View style={{
                        width: SKConstant.kScreenWidth,
                        height: SKConstant.viewHeight(400),
                        marginRight: 0, marginTop: 0,
                        backgroundColor: '#42FF96'
                    }}>
                        <Image source={require('../image/minebanner.png')}
                               style={{
                                   width: SKConstant.kScreenWidth,
                                   height: 400,
                                   backgroundColor: '#ffffff',
                                   alignSelf: 'center'
                               }}/>
                        {/*<Image style={styles.avatar}/>*/}
                        <Text style={styles.headText}>赵申侃</Text>
                        <Text style={styles.headText}>已认证</Text>
                        {/*<TouchableOpacity>*/}

                        {/*</TouchableOpacity>*/}

                        {/*<TouchableOpacity>*/}

                        {/*</TouchableOpacity>*/}
                    </View>

                </ScrollView>
            </View>
        );
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
        backgroundColor:'#8A84FF',
        flexDirection: 'column',
    },

    headView:{
        width:300,
        // height:600,
        backgroundColor:'#51FF7F'
    },

    avatar:{
        width:100,
        height:100,
        backgroundColor: '#FF4A6A',
    },

    headText:{
        color: '#ffffff',
        fontSize:16,
    },

});
