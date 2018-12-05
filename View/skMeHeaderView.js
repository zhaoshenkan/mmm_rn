import React, {Component} from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';

export default class skMeHeaderView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text></Text>
                </View>
                <View>
                    <Text></Text>
                    <Image style = {styles.icon}
                            source = require('./image/arrowRight.png')
                    />
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#A92D38',
        flexDirection:'row',
    },

    leftView:{

    },

    rightView:{

    },

    text:{

    },

    icon:{
        width:20,
        height:20,
    },
});