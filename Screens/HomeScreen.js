import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
	faUser,
	faComments,
	faMagnifyingGlass,
	faBell,
	faShield,
	faChevronDown,
	faChevronUp,
	faChevronRight,
	faPenToSquare,
	faMoneyBillTransfer,
	faMobileButton,
	faPiggyBank,
	faReceipt,
	faHandHoldingDollar,
	faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import { TouchableOpacity } from "react-native";
import { ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
// import { LinearGradient } from 'expo-linear-gradient';

const min = 8000000000;
const max = 10000000000;

const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

const formattedNumber = randomNumber.toLocaleString("vi-VN");

console.log(formattedNumber);

const features = [
	{
		icon: faMoneyBillTransfer,
		text: "Chuyển tiền",
	},
	{
		icon: faMobileButton,
		text: "Nạp điện thoại",
	},
	{
		icon: faPiggyBank,
		text: "Tiền gửi & Đầu tư",
	},
	{
		icon: faReceipt,
		text: "Thanh toán",
	},
	{
		icon: faHandHoldingDollar,
		text: "Vay Online",
	},
	{
		icon: faCreditCard,
		text: "Dịch vụ thẻ",
	},
];

const marketItems = [
	{
		image: require("../assets/bee.jpg"),
		name: "Bất động sản",
	},
	{
		image: require("../assets/bee.jpg"),
		name: "Flash Sale",
	},
	{
		image: require("../assets/bee.jpg"),
		name: "Data 3G/4G",
	},
	{
		image: require("../assets/bee.jpg"),
		name: "Thẻ game 247",
	},
	{
		image: require("../assets/bee.jpg"),
		name: "Thẻ game 365",
	},
	{
		image: require("../assets/bee.jpg"),
		name: "Thẻ điện thoại",
	},
	{
		image: require("../assets/bee.jpg"),
		name: "Nạp điện thoại",
	},
	{
		image: require("../assets/bee.jpg"),
		name: "Xem thêm",
	},
];

export default function HomeScreen({navigation}) {
	const navigation = useNavigation();
	const handlePress = (index) => {
		const selectedFeature = features[index];
		if (selectedFeature.text === "Chuyển tiền") {
			navigation.navigate("MoneyTransfer");
		}
	};

	const [showAccount, setShowAccount] = useState("Xem tài khoản");
	const [chevronIcon, setChevronIcon] = useState(faChevronDown);
	const [isViewVisible, setIsViewVisible] = useState(false);
	const [tranY, setTranY] = useState(-30);
	const toggleAccount = () => {
		if (showAccount === "Xem tài khoản") {
			setShowAccount("Tài khoản của tôi");
			setChevronIcon(faChevronUp);
			setIsViewVisible(true);
			setTranY(-180);
		} else {
			setShowAccount("Xem tài khoản");
			setChevronIcon(faChevronDown);
			setIsViewVisible(false);
			setTranY(-30);
		}
	};

	return (
		<ScrollView style={{ flex: 1 }}>
			<View>
				{/* Header */}
				<SafeAreaView style={[styles.header]}>
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							paddingHorizontal: 15,
						}}>
						<TouchableOpacity>
							<FontAwesomeIcon
								icon={faUser}
								color="#fff"
								size={24}
								style={{ marginRight: 20 }}
							/>
						</TouchableOpacity>
						<TouchableOpacity>
							<FontAwesomeIcon icon={faComments} color="#fff" size={24} />
						</TouchableOpacity>
						<Image
							source={require("../assets/9d8ed5_03ea4831549b46ecabc9cd0117623d0e~mv2.webp")}
							style={{
								flex: 1,
								width: 50,
								height: 50,
							}}
							resizeMode="contain"
						/>
						<TouchableOpacity>
							<FontAwesomeIcon
								icon={faMagnifyingGlass}
								color="#fff"
								size={24}
							/>
						</TouchableOpacity>
						<TouchableOpacity>
							<FontAwesomeIcon
								icon={faBell}
								color="#fff"
								size={24}
								style={{ marginLeft: 20 }}
							/>
						</TouchableOpacity>
					</View>

					<View style={styles.heloUser}>
						<Text style={styles.hello}>Xin chào,</Text>
						<Text style={styles.userName}>TRAN VIET BACH</Text>
						<View
							style={{
								flexDirection: "row",
								backgroundColor: "#0d22cc",
								borderRadius: 50,
							}}>
							<FontAwesomeIcon icon={faShield} size={26} color="#eaa559" />
							<View
								style={{
									backgroundColor: "#0d22cc",
									justifyContent: "center",
									borderRadius: 50,
								}}>
								<Text
									style={{
										fontSize: 12,
										marginLeft: 10,
										color: "#eaa559",
										paddingRight: 15,
									}}>
									KÍCH HOẠT ĐỂ ĐƯỢC BẢO VỆ
								</Text>
							</View>
						</View>
					</View>

					<View style={styles.account}>
						<Text style={{ color: "#fff", fontSize: 17, marginBottom: 30 }}>
							{showAccount}
						</Text>
						<View
							style={[
								{
									backgroundColor: "#c4ccec",
									alignItems: "center",
									width: "100%",
									padding: 20,
								},
								isViewVisible ? { display: "flex" } : { display: "none" },
							]}>
							<TouchableOpacity style={styles.suport}>
								<View style={{ flexDirection: "row", alignItems: "center" }}>
									<Image
										source={require("../assets/bee.jpg")}
										style={{
											width: 50,
											height: 50,
											marginRight: 10,
										}}
										borderRadius={"200%"}
										resizeMode="contain"
									/>
									<View>
										<Text
											style={{
												fontSize: 18,
												paddingBottom: 3,
												color: "#0d20c3",
											}}>
											BumbleBee Rich
										</Text>
										<Text style={{ fontWeight: "300" }}>
											Trợ thủ tài chính cá nhân
										</Text>
									</View>
								</View>
							</TouchableOpacity>
							<TouchableOpacity style={styles.suport}>
								<View>
									<View style={{ flexDirection: "row", alignItems: "center" }}>
										<Text style={{ fontWeight: "700", paddingRight: 5 }}>
											Tài khoản nguồn
										</Text>
										<Text style={{ color: "#b6e1f6" }}>0346331968</Text>
									</View>
									<View style={{ flexDirection: "row", marginRight: 2 }}>
										<Text
											style={{
												color: "#0d20c3",
												fontWeight: "bold",
												fontSize: 20,
											}}>
											{formattedNumber}{" "}
											<Text
												style={{
													color: "#c5c7ce",
													fontSize: 14,
													fontWeight: "500",
												}}>
												VND
											</Text>
										</Text>
									</View>
								</View>
								<FontAwesomeIcon icon={faChevronRight} />
							</TouchableOpacity>
							<TouchableOpacity style={styles.suport}>
								<Text style={{ fontSize: 16, fontWeight: "500" }}>
									Nick Name cho tài khoản
								</Text>
								<FontAwesomeIcon icon={faChevronRight} />
							</TouchableOpacity>
							<TouchableOpacity style={styles.suport}>
								<Text style={{ fontSize: 16, fontWeight: "500" }}>
									Điểm thưởng
								</Text>
								<FontAwesomeIcon icon={faChevronRight} />
							</TouchableOpacity>
							<TouchableOpacity style={styles.suport}>
								<Text style={{ fontSize: 16, fontWeight: "500" }}>Thẻ</Text>
								<FontAwesomeIcon icon={faChevronRight} />
							</TouchableOpacity>
							<TouchableOpacity style={styles.suport}>
								<Text style={{ fontSize: 16, fontWeight: "500" }}>
									Tài khoản tiền gửi số
								</Text>
								<FontAwesomeIcon icon={faChevronRight} />
							</TouchableOpacity>
							<TouchableOpacity style={styles.suport}>
								<Text style={{ fontSize: 16, fontWeight: "500" }}>
									Khoản vay
								</Text>
								<FontAwesomeIcon icon={faChevronRight} />
							</TouchableOpacity>
						</View>
					</View>

					<View
						style={[
							styles.chevronContainer,
							{ transform: [{ translateX: 25 }, { translateY: tranY }] },
						]}>
						<TouchableOpacity onPress={toggleAccount}>
							<FontAwesomeIcon icon={chevronIcon} color="#0d22cc" size={24} />
						</TouchableOpacity>
					</View>
				</SafeAreaView>
			</View>

			{/* Main */}
			<View style={{ paddingHorizontal: 20, paddingVertical: "8%" }}>
				<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
					<Text style={{ fontWeight: "500", fontSize: 17 }}>
						Tính năng chính
					</Text>
					<View style={{ flexDirection: "row" }}>
						<FontAwesomeIcon icon={faPenToSquare} size={17} color="#0d22cc" />
						<Text style={{ fontSize: 17, color: "#0d22cc" }}>Tùy chỉnh</Text>
					</View>
				</View>

				{/* Chức năng chính */}
				<View
					style={{
						paddingVertical: 20,
						flexDirection: "row",
						flexWrap: "wrap",
						justifyContent: "space-between",
					}}>
					{features.map((feature, index) => (
						<TouchableOpacity
							style={styles.mainFeature}
							key={index}
							onPress={() => handlePress(index)}>
							<FontAwesomeIcon icon={feature.icon} size={35} color="#0d22cc" />
							<Text style={{ fontSize: 16, marginTop: 10 }}>
								{feature.text}
							</Text>
						</TouchableOpacity>
					))}
				</View>

				{/* Chợ ứng dụng */}
				<View style={{ marginBottom: 30 }}>
					<Text style={{ fontWeight: "500", fontSize: 17 }}>Chợ ứng dụng</Text>
				</View>

				<View>
					<View style={styles.market}>
						{marketItems.map((marketItem, index) => (
							<TouchableOpacity
								key={index}
								style={{ alignItems: "center", paddingVertical: 15, width: '25%' }}>
								<Image
									source={marketItem.image}
									style={{ width: 40, height: 40, borderRadius: 5 }}
									resizeMode="contain"
								/>
								<Text style={{ fontSize: 11, marginTop: 5 }}>
									{marketItem.name}
								</Text>
							</TouchableOpacity>
						))}
					</View>
				</View>

				{/* Khuyến mãi của bạn */}
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						marginTop: 30,
					}}>
					<Text style={{ fontWeight: "500", fontSize: 17 }}>
						Khuyến mãi của bạn
					</Text>
					<View style={{ flexDirection: "row" }}>
						<Text
							style={{
								fontSize: 17,
								color: "#0d22cc",
								borderBottomWidth: 0.5,
							}}>
							XEM THÊM
						</Text>
					</View>
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	header: {
		backgroundColor: "#2f48de",
		position: "relative",
	},

	heloUser: {
		alignItems: "center",
	},

	hello: {
		fontSize: 22,
		color: "#fff",
	},

	userName: {
		fontSize: 30,
		fontWeight: "900",
		color: "#fff",
		marginBottom: "2%",
	},

	account: {
		alignItems: "center",
		marginTop: 20,
	},

	suport: {
		borderRadius: 8,
		width: "100%",
		backgroundColor: "#fff",
		marginBottom: 15,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		padding: 20,
	},
	chevronContainer: {
		backgroundColor: "#fff",
		width: 50,
		height: 50,
		borderRadius: 50,
		justifyContent: "center",
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
		position: "absolute",
		top: "125%", // Đặt vị trí đứng giữa theo chiều dọc
		right: "50%", // Đặt vị trí bên phải
	},

	mainFeature: {
		width: 110,
		height: 110,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 10,
		paddingHorizontal: 5,
		marginVertical: 10,
		justifyContent: "center",
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},

	market: {
		flex: 1,
		justifyContent: "space-between",
		flexDirection: "row",
		flexWrap: "wrap",
		backgroundColor: "#d7e1f4",
		paddingHorizontal: 15,
		borderRadius: 10,
	},
});
