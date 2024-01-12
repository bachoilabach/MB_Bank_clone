import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/GUI/Header/Header";
import Submit from "../components/GUI/Button/Button";
import { TouchableOpacity } from "react-native";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ImageBackground } from "react-native";
import VNnum2words from 'vn-num2words';

const ConfirmScreen = ({ route }) => {
	const navigation = useNavigation();
	const { selectedBank, stk, nameAcc, money, content, BankLogo, bankID } =
		route.params;
	const moneyNum = Number(money);
	const moneyString = moneyNum.toLocaleString('en-US');
	console.log(moneyString);
	const moneyToWords = VNnum2words(moneyNum);
	const detail = [
		{
			tit: "Phí giao dịch",
			des: "Miễn phí",
		},
		{
			tit: "Số tiền bằng chữ",
			des: `${moneyToWords} Việt Nam đồng`,
		},
		{
			tit: "Hình thức chuyển tiền",
			des: "Chuyển nhanh Napas 247",
		},
		{
			tit: "Nội dung",
			des: content,
		},
	];
	const { name, moneyOwn, sdt } = route.params || {};
	const [userData, setUserData] = useState({});
	useEffect(() => {
		if (name && moneyOwn && sdt) {
			setUserData({
				name: name,
				moneyOwn: moneyOwn,
				sdt: sdt,
			});
		}
	}, [name, moneyOwn, sdt]);
	return (
		<View style={{ flex: 1 }}>
			<Header navigation={navigation} headerText={"Xác nhận thông tin"} />
			<View>
				{/* Ảnh */}
				<View>
					{/* số tiền chuyển */}
					<View style={[styles.center, { marginTop: 30 }]}>
						<Text style={[styles.txtAmount, styles.black]}>Số tiền chuyển</Text>
						<Text style={[styles.txtTotal, styles.black]}>{moneyString} VND</Text>
					</View>

					<View style={styles.fromAccountContainer}>
						{/* Được chuyển từ tài khoản */}
						<View style={styles.mbt30}>
							<View>
								<Text style={{ fontSize: 16 }}>Từ tài khoản</Text>
							</View>
							<View style={[styles.row, styles.center]}>
								<View>
									<Image
										source={require("../assets/Logo_MB_new.png")}
										resizeMode="contain"
										style={{ width: 30, height: 30, marginRight: 10 }}
									/>
								</View>
								<View>
									<Text style={styles.txtNameUser}>{userData.name}</Text>
									<Text style={{ fontSize: 17 }}>{userData.sdt}</Text>
								</View>
							</View>
						</View>

						{/* Đến tài khoản */}
						<View style={styles.mbt30}>
							<View>
								<Text style={{ fontSize: 16 }}>Đến tài khoản</Text>
							</View>
							<View style={[styles.row, styles.center]}>
								<View>
									<Image
										source={BankLogo.find((item) => item.id === bankID).logo}
										resizeMode="contain"
										style={{ width: 30, height: 30, marginRight: 10 }}
									/>
								</View>
								<View>
									<Text style={styles.txtNameUser}>{nameAcc}</Text>
									<Text style={{ fontSize: 17 }}>{stk}</Text>
									<Text style={{ fontSize: 15, width: "65%" }}>
										{selectedBank.name}
									</Text>
								</View>
							</View>
						</View>
					</View>

					{/* Chi tiết */}
					<View style={styles.detailTrade}>
						{detail.map((item, index) => (
							<View style={[styles.row, { paddingBottom: 15 }]} key={index}>
								<Text style={{ color: "#9696ae", width: "50%" }}>
									{item.tit}
								</Text>
								<View style={{ width: "50%" }}>
									<Text style={{ fontWeight: 500 }}>{item.des}</Text>
								</View>
							</View>
						))}
					</View>
				</View>
			</View>
			<View style={styles.container}>
				<Submit
					buttonText={"Xác nhận"}
					onPress={() =>
						navigation.replace("TakeOTP", {
							money: money, // Số tiền
							nameAcc: nameAcc, // Tên tài khoản
							stk: stk, // Số tài khoản
							selectedBank: selectedBank, // Thông tin ngân hàng
							content: content, // Nội dung
							BankLogo: BankLogo, // Logo ngân hàng
							bankID: bankID, // ID ngân hàng
							name: name,
							moneyOwn: moneyOwn,
							sdt: sdt,
						})
					}
				/>
			</View>
		</View>
	);
};

export default ConfirmScreen;

const styles = StyleSheet.create({
	center: {
		alignItems: "center",
	},

	between: {
		justifyContent: "space-between",
	},

	mbt30: {
		marginBottom: 20,
	},

	row: {
		flexDirection: "row",
	},

	black: {
		color: "black",
	},

	img: {
		flex: 1,
		height: "90%",
		// borderRadius: "100%"
		borderBottomLeftRadius: 200,
	},
	txtAmount: {
		marginBottom: 30,
		// paddingLeft: "-10%",
		fontSize: 18,
	},
	txtTotal: {
		fontSize: 35,
		fontWeight: "bold",
		// paddingLeft: "10%",
	},
	fromAccountContainer: {
		width: "90%",
		backgroundColor: "#fff",
		// position: "absolute",
		bottom: 0,
		padding: 10,
		margin: 20,
		borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},

	fromAccountText: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#000",
	},

	txtNameUser: {
		fontWeight: "bold",
		fontSize: 17,
	},

	detailTrade: {
		width: "90%",
		backgroundColor: "#fff",
		position: "absolute",
		top: "95%",
		paddingTop: 15,
		paddingHorizontal: 10,
		margin: 20,
		borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	container: {
		backgroundColor: "#0e27ce",
		borderRadius: 5,
		margin: 10,
		position: "absolute",
		bottom: 15,
		width: "95%",
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
