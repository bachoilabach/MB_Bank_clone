import { StyleSheet, Text, View, TouchableOpacity, Switch, Image } from 'react-native'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

//* Item for ProductScreen, PointScreen, GiftScreen, UtilitiesScreen

const Item = ({ icon, name, index, headerText, image }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const title = headerText === 'Tiện ích';
    return (
        <TouchableOpacity style={styles.point}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 15, paddingVertical: 23 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '80%' }}>
                    {!icon ? (
                        <Image source={image} style={{ width: 50, height: 50 }} />
                        ) : (
                        <FontAwesomeIcon icon={icon} size={35} style={{ color: "#0d22cc" }} />
                    )}
                    <Text style={{ fontSize: 16, marginLeft: 15, fontWeight: '600' }}>{name}</Text>
                </View>
                <View>
                    {(index < 3 || index == 7) ? (
                        <Switch
                            trackColor={{ false: '#767577', true: '#81b0ff' }}
                            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    ) : (
                        !title && <FontAwesomeIcon icon={faChevronRight} size={16} style={{ color: "#0d22cc" }} />
                    )}
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Item

const styles = StyleSheet.create({
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
        marginBottom: '5%',
    },
})