import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StatusBar, View, ActivityIndicator, FlatList } from 'react-native'
import { Container } from 'native-base'

import API from '../../utils/api'
import Header from '../containers/header'
import Empty from '../components/empty'
import Character from './character'
import Footer from '../containers/footer-character'

class CharactersList extends Component {

    state = { loading: true }

    constructor(props) {
        super(props)
    }

    static navigationOptions = () => { return { header: null } }


    async componentDidMount() {

        function getNumeroAleatorio(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        this.setState({ loading: true })
        if (this.props.characterList === undefined) {
            API.getCatalogo()
                .then((catalogo) => {
                    const characterList = []
                    catalogo.map((product) => {
                        const precio = getNumeroAleatorio(10000, 60000)

                        characterList.push({ ...product, valor: precio })
                    })
                    this.props.dispatch({ type: 'SET_CHARACTER_LIST', payload: { characterList } })
                    this.setState({ loading: false })
                })
        }
        else {
            this.setState({ loading: false })
        }
    }

    keyExtractor = item => `${item.tail.toString()}`
    renderEmpty = () => <Empty text="No se encontraron registros" />
    characterPress = (item) => {
        this.props.dispatch({ type: 'ADD_CHARACTER', payload: { ...item } })
    }

    renderItem = ({ item }) => {
        return (
            <Character {...item} onPress={() => { this.characterPress(item) }} />
        )
    }

    render() {
        console.log(this.props)
        StatusBar.setBarStyle('light-content', true)
        return (
            <Container>
                <StatusBar backgroundColor="#0A74BC" barStyle="light-content" />
                <Header title='Listado de productos' navigation={this.props.navigation} />
                <View style={{ flex: 1, margin: 15 }}>
                    {this.state.loading ?
                        <ActivityIndicator color="#992F7B" size="large" style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: 200 }} />
                        : (<FlatList keyExtractor={this.keyExtractor} data={this.props.characterList} ListEmptyComponent={this.renderEmpty}
                            renderItem={this.renderItem} />)
                    }
                </View>
                <Footer navigation={this.props.navigation} />
            </Container>
        )
    }
}

function mapStateToProps(state) { return { characterList: state.characterReducer.characterList, characters: state.sellcartReducer.characters } }

export default connect(mapStateToProps)(CharactersList)