import React, { Component } from 'react'

import HeaderLayout from '../components/header-layout'

class Header extends Component {
    render() {
        return (
            <HeaderLayout navigation={this.props.navigation} children={this.props.children} title={this.props.title} />
        )
    }
}

export default Header