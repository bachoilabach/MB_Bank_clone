import Header from "../components/GUI/Header/Header";
import React, { useEffect, useState } from "react";
import {
	View,
	TextInput,
	StyleSheet,
	Keyboard,
	TouchableWithoutFeedback,
} from "react-native";
import Submit from "../components/GUI/Button/Button";
import RNPickerSelect from "react-native-picker-select";
import Input from "../components/GUI/Input/Input";
import { faL } from "@fortawesome/free-solid-svg-icons";

const documentTypes = [
	{ value: "1", label: "Căn cước công dân" },
	{ value: "2", label: "Hộ chiếu" },
	{ value: "3", label: "Chứng minh thư" },
	{ value: "4", label: "Chứng minh thư quân đội" },
];

const inputName = "Họ và tên";
const inputIdentification = "Số giấy tờ tùy thân";
const inputPhone = "Số điện thoại";

const typeDefault = "default";
const typeNumber = "numeric";

const ForgotPassword = ({ navigation }) => {
	const headerText = "Yêu cầu lấy lại mật khẩu";
	const buttonText = "Gửi";

	const [selectedDocumentType, setSelectedDocumentType] = useState(
		documentTypes[0].value
	);
	const [name, setName] = useState("");
	const [identification, setIdentification] = useState("");
	const [phone, setPhone] = useState("");

	// * check điều kiện
	const [isButtonDisabled, setIsButtonDisabled] = useState(true);
	const handleButtonPress = () => {
		// setIsButtonDisabled(true)
		console.log(isButtonDisabled);
	};

	const handleKeyboradDissmiss = () => {
		Keyboard.dismiss();
	};
	useEffect(() => {
		if (name && identification && phone) {
			setIsButtonDisabled(false);
		} else {
			setIsButtonDisabled(true);
		}
		console.log(name, identification, phone);
	}, [name, identification, phone]);

	return (
		<View style={styles.background}>
			<Header navigation={navigation} headerText={headerText} />
			<View style={styles.container}>
				<View style={{ flex: 1 }}>
					<TouchableWithoutFeedback onPress={handleKeyboradDissmiss}>
						<Input 
                            input={inputName} 
                            type={typeDefault} 
                            value={name}
                            onChangeText={(name)=>{setName(name)}}
                        />
					</TouchableWithoutFeedback>
					<RNPickerSelect
						style={pickerSelectStyles}
						value={selectedDocumentType}
						onValueChange={(value) => setSelectedDocumentType(value)}
						items={documentTypes}
					/>
					<TouchableWithoutFeedback>
						<Input
							input={inputIdentification}
							type={typeNumber}
							value={identification}
                            onChangeText={(identification)=>{setIdentification(identification)}}
						/>
					</TouchableWithoutFeedback>
					<TouchableWithoutFeedback>
						<Input 
                            input={inputPhone} 
                            type={typeNumber} 
                            value={phone} 
                            onChangeText={(phone)=>{setPhone(phone)}}
                        />
					</TouchableWithoutFeedback>
				</View>
				<Submit
					buttonText={buttonText}
					onPress={handleButtonPress}
					isDisabled={isButtonDisabled}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	background: {
		backgroundColor: "#f4f4fb",
		flex: 1,
	},
	container: {
		padding: 20,
		flex: 1,
	},

	textInput: {
		padding: 23,
		fontSize: 17,
		borderWidth: 1.5,
		marginBottom: 20,
		borderRadius: 5,
		borderColor: "#91939b",
		backgroundColor: "#fcfcfc",
	},
});

const pickerSelectStyles = StyleSheet.create({
	inputIOS: {
		fontSize: 17,
		paddingVertical: 23,
		borderWidth: 1.5,
		marginBottom: 20,
		borderRadius: 5,
		borderColor: "#91939b",
		backgroundColor: "#fcfcfc",
		paddingHorizontal: 10,
	},
	inputAndroid: {
		fontSize: 17,
		paddingVertical: 23,
		borderWidth: 1.5,
		marginBottom: 20,
		borderRadius: 5,
		borderColor: "#91939b",
		backgroundColor: "#fcfcfc",
		paddingHorizontal: 10,
	},
});

export default ForgotPassword;
