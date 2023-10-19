import { StyleSheet, View, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/GUI/Header/Header'
import { faCartShopping, faChartLine, faCoins, faCreditCard, faCreditCardAlt, faDollarSign, faFileInvoiceDollar, faGift, faHandHoldingDollar, faHandPointUp, faHandPointer, faHandshake, faMobileScreen, faMoneyBillTransfer, faPeopleRoof, faPiggyBank } from '@fortawesome/free-solid-svg-icons';
import Item from '../components/GUI/Item/Item';

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

export default function ProductScreen({navigation}) {
    const headerText = 'Sản phẩm';

    return (
        <View style={{flex: 1}}>
            <Header headerText={headerText}/>
            <ScrollView style={styles.container}>
                {
                    products.map((product,index) => (
                        <Item key={index} icon={product.icon} name={product.nameProduct}/>
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