import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import Header from "../components/GUI/Header/Header";
import { TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
	faDollarSign,
	faEllipsis,
	faMagnifyingGlass,
	faQrcode,
	faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";
import ButtonInMoneyTransferScreen from "../components/GUI/Button/ButtonInMoneyTransferScreen";

const listBtn = [
	{
		text: "STK đã lưu",
	},
	{
		text: "Gần đây",
	},
	{
		text: "Mẫu giao dịch",
	},
];

const savedList = [
	{
		image: require("../assets/Logo_MB_new.png"),
		nameAccount: "TRAN VIET BACH",
		accountNumber: "0346331968",
		bankName: "Quân đội(MB)",
	},
];

const recentList = [];

const transactionTemplateList = [];

const MoneyTranferScreen = () => {
	const headerText = "Chuyển tiền";
	const [selectedButton, setSelectedButton] = useState({
		"STK đã lưu": true,
		"Gần đây": false,
		"Mẫu giao dịch": false,
	});

	// * Màu nút

	const handleButtonPress = (buttonName) => {
		setSelectedButton((prevSelectedButton) => ({
			...Object.fromEntries(
				Object.keys(prevSelectedButton).map((key) => [key, false])
			),
			[buttonName]: true,
		}));
		setCurrentTab(buttonName);
	};

	//* Chuyển tab

	const [currentTab, setCurrentTab] = useState("STK đã lưu");
	let currentList = [];
	if (currentTab === "STK đã lưu") {
		currentList = savedList;
	} else if (currentTab === "Gần đây") {
		currentList = recentList;
	} else if (currentTab === "Mẫu giao dịch") {
		currentList = transactionTemplateList;
	}

	const navigation = useNavigation();
	const handlePressSplitTrade = () => {
		navigation.navigate("SplitTrade");
	};

	const handlePressNewBeneficiaries = () => {
		navigation.navigate("MoneyTransferToAcc");
	};
	return (
		<View>
			<Header navigation={navigation} headerText={headerText} />
			{/* Top */}
			<View style={{ padding: 15 }}>
				<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
					<TouchableOpacity
						style={{
							backgroundColor: "#fff",
							padding: 17,
							borderRadius: 10,
							flexDirection: "row",
							width: "48%",
							alignItems: "center",
						}}>
						<FontAwesomeIcon
							style={{ color: "#0c2bcc" }}
							icon={faQrcode}
							size={30}
						/>
						<Text style={{ fontWeight: 600, fontSize: 17, marginLeft: 10 }}>
							Quét QR
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							backgroundColor: "#fff",
							padding: 17,
							borderRadius: 10,
							flexDirection: "row",
							width: "48%",
							alignItems: "center",
						}}
						onPress={handlePressSplitTrade}>
						<FontAwesomeIcon
							style={{ color: "#0c2bcc" }}
							icon={faDollarSign}
							size={30}
						/>
						<Text
							style={{
								fontWeight: 600,
								fontSize: 17,
								marginLeft: 10,
								width: 100,
							}}>
							Giao dịch tách lệnh
						</Text>
					</TouchableOpacity>
				</View>
				<View style={{ paddingVertical: 20 }}>
					<TouchableOpacity
						style={{
							backgroundColor: "#fff",
							padding: 17,
							borderRadius: 10,
							flexDirection: "row",
							alignItems: "center",
						}}
						onPress={handlePressNewBeneficiaries}>
						<FontAwesomeIcon
							style={{ color: "#0c2bcc" }}
							icon={faUser}
							size={30}
						/>
						<Text style={{ fontWeight: 600, fontSize: 17, marginLeft: 10 }}>
							Người hưởng thụ mới
						</Text>
					</TouchableOpacity>
				</View>
			</View>

			{/* Main */}
			<View style={{ backgroundColor: "#fff", padding: 15 }}>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						marginBottom: 15,
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

				{/* Search */}
				<View
					style={{
						backgroundColor: "#f3f3f6",
						borderRadius: 10,
						marginBottom: 15,
					}}>
					<View style={{ padding: 15, flexDirection: "row" }}>
						<FontAwesomeIcon
							icon={faMagnifyingGlass}
							size={24}
							style={{ color: "#dcdcde" }}
						/>
						<TextInput
							style={{
								flex: 1,
								marginLeft: 15,
								fontSize: 16,
							}}
							placeholderTextColor={"#dcdcde"}
							placeholder="Tìm tên/STK người thụ hưởng"
						/>
					</View>
				</View>

				{/* Account */}

				<View>
					{currentList.length === 0 ? (
						<Text>Bạn không có dữ liệu</Text>
					) : (
						currentList.map((item, index) => (
							<TouchableOpacity style={styles.account} key={index}>
								<View style={styles.accountContainer}>
									<View>
										<Image
											source={item.image}
											resizeMode="contain"
											style={styles.accountImg}
										/>
									</View>
									<View>
										<Text style={{ fontWeight: "bold", fontSize: 18 }}>
											{item.nameAccount}
										</Text>
										<Text style={{ color: "#d4d4d4" }}>
											{item.accountNumber}
										</Text>
										<Text style={{ color: "#d4d4d4" }}>{item.bankName}</Text>
									</View>
								</View>
								<View>
									<FontAwesomeIcon icon={faEllipsis} size={24} />
								</View>
							</TouchableOpacity>
						))
					)}
				</View>
			</View>
		</View>
	);
};

export default MoneyTranferScreen;

const styles = StyleSheet.create({
	account: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		borderBottomWidth: 2,
		borderBottomColor: "#dcdcde",
	},

	accountContainer: {
		flexDirection: "row",
		alignItems: "center",
		paddingVertical: 20,
	},

	accountImg: {
		width: 30,
		height: 30,
		margin: 10,
	},
});
