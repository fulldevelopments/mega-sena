import React from 'react';
import { Text, TextInput, Button, View, StyleSheet } from 'react-native';

import Number from './Number';
import { Style } from './../style/style';

export default class Mega extends React.Component {

    state = {
        qtdNumbers: this.props.qtdNumbers,
        numbers: [],
    }

    generateNumber = (numbers) => {
        const numberGenerated = parseInt((Math.random() * 60) + 1);
        return numbers.includes(numberGenerated) ? this.generateNumber(numbers) : numberGenerated;
    }

    generateNumbers = () => {
        const numbers = Array(this.state.qtdNumbers)
            .fill()
            .reduce(numlist => [...numlist, this.generateNumber(numlist)], []).sort((a, b) => a - b);
        this.setState({ numbers });
    }

    showNumbers = () => {
        return this.state.numbers.map(number => { return <Number key={number} num={number}> </Number> });
    }

    render() {
        return (
            <>
                <Text>Mega Sena number generator</Text>
                <TextInput
                    style={[Style.inputNumbers, Style.margin2]}
                    placeholder='Enter the quantity to be generated'
                    onChangeText={value => this.setState({ qtdNumbers: +value })}
                    keyboardType={'numeric'} />
                <Button style={Style.margin2} title='Generate' onPress={this.generateNumbers} />
                <View style={Style.Numbers}>
                    {this.showNumbers()}
                </View>
            </>
        )
    }
}