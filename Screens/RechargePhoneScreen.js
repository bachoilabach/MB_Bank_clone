import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/GUI/Header/Header'
import Input from '../components/GUI/Input/Input';
import InputRechargePhone from '../components/GUI/Input/InputRechargePhone';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import ButtonPrice from '../components/GUI/Button/ButtonPrice';

const RechargePhoneScreen = () => {
    const headerText = 'Nạp tiền điện thoại';
    const listPrice = [
      { id: 1, denomination: "500,000"  },
      { id: 2, denomination: "300,000"  },
      { id: 3, denomination: "200,000"  },
      { id: 4, denomination: "100,000"  },
      { id: 5, denomination: "50,000"  },
      { id: 6, denomination: "30,000"  },
      { id: 7, denomination: "20,000"  },
      { id: 8, denomination: "10,000"  },
    ];
  return (
    <View>
      <Header headerText={headerText}/>
      <View style={{padding: 15}}>
        <InputRechargePhone
          placeHolder="Nhập số điện thoại"
          keyboardType="numeric"
          icon = {faAddressBook}
        />
        <View>
          <Text style={{fontSize: 20, paddingTop: 15}}>Chọn mệnh giá</Text>
        </View>
          {
            
          }
      </View>
    </View>
  )
}

export default RechargePhoneScreen

const styles = StyleSheet.create({})