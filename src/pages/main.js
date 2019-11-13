import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native'

import api from '../services/api'

export default class Main extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: []
        }

        this.loadProducts = this.loadProducts.bind(this)
    }
    
    static navigationOptions = {
        title: "JSHunt"
    }

    async loadProducts() {
        try {
            const res = await api.get('/products')
            this.setState({ products: res.data.docs })
        } catch(err) {
            console.log(err)
        }
    }

    componentDidMount() {
        this.loadProducts()
    }

    renderItem = ({ item }) => (
        <View>
            <Text>{ item.title }</Text>
            <Text>{ item.description }</Text>

            <TouchableOpacity onPress={ () => {} }>
                <Text>Acessar</Text>
            </TouchableOpacity>
        </View>
    )

    render() {
        return (
            <View style={ styles.container }>
                <FlatList
                    data={ this.state.products }
                    keyExtractor={ item => item._id }
                    renderItem={ this.renderItem }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})