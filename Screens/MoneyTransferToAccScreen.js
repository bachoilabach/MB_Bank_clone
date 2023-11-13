import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	ScrollView,
	KeyboardAvoidingView,
} from "react-native";
import React, { useEffect, useState, useTransition } from "react";
import Header from "../components/GUI/Header/Header";
import { Image } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
	faChevronDown,
	faAddressCard,
	faChevronRight,
	faL,
} from "@fortawesome/free-solid-svg-icons";
import { Switch } from "react-native";
import ButtonInMoneyTransferScreen from "../components/GUI/Button/ButtonInMoneyTransferScreen";
import Submit from "../components/GUI/Button/Button";
import InputTransferMoney from "../components/GUI/Input/InputTransferMoney";
import { bankList } from "../data/BankList/BankListData";
import BankListModal from "../components/GUI/BankListModal/BankListModal";
import { useMoney } from "../components/MoneyContext/MoneyContext";
import { Button } from "react-native";

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

const phoneNum = [
	{
		nameOfTextInput: "Số điện thoại",
		placeHolder: "Số điện thoại",
		textIcon: "Danh sách",
		icon: faAddressCard,
		keyboardType: "numeric",
		returnKeyType: "done",
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

const cardNum = [{}];
const BankLogo = [
	{
		id: 1,
		logo: require("../assets/BankLogo/Logo_MB_new.png"),
	},
	{
		id: 2,
		logo: require("../assets/BankLogo/ViettePay.jpg"),
	},
	{
		id: 3,
		logo: require("../assets/BankLogo/Logo-Agribank-V.webp"),
	},
	{
		id: 4,
		logo: require("../assets/BankLogo/VietinBank.png"),
	},
	{
		id: 5,
		logo: require("../assets/BankLogo/Bidv.jpg"),
	},
	{
		id: 6,
		logo: require("../assets/BankLogo/Icon-Vietcombank.png"),
	},
	{
		id: 7,
		logo: require("../assets/BankLogo/TechLogo.jpg"),
	},
	{
		id: 8,
		logo: require("../assets/BankLogo/MSBLogo.png"),
	},
	{
		id: 9,
		logo: require("../assets/BankLogo/TPBank.webp"),
	},
	{
		id: 10,
		logo: require("../assets/BankLogo/Logo_SHB.jpeg"),
	},
];

const MoneyTransferToAccScreen = ({ navigation }) => {
	const { defaultMoney } = useMoney();
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
		setCurrentTab(buttonName);
	};

	const [currentTab, setCurrentTab] = useState("TK ngân hàng");
	let currentList = [];
	if (currentTab === "TK ngân hàng") {
		currentList = inputAccNum;
	} else if (currentTab === "SĐT (MB)") {
		currentList = phoneNum;
	} else if (currentTab === "Số thẻ") {
		currentList = cardNum;
	}

	// * Danh sách ngân hàng
	const [showBankList, setShowBankList] = useState(false);
	const [selectedBank, setSelectedBank] = useState(null);
	const [bankID,setBankID] = useState(null);

	const toggleBankList = () => {
		setShowBankList(!showBankList);
	};

	// * Chọn ngân hàng
	const selectBank = (bank) => {
		setSelectedBank(bank);
		setBankID(bank.id)
		toggleBankList();
		console.log(bank.id);
	};

	// * Dấu sao
	const redAsterisk =
		selectedBank !== null ? { display: "none" } : { color: "red" };

	// * Check điều kiện
	const [isButtonDisabled, setIsButtonDisabled] = useState(true);

	// * Thêm state cho từng ô nhập
	const [stk, setSTK] = useState("");
	const [nameAcc, setNameAcc] = useState("");
	const [money, setMoney] = useState("");
	const [content, setContent] = useState("TRAN VIET BACH chuyen khoan");

	// * Hàm để lấy giá trị từ state theo tên trường nhập
	const getValueByInputName = (inputName) => {
		switch (inputName) {
			case "Số tài khoản":
				return stk;
			case "Tên tài khoản":
				return nameAcc;
			case "Số tiền":
				return money;
			case "Nội dung chuyển khoản":
				return content;
			default:
				return "";
		}
	};

	const checkConditions = () => {
		const conditions = [
			selectedBank !== null, // Chọn ngân hàng
			stk.trim() !== "", // Số tài khoản
			nameAcc.trim() !== "", // Tên tài khoản
			money.trim() !== "", // Số tiền
			content.trim() !== "", // Nội dung chuyển khoản
		];

		// * Nếu tất cả điều kiện đều đáp ứng, set isButtonDisabled là false
		setIsButtonDisabled(!conditions.every((condition) => condition));
	};

	// * Sử dụng useEffect để gọi hàm kiểm tra điều kiện khi có bất kỳ sự thay đổi nào trong các ô nhập
	useEffect(() => {
		checkConditions();
	}, [selectedBank, stk, nameAcc, money, content]);

	return (
		<View style={{ flex: 1 }}>
			<Header navigation={navigation} headerText={"Chuyển tiền"} />
			<KeyboardAvoidingView
				behavior={Platform.OS === "ios" ? "padding" : "height"}
				style={{ backgroundColor: "#fcfbfb", flex: 1 }}>
				<ScrollView
					style={{
						paddingHorizontal: 15,
						backgroundColor: "#fcfbfb",
						paddingVertical: 15,
					}}
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
							{/* Tài khoản */}
							<View>
								<Text style={{ color: "#9d9eae", marginBottom: 10 }}>
									0346331968 - TRAN VIET BACH
								</Text>
								<Text style={{ fontWeight: "600", fontSize: 18 }}>
									{defaultMoney}
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
					{currentTab === "TK ngân hàng" && (
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
					)}

					{/* Input */}
					{currentList.map((item, index) => (
						<InputTransferMoney
							key={index}
							nameOfTextInput={item.nameOfTextInput}
							placeHolder={item.placeHolder}
							icon={item.icon}
							keyboardType={item.keyboardType}
							value={getValueByInputName(item.nameOfTextInput)}
							textDefault={item.textDefault}
							textIcon={item.textIcon}
							onChangeText={(text) => {
								switch (item.nameOfTextInput) {
									case "Số tài khoản":
										setSTK(text);
										break;
									case "Tên tài khoản":
										setNameAcc(text);
										break;
									case "Số tiền":
										setMoney(text);
										break;
									case "Nội dung chuyển khoản":
										setContent(text);
										break;
									// Thêm các trường khác nếu cần
									default:
										break;
								}
								checkConditions();
							}}
						/>
					))}

					<Submit
						buttonText={"Tiếp tục"}
						onPress={() => {
							navigation.replace("ConfirmScreen", {
								selectedBank,
								stk,
								nameAcc,
								money,
								content,
								BankLogo,
								bankID,
							});
						}}
						isDisabled={isButtonDisabled}
					/>
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
	containerBtn: {
		backgroundColor: "#0e27ce",
		borderRadius: 5,
	},

	button: {
		justifyContent: "center",
		alignItems: "center",
	},

	textButton: {
		fontSize: 15,
		color: "#fff",
	},
});
