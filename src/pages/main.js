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
        <View style={ styles.productContainer }>
            <Text style={ styles.productTitle }>{ item.title }</Text>
            <Text style={ styles.productDescription }>{ item.description }</Text>

            <TouchableOpacity style={ styles.productButton } onPress={ () => {} }>
                <Text style={ styles.productButtonText }>Acessar</Text>
            </TouchableOpacity>
        </View>
    )

    render() {
        return (
            <View style={ styles.container }>
                <FlatList
                    contentContainerStyle={ styles.list }
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
        flex: 1,
        backgroundColor: '#FAFAFA'
    },

    list: {
        padding: 20
    },

    productContainer: {
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 5,
        padding: 20,
        marginBottom: 20
    },

    productTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333'
    },

    productDescription: {
        fontSize: 16,
        color: '#999',
        marginTop: 4,
        lineHeight: 24
    },

    productButton: {
        height: 42,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#DA552F',
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10
    },

    productButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#DA552F'
    }
})