import React, { Component } from 'react';
import { Text } from 'native-base';
import { StyleSheet } from 'react-native';

export default class CustomText extends Component {

    render() {
        return (
            <Text style={StyleSheet.flatten([this.props.style, {fontFamily: 'avenir-heavy'}])}>
                {this.props.children}
            </Text>
        );
    }
}