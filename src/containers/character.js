import React, { Component } from 'react'
import CharacterLayout from '../components/character-layout'

class Character extends Component {

    render() {
        return (
            <CharacterLayout {...this.props} onPress={this.props.onPress} />
        )
    }
}

export default Character