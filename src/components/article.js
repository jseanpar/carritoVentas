import React from 'react'
import { Image } from 'react-native'
import { List, ListItem, Left, Body, Right, Text } from 'native-base'

function Article(props) {
    return (
        <List>
            <ListItem thumbnail onPress={props.onPress} >
                <Left>
                    <Image source={{ uri: props.image }} style={{ width: 70, height: 70, resizeMode: "contain" }} />
                </Left>
                <Body style={{ paddingLeft: 20 }}>
                    <Text style={{ fontSize: 18, color: '#992F7B', fontWeight: 'bold' }} >{props.name} de {props.amiiboSeries}</Text>
                    <Text style={{ fontSize: 18 }}>Precio: {props.valor}</Text>
                </Body>
                <Right>
                    <Text style={{ fontSize: 15 }}>Cantidad: 1</Text>
                    <Text style={{ fontSize: 15 }}>quitar</Text>
                </Right>
            </ListItem>
        </List>
    )
}

export default Article 
