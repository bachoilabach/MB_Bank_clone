import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const ButtonInMoneyTransferScreen = ({ btn, selectedButton, handleButtonPress }) => {
    
	return (
		<TouchableOpacity
			style={{
				paddingVertical: 10,
				paddingHorizontal: 15,
				borderRadius: 20,
				borderWidth: 1,
				borderColor: selectedButton[btn.text] ? "#0c2bcc" : "gray",
			}}
			onPress={() => handleButtonPress(btn.text)}>
			<Text
				style={{
					color: selectedButton[btn.text] ? "#0c2bcc" : "gray",
					fontSize: 17,
					fontWeight: 600,
				}}>
				{btn.text}
			</Text>
		</TouchableOpacity>
	);
};

export default ButtonInMoneyTransferScreen;

const styles = StyleSheet.create({});
