import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { Alert } from 'react-native';

const ButtonPrice = () => {
  return (
    <View>
      <TouchableOpacity>
        <View>
          <Button
            title={denomination}
            onPress={() => Alert.alert('Right button pressed')}
          />
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default ButtonPrice

const styles = StyleSheet.create({})