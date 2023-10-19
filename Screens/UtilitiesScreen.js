import { Image, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../components/GUI/Header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBell, faBrush, faChevronRight, faCreditCard, faFileCirclePlus, faFileLines, faFileSignature, faMobileScreenButton, faPhone, faQrcode } from '@fortawesome/free-solid-svg-icons';
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
        image: require('../assets/Digital.png'),
        icon: '',
        name: 'Thiết lập Digital OTP'
    },
    {
        icon: faBrush,
        name: 'Chọn giao diện'
    },
    {
        icon: faFileLines,
        name: 'Thông tin nhân viên hỗ trợ'
    },
    {
        icon: faBell,
        name: 'Đăng ký biến động số dư',
    }, 
    {
        icon: faQrcode,
        name: 'Tạo QR không cần đăng nhập',
    },
    {
        icon: faQrcode,
        name: 'Danh sách mã QR',
    },
    {
        icon: faCreditCard,
        name: 'Thay đổi hạn mức chuyển tiền',
    },
    {
        icon: faFileCirclePlus,
        name: 'Giao dịch nộp/rút tiền tại quầy',
    },
    {
        icon: faFileCirclePlus,
        name: 'Xác nhận giao dịch tại quầy',
    },
    {
        icon: faCreditCard,
        name: 'Chọn tài khoản số đẹp VND',
    },
    {
        icon: faFileSignature,
        name: 'Thông tin chữ ký số',
    }
];

const UtilitiesScreen = () => {
    const headerText = 'Tiện ích';
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={{flex: 1}}>
            <Header headerText={headerText} />
            <ScrollView>
                <View style={{ padding: 15 }}>
                    {
                        listUtil.map((eleUtil, index) => (
                            <Item key={index} name={eleUtil.name} icon={eleUtil.icon} index={index} headerText={headerText} image={eleUtil.image} />
                        ))
                    }
                </View>
            </ScrollView>
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