import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/GUI/Header/Header";

const MoneyTranferScreen = () => {
	const headerText = "Chuyển tiền";
	return (
		<View>
			<Header headerText={headerText} />
		</View>
	);
};

export default MoneyTranferScreen;

const styles = StyleSheet.create({});
