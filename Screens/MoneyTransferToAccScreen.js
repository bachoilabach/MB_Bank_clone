import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/GUI/Header/Header";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const MoneyTransferToAccScreen = () => {
	return (
		<View>
			<Header headerText={"Chuyển tiền"} />
			<View style={{ padding: 15 }}>
				<View>
					<Text style={{ fontSize: 17 }}>Từ tài khoản nguồn</Text>
				</View>

				<TouchableOpacity style={styles.account}>
					<View style={{ flexDirection: "row" }}>
						<View>
							<Image
								source={require("../assets/Logo_MB_new.png")}
								style={{ width: 40, height: 40, marginRight: 10 }}
								resizeMode="contain"
							/>
						</View>
						<View>
							<Text style={{ color: "#9d9eae",marginBottom: 10 }}>
								0346331968 - TRAN VIET BACH
							</Text>
							<Text style={{ fontWeight: "600", fontSize: 18 }}>
								1,000,000,000
								<Text style={{ color: "#9d9eae",fontWeight: 'normal' }}> VND</Text>
							</Text>
						</View>
					</View>
                    <FontAwesomeIcon icon={faChevronDown} style={{color: "#9d9eae"}} size={17}/>
				</TouchableOpacity>
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
		borderRadius: 10,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
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
