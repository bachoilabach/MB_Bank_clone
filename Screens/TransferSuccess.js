import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/GUI/Header/Header";
import { SafeAreaView } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
	faCheck,
	faCircleCheck,
	faFileInvoice,
	faMoneyBill,
	faShareNodes,
	faUser,
	faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { useMoney } from "../components/MoneyContext/MoneyContext";

const TransferSuccess = ({ route, navigation }) => {
	const { money, nameAcc, stk, selectedBank, content, BankLogo, bankID } =
		route.params;
	const { name, moneyOwn, sdt } = route.params || {};
	const [userData, setUserData] = useState({});
	const moneyNum = Number(money);
	const moneyString = moneyNum.toLocaleString('en-US');
	const detail = [
		{
			tit: "Tài khoản nguồn",
			des: `${sdt}`,
			nameAcc: `${name}`,
		},
		{
			tit: "Nội dung",
			des: content,
		},
		{
			tit: "Thời gian",
			des: "00:00:00, 15/11/2023",
		},
		{
			tit: "Hình thức chuyển tiền",
			des: "Chuyển nhanh Napas 247",
		},
		{
			tit: "Mã giao dịch",
			des: "FT1234567890",
		},
	];
	const { defaultMoney,setDefaultMoney } = useMoney();
	const defaultMoneyString = defaultMoney; // Chuỗi số tiền
	const defaultMoneyNumber = parseInt(defaultMoneyString.replace(/,/g, ""), 10);
	const currentMonney = defaultMoneyNumber - moneyNum;
	console.log('====================================');
	console.log(currentMonney);
	console.log('====================================');
	useEffect(() => {
		setDefaultMoney(currentMonney.toLocaleString('en-US'))
		if (name && moneyOwn && sdt) {
			setUserData({
				name: name,
				moneyOwn: currentMonney.toLocaleString('en-US'),
				sdt: sdt,
			});
		}
	}, [name, moneyOwn, sdt]);

	return (
		<View style={{}}>
			{/* <Header headerText={""}/> */}
			<SafeAreaView />
			<View style={[styles.center]}>
				<View style={[styles.icon, styles.mgbt20]}>
					<FontAwesomeIcon icon={faCheck} size={40} color="#fff" />
				</View>
				{/*  */}

				<View style={styles.mgbt20}>
					<View style={styles.center}>
						<Text style={{ fontSize: 16, paddingBottom: 10 }}>
							Bạn đã chuyển tiền thành công
						</Text>
						<Text style={{ fontSize: 40, fontWeight: 700 }}>{moneyString} VND</Text>
					</View>
				</View>

				<TouchableOpacity style={[styles.btnShare, styles.mgbt20]}>
					<FontAwesomeIcon icon={faShareNodes} size={20} color="#fff" />
					<Text style={{ color: "#fff", marginLeft: 15, fontSize: 18 }}>
						Chia sẻ
					</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.fromAccountContainer}>
				{/* Đến tài khoản */}
				<View style={styles.mgbt20}>
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
							<Text style={{ fontSize: 15, width: "70%" }}>
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
						<Text style={{ color: "#9696ae", width: "50%" }}>{item.tit}</Text>
						<View style={{ width: "50%" }}>
							<Text style={{ fontWeight: 500 }}>{item.des}</Text>
							<Text style={{ fontWeight: 500 }}>{item.nameAcc}</Text>
						</View>
					</View>
				))}
			</View>

			{/* button */}
			<View
				style={[
					{
						paddingHorizontal: 15,
						flexDirection: "row",
						justifyContent: "space-between",
					},
					styles.mgbt20,
				]}>
				<View>
					<TouchableOpacity style={styles.btnSave}>
						<FontAwesomeIcon
							icon={faUserPlus}
							size={24}
							style={{ marginRight: 5 }}
							color="#0e27ce"
						/>
						<Text style={{ color: "#0e27ce" }}>Lưu người thụ hưởng</Text>
					</TouchableOpacity>
				</View>
				<View>
					<TouchableOpacity style={[styles.btnSave, { paddingHorizontal: 15 }]}>
						<FontAwesomeIcon
							icon={faFileInvoice}
							size={24}
							color="#0e27ce"
							style={{ marginRight: 5 }}
						/>
						<Text style={{ color: "#0e27ce" }}>Lưu mẫu giao dịch</Text>
					</TouchableOpacity>
				</View>
			</View>

			<View
				style={{
					paddingHorizontal: 15,
					flexDirection: "row",
					justifyContent: "space-between",
				}}>
				<TouchableOpacity
					style={styles.btnBack}
					onPress={() =>
						navigation.navigate("Tabs", {
							name: name,
							moneyOwn: currentMonney.toLocaleString('en-US'),
							sdt: sdt,
						})
					}>
					<Text style={{ color: "#0e27ce", fontSize: 15 }}>Về trang chủ</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.btnNew}
					onPress={() =>
						navigation.navigate("MoneyTransfer", {
							name: name,
							moneyOwn: currentMonney.toLocaleString('en-US'),
							sdt: sdt,
						})
					}>
					<Text style={{ color: "#fff", fontSize: 15 }}>
						Tạo giao dịch khác
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default TransferSuccess;

const styles = StyleSheet.create({
	icon: {
		backgroundColor: "#0e27ce",
		padding: 10,
		borderRadius: "50%",
	},
	center: {
		alignItems: "center",
	},
	mgbt20: {
		marginBottom: 15,
	},
	btnShare: {
		backgroundColor: "#0e27ce",
		paddingHorizontal: 20,
		paddingVertical: 15,
		borderRadius: 25,
		flexDirection: "row",
		alignItems: "center",
	},
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
			height: 3,
		},
		shadowOpacity: 0.25,
		shadowRadius: 10,
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
		backgroundColor: "#fff",

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
		shadowRadius: 10,
		elevation: 5,
	},
	btnSave: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#fff",
		borderWidth: 1,
		borderColor: "#0e27ce",
		paddingVertical: 10,
		paddingHorizontal: 8,
		borderRadius: 25,
	},
	btnBack: {
		backgroundColor: "#fff",
		paddingHorizontal: 45,
		paddingVertical: 15,
		borderWidth: 1,
		borderColor: "#0e27ce",
		borderRadius: 8,
	},
	btnNew: {
		backgroundColor: "#0e27ce",
		paddingHorizontal: 25,
		paddingVertical: 15,
		borderRadius: 8,
	},
});
