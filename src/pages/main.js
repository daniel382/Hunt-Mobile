import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class Main extends Component {
    static navigationOptions = {
        title: "JSHunt"
    }

    render() {
        return (
            <View style={ styles.container }>
                <Text>Página Main</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})