import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/GUI/Header/Header'

const RechargePhoneScreen = () => {
    const headerText = 'Nạp tiền điện thoại';
  return (
    <View>
      <Header headerText={headerText}/>
    </View>
  )
}

export default RechargePhoneScreen

const styles = StyleSheet.create({})