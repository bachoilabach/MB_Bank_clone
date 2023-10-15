import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Header from '../components/GUI/Header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCartShopping, faChevronRight, faPercent } from '@fortawesome/free-solid-svg-icons';

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
                        <TouchableOpacity style={styles.point} key={index}>
                            <View style={{flexDirection: 'row', justifyContent:'space-between',alignItems: 'center',paddingHorizontal: 15,paddingVertical: 23}}>    
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <FontAwesomeIcon icon={pointItem.icon} size={35} style={{color:"#0d22cc"}}/>
                                    <Text style={{fontSize: 16, marginLeft: 15,fontWeight: '600'}}>{pointItem.name}</Text>
                                </View>
                                <View>
                                    <FontAwesomeIcon icon={faChevronRight} size={16} style={{color:"#0d22cc"}}/> 
                                </View>
                            </View>
                        </TouchableOpacity>
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