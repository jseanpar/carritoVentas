import React, { Component } from 'react'
import { View, TouchableOpacity } from 'react-native'
import { Footer, Text } from 'native-base'

class FooterCharacterLayout extends Component {
    render() {
        return (
            <Footer style={{ backgroundColor: '#992F7B' }}>
                <View style={{ flex: 1, flexDirection: "row", padding: 14 }}>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('SalesCart') }} >
                        <Text style={{ color: 'white' }}>Ir al carrito</Text>
                    </TouchableOpacity>
                </View>
            </Footer>
        )
    }
}

export default FooterCharacterLayout
