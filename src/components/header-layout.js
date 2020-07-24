import React, { Component } from 'react'
import { Platform } from 'react-native'
import { Header, Left, Body, Title, Subtitle, Thumbnail } from 'native-base'

class HeaderLayout extends Component {
    render() {
        return (
            <Header style={{ backgroundColor: '#631d51' }} androidStatusBarColor="#85276B" >
                <Left>
                    {this.props.children ?
                        this.props.children
                        :
                        <Thumbnail sqare small source={require('../../assets/app-logo.png')} style={{ resizeMode: 'contain' }} />
                    }
                </Left>
                <Body>
                    <Title style={{ color: '#fff' }} >Carrito de Compras</Title>
                    <Subtitle style={{ width: 300, textAlign: Platform.OS === 'ios' ? 'center' : 'left', fontSize: 10, color: '#fff' }} >{this.props.title}</Subtitle>
                </Body>
            </Header>
        )
    }
}

export default HeaderLayout
