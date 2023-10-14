import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../components/GUI/Header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCartShopping, faChartLine, faChevronRight, faCoins, faCreditCard, faCreditCardAlt, faDollarSign, faFileInvoiceDollar, faGift, faHandHoldingDollar, faHandPointUp, faHandPointer, faHandshake, faMobileScreen, faMoneyBillTransfer, faPeopleRoof, faPiggyBank } from '@fortawesome/free-solid-svg-icons';

const products = [
    {
        icon: faMoneyBillTransfer,
        nameProduct: 'Chuyển tiền',
    },
    {
        icon: faDollarSign,
        nameProduct: 'Giao dịch ngoại tệ',
    },
    {
        icon: faMobileScreen,
        nameProduct: 'Chuyển tiền đến Viettel Money',
    },
    {
        icon: faMobileScreen,
        nameProduct: 'Nạp tiền điện thoại',
    },
    {
        icon: faCreditCard,
        nameProduct: 'Nạp tiền từ thẻ ATM',
    },
    {
        icon: faFileInvoiceDollar,
        nameProduct: 'Thanh toán',
    },
    {
        icon: faHandPointUp,
        nameProduct: 'Rút tiền ATM',
    },
    {
        icon: faCoins,
        nameProduct: 'Dịch vụ trả góp thẻ tín dụng',
    },
    {
        icon: faGift,
        nameProduct: 'Quà tặng',
    },
    {
        icon: faCreditCardAlt,
        nameProduct: 'Dịch vụ thẻ',
    },
    {
        icon: faPiggyBank,
        nameProduct: 'Tiền gửi & Đầu tư',
    },
    {
        icon: faHandHoldingDollar,
        nameProduct: 'Vay trực tuyến',
    },
    {
        icon: faChartLine,
        nameProduct: 'Bảo hiểm, Chứng khoán vay và tiêu dùng',
    },
    {
        icon: faHandshake,
        nameProduct: 'Đối tác',
    },
    {
        icon: faCartShopping,
        nameProduct: 'Mua hàng tại Nhật Bản',
    },
    {
        icon: faCreditCard,
        nameProduct: 'UnionPay QR',
    },
    {
        icon: faMoneyBillTransfer,
        nameProduct: 'Ví điện tử',
    },
    {
        icon: faPeopleRoof,
        nameProduct: 'Gia đình',
    },    
];

export default function ProductScreen() {
    const headerText = 'Sản phẩm';

    return (
        <View style={{flex: 1}}>
            <Header headerText={headerText}/>
            <ScrollView style={styles.container}>
                {
                    products.map((product,index) => (
                        <TouchableOpacity style={styles.product}v key={index}>
                            <View style={{flexDirection: 'row', justifyContent:'space-between',alignItems: 'center',paddingHorizontal: 15,paddingVertical: 23}}>    
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <FontAwesomeIcon icon={product.icon} size={35} style={{color:"#0d22cc"}}/>
                                    <Text style={{fontSize: 16, marginLeft: 15,fontWeight: '600'}}>{product.nameProduct}</Text>
                                </View>
                                <View>
                                    <FontAwesomeIcon icon={faChevronRight} size={16} style={{color:"#0d22cc"}}/> 
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },

    product: {
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