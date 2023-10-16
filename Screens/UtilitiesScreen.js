import { Image, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/GUI/Header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { fa0, faChevronRight, faMobileScreenButton, faPhone } from '@fortawesome/free-solid-svg-icons';
import Item from '../components/GUI/Item/Item';

const listUtil = [
    {
        image: require("../assets/face-id.png"),
        name: 'Đăng nhập bằng khuôn mặt',
        icon: '',
    },
    {
        icon: faPhone,
        name: 'Nhận tiền từ số điện thoại'
    },
    {
        icon: faMobileScreenButton,
        name: 'Hiển thị số thẻ'
    },
    {
        icon: faChevronRight,
        name: 'Thiết lập Digital OTP'
    },
    {
        icon: faChevronRight,
        name: 'Chọn giao diện'
    },
    {
        icon: faChevronRight,
        name: 'Thông tin nhân viên hỗ trợ'
    }
];

const UtilitiesScreen = () => {
    const headerText = 'Tiện ích';
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View>
            <Header headerText={headerText} />
            <View style={{ padding: 15 }}>
                {
                    listUtil.map((eleUtil, index) => (
                        <Item key={index} name={eleUtil.name} icon={eleUtil.icon} index={index} headerText={headerText} image={eleUtil.image}/>
                    ))
                }
                
            </View>
        </View>
    )
}

export default UtilitiesScreen

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