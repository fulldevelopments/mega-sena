import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import Mega from './components/mega/Mega';
import { Style } from './components/style/style';

export default class App extends React.Component {

    render() {
        return (
            <SafeAreaView style={Style.App}>
                <Mega qtdNumbers={6} />
            </SafeAreaView>
        )
    }
}