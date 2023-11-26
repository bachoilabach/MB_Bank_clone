import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faAngleLeft, faHouse } from "@fortawesome/free-solid-svg-icons";
import { SafeAreaView } from "react-native";

function Header({ headerText, navigation }) {
	const [name, setName] = useState(headerText);
	const tilte =
		headerText === "Yêu cầu lấy lại mật khẩu" ||
		headerText === "Chuyển tiền" ||
		headerText === "Nạp tiền điện thoại" ||
        headerText === "Giao dịch tách lệnh" ||
		headerText === "Xác nhận thông tin"||
		headerText === 'Lấy mã OTP' ||
		headerText === 'Nạp điện thoại';
	const goBack = () => {
		navigation.pop();
	};

	return (
		<View style={styles.container}>
			<SafeAreaView>
				<View style={styles.main}>
					{tilte && (
						<TouchableOpacity onPress={goBack} style={styles.icon}>
							<FontAwesomeIcon icon={faAngleLeft} size={23} color="#fff" />
						</TouchableOpacity>
					)}

					<Text style={[styles.text, !tilte && styles.centerText]}>{name}</Text>

					{tilte && (
						<TouchableOpacity onPress={()=>{navigation.navigate("Tabs")}} style={styles.icon}>
							<FontAwesomeIcon icon={faHouse} size={23} color="#fff" />
						</TouchableOpacity>
					)}
				</View>
			</SafeAreaView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		backgroundColor: "#0e27ce",
	},

	main: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingBottom: "5%",
		paddingLeft: "4%",
		paddingRight: "4%",
		paddingTop: '3%'
	},
	text: {
		color: "#fff",
		fontWeight: "bold",
		fontSize: 16.5,
	},
	centerText: {
		flex: 1,
		textAlign: "center",
	},
	icon: {
		paddingHorizontal: 10
	}
});

export default Header;
