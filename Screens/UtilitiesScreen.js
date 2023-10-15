import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/GUI/Header/Header'

const UtilitiesScreen = () => {
    const headerText = "Tiện ích"
    return (
        <View>
            <Header headerText={headerText}/>
        </View>
    )
}

export default UtilitiesScreen

const styles = StyleSheet.create({})