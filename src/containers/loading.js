import React, { Component } from 'react'
import LoadingLayout from '../components/loading-layout'

class Loading extends Component {

    constructor(properties) {
        super(properties)
    }

    componentDidMount = () => {
        setTimeout(() => { this.props.navigation.navigate('CharactersList') }, 2000)

    }

    render() {
        return (
            <LoadingLayout />
        )
    }
}



export default Loading