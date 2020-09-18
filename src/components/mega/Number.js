import React from 'react';
import { Text, View } from 'react-native';

import { Style } from './../style/style';
import { StyleNumbers } from './styleNumbers';

export default class Number extends React.Component {
    render() {
        return (
            <View style={StyleNumbers.Container}>
                <Text style={[Style.txtG, StyleNumbers.Number]}>{this.props.num}</Text>
            </View>
        )
    }
}