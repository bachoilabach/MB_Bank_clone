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

const MoneyTranferScreen = () => {
	const headerText = "Chuyển tiền";
	const [selectedButton, setSelectedButton] = useState({
		"STK đã lưu": true,
		"Gần đây": false,
		"Mẫu giao dịch": false,
	});
	const handleButtonPress = (buttonName) => {
		setSelectedButton((prevSelectedButton) => ({
			...Object.fromEntries(
				Object.keys(prevSelectedButton).map((key) => [key, false])
			),
			[buttonName]: true,
		}));
	};
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
						onPress={handlePressSplitTrade}
					>
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
						onPress={handlePressNewBeneficiaries}
					>
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
						<TouchableOpacity
							key={index}
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
					<TouchableOpacity
						style={{
							flexDirection: "row",
							alignItems: "center",
							justifyContent: "space-between",
							borderBottomWidth: 2,
							borderBottomColor: "#dcdcde",
						}}
					
					>
						<View
							style={{
								flexDirection: "row",
								alignItems: "center",
								paddingVertical: 20,
							}}>
							<View>
								<Image
									source={require("../assets/bee.jpg")}
									resizeMode="contain"
									style={{
										width: 30,
										height: 30,
										margin: 10,
									}}
								/>
							</View>
							<View>
								<Text style={{ fontWeight: "bold", fontSize: 18 }}>
									TRAN VIET BACH
								</Text>
								<Text style={{ color: "#d4d4d4" }}>0346331968</Text>
								<Text style={{ color: "#d4d4d4" }}>Quân đội (MB)</Text>
							</View>
						</View>
						<View>
							<FontAwesomeIcon icon={faEllipsis} size={24} />
						</View>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default MoneyTranferScreen;

const styles = StyleSheet.create({});
