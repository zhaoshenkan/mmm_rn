import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import SkHomeVc from "./SkHomeVc";
import SKMeVc from "./SKMeVc";
import TabNavigator from 'react-native-tab-navigator';

export default class SKTabbarVc extends Component {

    state= {
        selectedTab: 'home'
    };

    render() {
        return (
            <View style={styles.container}>

                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        title="home"
                        onPress={() => this.setState({ selectedTab: 'home' })}>
                        <SkHomeVc/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'profile'}
                        title="profile"
                        onPress={() => this.setState({ selectedTab: 'profile' })}>
                        <SKMeVc/>
                    </TabNavigator.Item>
                </TabNavigator>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});