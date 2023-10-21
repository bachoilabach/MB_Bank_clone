import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Header from "../components/GUI/Header/Header";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
	faChevronCircleRight,
	faChevronDown,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Switch } from "react-native";

const MoneyTransferToAccScreen = ({ navigation }) => {
	const [isEnabled, setIsEnabled] = useState(false);
	const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
	return (
		<View>
			<Header navigation={navigation} headerText={"Chuyển tiền"} />
			<View style={{ padding: 15 }}>
				<View>
					<Text style={{ fontSize: 17 }}>Từ tài khoản nguồn</Text>
				</View>
				{/* Tài khoản */}
				<TouchableOpacity style={styles.account}>
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
					/>
				</TouchableOpacity>

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
					<Text style={{fontSize: 17}}>Đến</Text>
					<View style={{ flexDirection: "row"}}>
						<Text style={{color: "#0c2bcc", fontWeight: 600,fontSize: 17}}>Quét QR</Text>
						<FontAwesomeIcon icon={faChevronRight} color="#0c2bcc"/>
					</View>
				</View>
			</View>
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
});
