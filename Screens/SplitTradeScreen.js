import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/GUI/Header/Header";

const SplitTradeScreen = ({navigation}) => {
	return (
		<View>
			<Header navigation={navigation} headerText={"Giao dịch tách lệnh"}/>
		</View>
	);
};

export default SplitTradeScreen;

const styles = StyleSheet.create({
    
});
