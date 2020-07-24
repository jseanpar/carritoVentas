import React, { Component } from 'react'
import { BackHandler, FlatList, View, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { Container } from 'native-base'

import Header from './header'
import HeaderBackButton from '../components/header-back-button'
import Empty from '../components/empty'
import Article from '../components/article'
import Footer from './footer'

class SalesCart extends Component {

    state = { loading: true }

    constructor(props) {
        super(props)
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this)
    }

    static navigationOptions = () => { return { header: null, } }

    async componentDidMount() {
        this.setState({ loading: false })
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick)
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick)
    }

    handleBackButtonClick = () => {
        return this.props.dispatch(NavigationActions.navigate({ routeName: 'CharactersList' }))
    }

    handleHeaderBackButtonClick = () => {
        return this.props.dispatch(NavigationActions.navigate({ routeName: 'CharactersList' }))
    }

    keyExtractor = item => `${item.tail.toString()}`
    renderEmpty = () => <Empty text="No se encontraron registros" />

    renderItem = ({ item }) => {
        return (
            <Article {...item} />
        )
    }

    render() {

        console.log(this.props)
        return (
            < Container >
                <Header title='Carrito de compras' navigation={this.props.navigation}>
                    <HeaderBackButton onPress={this.handleHeaderBackButtonClick} />
                </Header>
                <View style={{ flex: 1 }}>
                    {this.state.loading ?
                        <ActivityIndicator color="#0098D0" size="large" style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: 200 }} />
                        :
                        (<View>
                            <FlatList keyExtractor={this.keyExtractor} data={this.props.sellcart} ListEmptyComponent={this.renderEmpty}
                                renderItem={this.renderItem} />

                        </View>)
                    }
                </View>
                <Footer />
            </Container >
        )
    }
}

function mapStateToProps(state) { return { sellcart: state.sellcartReducer.characters } }

export default connect(mapStateToProps)(SalesCart)