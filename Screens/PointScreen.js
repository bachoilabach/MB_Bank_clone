import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../components/GUI/Header/Header'

export default function PointScreen() {
    const headerText = 'Sản phẩm';
    return (
        <View>
            <Header headerText={headerText}/>
        </View>
    )
}

const styles = StyleSheet.create({})