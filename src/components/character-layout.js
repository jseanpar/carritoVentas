import React from 'react'
import { Image, View } from 'react-native'
import { List, ListItem, Body, Right, Text, Button, Icon } from 'native-base'

function Character(props) {
    return (
        <List>
            <ListItem thumbnail onPress={props.onPress} >
                <Body style={{ paddingLeft: 40 }}>
                    <View style={{ paddingLeft: 50, paddingBottom: 30, borderColor: '#992F7B' }}>
                        <Image source={{ uri: props.image }} style={{ width: 100, height: 100, resizeMode: "contain" }} />
                    </View>
                    <Text style={{ fontSize: 15, color: '#992F7B', fontWeight: 'bold' }} >{props.name} de {props.amiiboSeries}</Text>
                    <Text note style={{ fontSize: 15 }}>Tipo: {props.type}</Text>
                    <Text style={{ fontSize: 15 }}>Precio: {props.valor}</Text>
                </Body>
                <Right>
                    <Button iconRight transparent>
                        <Icon type="FontAwesome" name='plus' style={{ color: '#992F7B' }} />
                    </Button>
                </Right>
            </ListItem>
        </List>
    )
}

export default Character