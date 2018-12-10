import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native';
import {Dimensions} from 'react-native'
import SKConstant from "../common/SKConstant";

type Props = {
     img:string,
     leftTitle:string,
     rightTitle:string,
};
export default class SKMineHeaderCell extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.leftView}>
                    <Image source={this.props.img}
                           style={styles.iconStyle} />
                    <Text style={styles.textStyle}>
                        {this.props.leftTitle}
                    </Text>
                </View>

                <TouchableOpacity style = {styles.rightView}
                                  onPress = { this._clickEvent.bind(this)}>
                    <Text style={styles.textStyle}>
                        {this.props.rightTitle}
                    </Text>
                    <Image style={styles.iconStyle}
                           source={require('../image/arrowRight.png')}/>
                </TouchableOpacity>

            </View>
        );
    }

    _clickEvent () {
        this.props.callback()
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginLeft: 0,
        marginRight: 0,
        paddingLeft:10,
        paddingRight:10,
        width:Dimensions.get('window').width,
        height: SKConstant.viewHeight(40),
        backgroundColor:'#FFFFFF'
    },

    leftView:{
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },

    rightView:{
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },

    textStyle:{
        color:'#333333',
        fontSize:14,
        alignSelf: 'center',
        marginLeft: 10,
    },

    iconStyle:{
        width:20,
        height:20,
        resizeMode:'contain',
        alignSelf: 'center',
    },

});
