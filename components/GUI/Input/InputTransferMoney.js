import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const InputTransferMoney = ({
	nameOfTextInput,
	placeHolder,
	icon,
	keyboardType,
	textDefault,
	textIcon,
}) => {
	const [isFocused, setIsFocused] = useState(false);
	const [text, setText] = useState("");

	const handleFocus = () => {
		setIsFocused(true);
	};

	const handleBlur = () => {
		setIsFocused(false);
	};

	const containerStyle = isFocused
		? { ...styles.container, borderColor: "blue" }
		: styles.container;

	const nameTextStyle = isFocused
		? { ...styles.nameText, color: "blue" }
		: styles.nameText;

	const redAsterisk = text === "" ? { color: "red" } : { display: "none" };

	return (
		<TouchableOpacity style={containerStyle}>
			<View style={styles.nameInput}>
				<Text style={nameTextStyle}>{nameOfTextInput}</Text>
				<Text style={redAsterisk}>*</Text>
			</View>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
				}}>
				<TextInput
					style={styles.input}
					placeholder={placeHolder}
					placeholderTextColor={"#9d9eae"}
					onFocus={handleFocus}
					onBlur={handleBlur}
					value={text || textDefault}
					onChangeText={(value) => setText(value)}
					keyboardType={keyboardType}
					returnKeyType="done" 
				/>
				<View style={{ flexDirection: "row" }}>
					{textIcon && (
						<Text style={{ color: "#0c2bcc", marginRight: 3 }}>{textIcon}</Text>
					)}
					{icon && <FontAwesomeIcon icon={icon} style={{ color: "#0c2bcc" }} />}
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default InputTransferMoney;

const styles = StyleSheet.create({
	container: {
		borderWidth: 1,
		padding: 10,
		borderRadius: 10,
		marginVertical: 15,
	},
	nameInput: {
		position: "absolute",
		left: 15,
		top: -10,
		backgroundColor: "#fcfbfb",
		paddingHorizontal: 3,
		flexDirection: "row",
	},
	nameText: {
		backgroundColor: "transparent",
		color: "#767780",
	},
	input: {
		paddingRight: 100,
		fontSize: 16,
		padding: 5,
		paddingVertical: 10,
	},
});
