import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	ScrollView,
	KeyboardAvoidingView,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/GUI/Header/Header";
import { Image } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
	faChevronDown,
	faAddressCard,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Switch } from "react-native";
import ButtonInMoneyTransferScreen from "../components/GUI/Button/ButtonInMoneyTransferScreen";
import Button from "../components/GUI/Button/Button";
import InputTransferMoney from "../components/GUI/Input/InputTransferMoney";
import { bankList } from "../data/BankList/BankListData";
import BankListModal from "../components/GUI/BankListModal/BankListModal";
// import listBtn from '../data/MoneyTransferToAccScreen/listBtn
const listBtn = [
	{
		text: "TK ngân hàng",
	},
	{
		text: "SĐT (MB)",
	},
	{
		text: "Số thẻ",
	},
];

const inputAccNum = [
	{
		nameOfTextInput: "Số tài khoản",
		placeHolder: "Nhập số tài khoản",
		textIcon: "STK đã lưu",
		icon: faAddressCard,
		keyboardType: "numeric",
		returnKeyType: "done",
	},
	{
		nameOfTextInput: "Tên tài khoản",
		placeHolder: "Tên tài khoản",
		keyboardType: "default",
	},
	{
		nameOfTextInput: "Số tiền",
		placeHolder: "Nhập số tiền",
		keyboardType: "number-pad",
		returnKeyType: "done",
	},
	{
		nameOfTextInput: "Nội dung chuyển khoản",
		textDefault: "TRAN VIET BACH chuyen khoan",
		keyboardType: "default",
	},
];

const BankLogo = [
	{
		id: 1,
		logo: require('../assets/BankLogo/Logo_MB_new.png')
	},
	{
		id: 2,
		logo: require('../assets/BankLogo/ViettePay.jpg')
	},
	{
		id: 3,
		logo: require('../assets/BankLogo/Logo-Agribank-V.webp')
	},
	{
		id: 4,
		logo: require('../assets/BankLogo/VietinBank.png')
	},
	{
		id: 5,
		logo: require('../assets/BankLogo/Bidv.jpg')
	},
	{
		id: 6,
		logo: require('../assets/BankLogo/Icon-Vietcombank.png')
	},
	{
		id: 7,
		logo: require('../assets/BankLogo/TechLogo.jpg')
	},
	{
		id: 8,
		logo: require('../assets/BankLogo/MSBLogo.png')
	},
	{
		id: 9,
		logo: require('../assets/BankLogo/TPBank.webp')
	},
	{
		id: 10,
		logo: require('../assets/BankLogo/Logo_SHB.jpeg')
	},


];

