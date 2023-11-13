import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/GUI/Header/Header";
import Submit from "../components/GUI/Button/Button";
import { TouchableOpacity } from "react-native";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";


const ConfirmScreen = ({ route }) => {
	const navigation = useNavigation();
	const { selectedBank, stk, nameAcc, money, content,BankLogo,bankID} = route.params;
	const detail = [
		{
			tit: "Phí giao dịch",
			des: "Miễn phí",
		},
		{
			tit: "Số tiền bằng chữ",
			des: "Mười nghìn Việt Nam Đồng",
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
	return (
		<View style={{ flex: 1, backgroundColor: "#fff"}}>
			<Header navigation={navigation} headerText={"Xác nhận thông tin"} />
			<View>
				{/* Ảnh */}
				<View>
					<Image
						source={require("../assets/gradient.jpg")}
						style={styles.img}
					/>
					{/* số tiền chuyển */}
					<View style={styles.pos}>
						<View style={styles.center}>
							<Text style={[styles.txtAmount, styles.white]}>
								Số tiền chuyển
							</Text>
							<Text style={[styles.txtTotal, styles.white]}>{money} VND</Text>
						</View>
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
									<Text style={styles.txtNameUser}>TRAN VIET BACH</Text>
									<Text>0346331968</Text>
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
										source={BankLogo.find(item => item.id === bankID).logo}
										resizeMode="contain"
										style={{ width: 30, height: 30, marginRight: 10 }}
									/>
								</View>
								<View>
									<Text style={styles.txtNameUser}>{nameAcc}</Text>
									<Text>{stk}</Text>
									<Text>{selectedBank.name}</Text>
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
			<Submit buttonText={'Xác nhận'}  onPress={()=>navigation.replace("TakeOTP")}/>
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

	white: {
		color: "#fff",
	},

	pos: {
		position: "absolute",
		top: "30%",
		left: "38%",
		transform: [{ translateX: -50 }, { translateY: -50 }],
	},

	img: {
		width: "100%",
		height: "70%",
		borderBottomLeftRadius: 80,
		borderBottomRightRadius: 50,
		// position: 'absolute'
	},
	txtAmount: {
		marginBottom: 30,
	},
	txtTotal: {
		fontSize: 35,
		fontWeight: "bold",
	},
	fromAccountContainer: {
		width: "90%",
		backgroundColor: "#fff",
		position: "absolute",
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
