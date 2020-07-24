import React from 'react'
import { Platform, Text, View, StyleSheet, ActivityIndicator, ImageBackground, StatusBar } from 'react-native'

function LoadingLayout(props) {
    return (
        <ImageBackground source={require('../../assets/background.png')} style={styles.imageBackground} >
            <StatusBar barStyle="light-content" backgroundColor="#85276B" />
            <View style={styles.formContainer} >
                <View style={styles.logoContainer} >
                    <Text style={{ color: 'white', fontSize: Platform.OS === 'ios' ? 24 : 32, fontWeight: 'bold' }} >Carrito de compras</Text>
                    <ActivityIndicator color="white" size="large" />
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        alignItems: 'center',
        justifyContent: 'center',
    },
    formContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '20%',

    },
    logoContainer: {
        alignItems: 'center',
    },
})

export default LoadingLayout