const MoneyTransferToAccScreen = ({ navigation }) => {
	const buttonText = "Tiếp tục";
	const [isEnabled, setIsEnabled] = useState(false);
	const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

	const [selectedButton, setSelectedButton] = useState({
		"TK ngân hàng": true,
		"SĐT (MB)": false,
		"Số thẻ": false,
	});


	const handleButtonPress = (buttonName) => {
		setSelectedButton((prevSelectedButton) => ({
			...Object.fromEntries(
				Object.keys(prevSelectedButton).map((key) => [key, false])
			),
			[buttonName]: true,
		}));
	};

	const [showBankList, setShowBankList] = useState(false);
	const [selectedBank, setSelectedBank] = useState(null);

	const toggleBankList = () => {
		setShowBankList(!showBankList);
	};

	const selectBank = (bank) => {
		setSelectedBank(bank);
		toggleBankList();
	};

	const redAsterisk =
		selectedBank !== null ? { display: "none" } : { color: "red" };

	return (
		<View style={{ flex: 1 }}>
			<Header navigation={navigation} headerText={"Chuyển tiền"} />
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "padding" : "height"}
				keyboardVerticalOffset={Platform.OS === "ios" ? 5 : 0}>
				<ScrollView
					style={{ padding: 15, backgroundColor: "#fcfbfb" }}
					keyboardShouldPersistTaps="always">
					<View>
						<Text style={{ fontSize: 17 }}>Từ tài khoản nguồn</Text>
					</View>

					<View style={styles.account}>
						<View style={{ flexDirection: "row", alignItems: "center" }}>
							<View>
								<Image
									source={require("../assets/Logo_MB_new.png")}
									style={{ width: 40, height: 40, marginRight: 10 }}
									resizeMode="contain"
								/>
							</View>
							<View>
								<Text style={{ color: "#9d9eae", marginBottom: 10 }}>
									0346331968 - TRAN VIET BACH
								</Text>
								<Text style={{ fontWeight: "600", fontSize: 18 }}>
									1,000,000,000
									<Text style={{ color: "#9d9eae", fontWeight: "normal" }}>
										{" "}
										VND
									</Text>
								</Text>
							</View>
						</View>
						<FontAwesomeIcon
							icon={faChevronDown}
							style={{ color: "#9d9eae" }}
							size={17}
							onPress={toggleBankList}
						/>
					</View>

					{/* Tài khoản nguồn */}
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							marginBottom: 20,
						}}>
						<Text style={{ fontSize: 16, color: "#0c2bcc" }}>
							Đặt làm tài khoản nguồn mặc định
						</Text>
						<Switch
							trackColor={{ false: "#767577", true: "#81b0ff" }}
							thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
							ios_backgroundColor="#3e3e3e"
							onValueChange={toggleSwitch}
							value={isEnabled}
						/>
					</View>

					{/*Quét QR */}
					<View
						style={{ flexDirection: "row", justifyContent: "space-between" }}>
						<Text style={{ fontSize: 17 }}>Đến</Text>
						<View style={{ flexDirection: "row" }}>
							<Text style={{ color: "#0c2bcc", fontWeight: 600, fontSize: 17 }}>
								Quét QR
							</Text>
							<FontAwesomeIcon icon={faChevronRight} color="#0c2bcc" />
						</View>
					</View>

					{/* Button */}
					<View
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							marginBottom: 15,
							marginTop: 10,
						}}>
						{listBtn.map((btn, index) => (
							<ButtonInMoneyTransferScreen
								key={index}
								btn={btn}
								selectedButton={selectedButton}
								handleButtonPress={handleButtonPress}
							/>
						))}
					</View>

					{/* Chọn ngân hàng */}
					<TouchableOpacity style={styles.container} onPress={toggleBankList}>
						<View style={styles.nameInput}>
							<Text>Chọn ngân hàng</Text>
							<Text style={redAsterisk}>*</Text>
						</View>
						<View
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
							}}>
							<Text style={styles.inputText}>
								{selectedBank ? selectedBank.name : "Chọn ngân hàng"}
							</Text>
							<View style={{ flexDirection: "row" }}>
								<FontAwesomeIcon
									icon={faChevronDown}
									style={{ color: "#0c2bcc" }}
								/>
							</View>
						</View>
					</TouchableOpacity>
					
					{/* Input */}
					{inputAccNum.map((item, index) => (
						<InputTransferMoney
							key={index}
							nameOfTextInput={item.nameOfTextInput}
							placeHolder={item.placeHolder}
							icon={item.icon}
							keyboardType={item.keyboardType}
							textDefault={item.textDefault}
							textIcon={item.textIcon}
						/>
					))}

					<Button buttonText={buttonText} />
				</ScrollView>
			</KeyboardAvoidingView>
			
			{/* Danh sách ngân hàng */}
			<BankListModal
				visible={showBankList}
				toggleBankList={toggleBankList}
				bankList={bankList}
				selectBank={selectBank}
				BankLogo={BankLogo}
			/>
		</View>
	);
};

export default MoneyTransferToAccScreen;

const styles = StyleSheet.create({
	account: {
		backgroundColor: "#fff",
		padding: 15,
		marginHorizontal: 10,
		marginVertical: 15,
		borderRadius: 20,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	inputContainer: {
		borderWidth: 1,
		// borderColor: "#ccc",
		borderRadius: 10,
		padding: 20,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginVertical: 10,
	},
	inputText: {
		color: "#0c2bcc",
		fontSize: 16,
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
	container: {
		borderWidth: 1,
		padding: 20,
		borderRadius: 10,
		marginVertical: 10,
	},
});
