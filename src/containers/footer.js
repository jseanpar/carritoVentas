import React, { Component } from 'react'
import { connect } from 'react-redux'

import FooterLayout from '../components/footer-layout'

class Footer extends Component {

    render() {
        return (
            <FooterLayout characters={this.props.characters} navigation={this.props.navigation} children={this.props.children} title={this.props.title} />
        )
    }
}

function mapStateToProps(state) { return { characters: state.sellcartReducer.characters } }

export default connect(mapStateToProps)(Footer)
