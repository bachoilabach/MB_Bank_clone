import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/GUI/Header/Header";
import Submit from "../components/GUI/Button/Button";
import { Alert } from "react-native";

const TakeOTP = ({ navigation, route }) => {
	const [countdown, setCountdown] = useState(100);
	const [isVisible, setIsVisible] = useState(false);
	const [isButtonDisbled, setIsButtonDisbled] = useState(false);
	const [countinue, setCountinue] = useState(true);

	const [randomNumbers, setRandomNumbers] = useState(
		Array.from({ length: 8 }, () => Math.floor(Math.random() * 10))
	);
	const { money, nameAcc, stk, selectedBank, content, BankLogo, bankID } =
		route.params;
	const { name, moneyOwn, sdt } = route.params || {};
	const [userData, setUserData] = useState({});
	useEffect(() => {}, [name, moneyOwn, sdt]);
	useEffect(() => {
		const interval = setInterval(() => {
			setCountdown((prevCountdown) => prevCountdown - 1);

			if (countdown === 0) {
				clearInterval(interval);
				Alert.alert("Thông báo", "Hết thời gian", [
					{
						text: "Quay trở về",
						onPress: () => {
							navigation.goBack();
						},
					},
				]);
			}
			if (name && moneyOwn && sdt) {
				setUserData({
					name: name,
					moneyOwn: moneyOwn,
					sdt: sdt,
				});
			}
		}, 1000);
		return () => clearInterval(interval);
	}, [countdown, navigation]);
	handleReceiveOTP = () => {
		setIsVisible(true);
	};
	return (
		<View>
			<Header headerText={"Lấy mã OTP"} navigation={navigation} />
			<View style={{ padding: 10, backgroundColor: "#ecebed", height: "100%" }}>
				<View style={[styles.center, { marginBottom: 20 }]}>
					<Text style={styles.fnsz15}>
						Mã xác thực giao dịch (OTP) có hiệu lực
					</Text>
					<Text style={styles.fnsz15}>trong vòng {countdown} giây</Text>
				</View>

				{/* Mã OTP */}
				<View style={{ backgroundColor: "#fff", marginBottom: 15 }}>
					<View
						style={[
							styles.row,
							{ padding: 20, justifyContent: "space-between" },
						]}>
						{randomNumbers.map((number, index) => (
							<Text key={index} style={styles.fnsz28}>
								{number}
							</Text>
						))}
					</View>
				</View>

				{/* Nút nhận mã OTP */}
				<Submit
					buttonText={"Nhận OTP"}
					onPress={() => {
						setIsButtonDisbled(true);
						setCountinue(false);
						setIsVisible(true);
					}}
					isDisabled={isButtonDisbled}
				/>

				{/* Mã OTP */}
				<View
					style={{
						backgroundColor: "#fff",
						marginTop: 15,
						marginBottom: "100%",
					}}>
					<View
						style={[
							styles.row,
							{ justifyContent: "space-between" },
							isVisible ? { padding: 20 } : { padding: 40 },
						]}>
						{randomNumbers.map((number, index) => (
							<Text
								key={index}
								style={[
									styles.fnsz28,
									isVisible ? { display: "flex" } : { display: "none" },
								]}>
								{number}
							</Text>
						))}
					</View>
				</View>
				<Submit
					buttonText={"Tiếp tục"}
					isDisabled={countinue}
					onPress={() => {
						navigation.replace("TransferSuccess", {
							money: money /* Giá trị money */,
							nameAcc: nameAcc /* Giá trị nameAcc */,
							stk: stk /* Giá trị stk */,
							selectedBank: selectedBank /* Giá trị selectedBank */,
							content: content /* Giá trị content */,
							BankLogo: BankLogo /* Giá trị BankLogo */,
							bankID: bankID /* Giá trị bankID */,
							name: name,
							moneyOwn: moneyOwn,
							sdt: sdt,
						});
					}}
				/>
			</View>
		</View>
	);
};

export default TakeOTP;

const styles = StyleSheet.create({
	center: {
		alignItems: "center",
	},
	fnsz15: {
		fontSize: 15,
	},
	row: {
		flexDirection: "row",
	},
	fnsz28: {
		fontSize: 35,
		marginHorizontal: 9,
		fontWeight: "bold",
		color: "#0d22cc",
	},
});
