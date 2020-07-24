import React, { Component } from 'react'
import { connect } from 'react-redux'

import FooterCharacterLayout from '../components/footer-character-layout'

class FooterCharacter extends Component {

    render() {
        return (
            <FooterCharacterLayout sellcart={this.props.sellcart} navigation={this.props.navigation} children={this.props.children} title={this.props.title} />
        )
    }
}

function mapStateToProps(state) { return { sellcart: state.sellcartReducer.character } }

export default connect(mapStateToProps)(FooterCharacter)
