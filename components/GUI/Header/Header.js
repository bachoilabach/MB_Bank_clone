import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft, faHouse } from '@fortawesome/free-solid-svg-icons';
import { SafeAreaView } from "react-native";

function Header({headerText, navigation}) { 
    const [name, setName] = useState(headerText);
    const isPasswordRecovery = headerText === "Yêu cầu lấy lại mật khẩu";
    const goBack = () => {
        navigation.goBack(); 
    }

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.main}>
                    { isPasswordRecovery &&    
                        <TouchableOpacity onPress={goBack}>
                            <FontAwesomeIcon icon={faAngleLeft} size={20} color="#fff"/>
                        </TouchableOpacity>
                    }
                    
                    <Text style={[styles.text, !isPasswordRecovery && styles.centerText]}>{name}</Text>
                    
                    { isPasswordRecovery &&
                        <TouchableOpacity onPress={goBack}>
                            <FontAwesomeIcon icon={faHouse} size={23}  color="#fff"/>
                        </TouchableOpacity>
                    }
                </View>    
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#0e27ce',
        paddingTop: '15%', 
    },

    main: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: '5%',
        paddingLeft: '4%',
        paddingRight: '4%'
    },
    text: {
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 16.5
    },
    centerText: {
        flex: 1, 
        textAlign: 'center',
    },
})

export default Header;