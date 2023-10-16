import React from "react";
import { View, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import AppNavigator from './Navigation/index'; 
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Screens/HomeScreen';
import Tabs from './Navigation/tabs/tabs';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <AppNavigator />
        {/* <HomeScreen/> */}
        {/* <Tabs /> */}
        <StatusBar style="auto" barStyle="light-content"/>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    width: '100%'
  },
});
