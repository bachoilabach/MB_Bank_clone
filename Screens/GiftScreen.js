import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../components/GUI/Header/Header'

import { faCreditCard, faPercent } from '@fortawesome/free-solid-svg-icons';
import Item from '../components/GUI/Item/Item';

const giftItems = [
    {
        icon: faPercent,
        name: 'Tích điểm thưởng',
    },
    {
        icon: faCreditCard,
        name: 'Đổi quà tặng',
    },
];

export default function GiftScreen({navigation}) {
    const headerText = "Tích điểm đổi quà";

    return (
        <View style={{flex: 1}}>
            <Header headerText={headerText}/>
            <View style={{padding: 15}}>
                {
                    giftItems.map((giftItem,index) => (
                        <Item key={index} icon={giftItem.icon} name={giftItem.name}/>
                    ))
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})