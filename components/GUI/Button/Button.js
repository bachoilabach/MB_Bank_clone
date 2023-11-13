import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";

function Submit({ buttonText, onPress, isDisabled}) {
	const [name, setName] = useState(buttonText);
	const [buttonColor, setButtonColor] = useState({
		backgroundColor: isDisabled ? "#0e27ce" : "#fff",
		textColor: "#fff",
	});

	useEffect(() => {
		setButtonColor({
			backgroundColor: isDisabled ? "#fff" : "#0e27ce",
			textColor:isDisabled ? "#0e27ce" : "#fff",
		});
	}, [isDisabled]);

	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={[
					styles.button,
					{
						backgroundColor: buttonColor.backgroundColor,
					},
				]}
				onPress={onPress}
				disabled={isDisabled}
                >
				<Text
					style={{
						fontSize: 18,
						color: buttonColor.textColor,
					}}>
					{name}
				</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		borderRadius: 5,
	},

	button: {
		justifyContent: "center",
		alignItems: "center",
		paddingVertical: 15,
		borderRadius: 5,
		borderWidth: 1,
		borderColor: "#0e27ce",
	},
});

export default Submit;
