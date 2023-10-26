import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	FlatList,
	Modal,
} from "react-native";
import React, { useState } from "react";
import Header from "../components/GUI/Header/Header";
import { Image } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
	faChevronDown,
	faAddressCard,
	faTimes,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Switch } from "react-native";
import ButtonInMoneyTransferScreen from "../components/GUI/Button/ButtonInMoneyTransferScreen";
import Button from "../components/GUI/Button/Button";
import InputTransferMoney from "../components/GUI/Input/InputTransferMoney";
import BankList from "../components/GUI/BankList/BankList";

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

const bankList = [
	{ id: 1, name: "Ngân hàng A" },
	{ id: 2, name: "Ngân hàng B" },
	{ id: 3, name: "Ngân hàng C" },
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

	return (
		<View style={{ flex: 1 }}>
			<Header navigation={navigation} headerText={"Chuyển tiền"} />
			<View style={{ padding: 15, backgroundColor: "#fcfbfb", flex: 1 }}>
				<View>
					<Text style={{ fontSize: 17 }}>Từ tài khoản nguồn</Text>
				</View>
				{/* Tài khoản */}
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

				<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
					<Text style={{ fontSize: 17 }}>Đến</Text>
					<View style={{ flexDirection: "row" }}>
						<Text style={{ color: "#0c2bcc", fontWeight: 600, fontSize: 17 }}>
							Quét QR
						</Text>
						<FontAwesomeIcon icon={faChevronRight} color="#0c2bcc" />
					</View>
				</View>

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

				<TouchableOpacity
					style={styles.inputContainer}
					onPress={toggleBankList}>
					<Text style={styles.inputText}>
						{selectedBank ? selectedBank.name : "Chọn ngân hàng"}
					</Text>
					<FontAwesomeIcon
						icon={faChevronDown}
						style={{ color: "#0c2bcc" }}
						size={20}
					/>
				</TouchableOpacity>

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
			</View>
			<Modal
			animationType="slide"
			transparent={true}
			visible={showBankList}
			onRequestClose={toggleBankList}>
			<View style={styles.modalContainer}>
				<View style={styles.bankListContainer}>
					<View style={styles.modalHeader}>
						<Text style={styles.bankListHeader}>Chọn ngân hàng</Text>
						<TouchableOpacity onPress={toggleBankList}>
							<FontAwesomeIcon
								icon={faTimes} // Đảm bảo rằng bạn đã định nghĩa faTimes
								style={{ color: "red" }}
								size={20}
							/>
						</TouchableOpacity>
					</View>
					<FlatList
						data={bankList}
						keyExtractor={(item) => item.id.toString()}
						renderItem={({ item }) => (
							<TouchableOpacity
								style={styles.bankListItem}
								onPress={() => selectBank(item)}>
								<Text style={styles.bankListItemText}>{item.name}</Text>
							</TouchableOpacity>
						)}
					/>
				</View>
			</View>
		</Modal>
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
	// ... (Các kiểu dáng CSS khác giữ nguyên)
	modalContainer: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
	},
	modalHeader: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 10,
	},
	bankListContainer: {
		backgroundColor: "#fff",
		width: "100%",
		borderRadius: 10,
		borderWidth: 1,
		borderColor: "#ccc",
		minHeight: "50%",
	},
	bankListHeader: {
		fontSize: 16,
		fontWeight: "bold",
		marginLeft: 10,
	},
	bankListItem: {
		padding: 10,
	},
	bankListItemText: {
		fontSize: 16,
	},
});
