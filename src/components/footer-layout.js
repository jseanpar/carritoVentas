import React, { Component } from 'react'
import { View } from 'react-native'
import { Footer, Text } from 'native-base'

class FooterLayout extends Component {
    render() {

        console.log(this.props);
        const total = this.props.characters.reduce((prev, cur) => prev + parseInt(cur.valor, 10), 0);

        return (
            <Footer style={{ backgroundColor: '#992F7B' }}>
                <View style={{ flex: 1, flexDirection: "row", padding: 14 }}>
                    <Text style={{ color: 'white' }}>Total a pagar: {total}</Text>
                </View>
            </Footer>
        )
    }
}

export default FooterLayout
