import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Header from '../components/GUI/Header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCartShopping, faChevronRight, faPercent } from '@fortawesome/free-solid-svg-icons';
import Item from '../components/GUI/Item/Item';

const pointItems = [
    {
        icon: faPercent,
        name: 'Ưu đãi'
    },
    {
        icon: faCartShopping,
        name: 'Mua sắm hoàn tiền',
    },
];

export default function PointScreen() {
    const headerText = 'MB++';
    return (
        <View style={{flex: 1}}>
            <Header headerText={headerText}/>
            <ScrollView style={styles.container}>
                {
                    pointItems.map((pointItem,index) => (
                        <Item key={index} icon={pointItem.icon} name={pointItem.name}/>
                    ))
                }
            <View>
                <Image source={require('../assets/point.jpg')} style={{width: '100%',marginTop: -50}} resizeMode='contain'/>
            </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },

    point: {
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: 18
    },
})