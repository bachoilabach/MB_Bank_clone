import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native';

export default function HomeScreen() {
    return (
        <View >
            <View >
                <SafeAreaView style={styles.header}/>
                <Text>Cuối cùng cũng làm được</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'blue',
        // height: '5%',
    },
})