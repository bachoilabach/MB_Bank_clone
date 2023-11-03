import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/GUI/Header/Header";
import Submit from "../components/GUI/Button/Button";

const TakeOTP = ({ navigation }) => {
	const [countdown, setCountdown] = useState(100);
	const [randomNumbers, setRandomNumbers] = useState(
		Array.from({ length: 8 }, () => Math.floor(Math.random() * 10))
	);
	useEffect(() => {
		const interval = setInterval(() => {
			setCountdown((prevCountdown) => prevCountdown - 1);
			// setRandomNumbers((prevNumbers) =>
			// 	prevNumbers.map(() => Math.floor(Math.random() * 10))
			// );
		}, 1000);

		// Clear the interval when the component unmounts
		return () => clearInterval(interval);
	}, []);
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
				<View style={{ backgroundColor: "#fff", marginBottom: 15 }}>
					<View
						style={[
							styles.row,
							{ padding: 26, justifyContent: "space-between" },
						]}>
						{randomNumbers.map((number, index) => (
							<Text key={index} style={styles.fnsz28}>
								{number}
							</Text>
						))}
					</View>
				</View>

				<Submit buttonText={"Nhận OTP"} />

				<View
					style={{
						backgroundColor: "#fff",
						marginTop: 15,
						marginBottom: "100%",
					}}>
					<View
						style={[
							styles.row,
							{ padding: 26, justifyContent: "space-between" },
						]}>
						{randomNumbers.map((number, index) => (
							<Text key={index} style={styles.fnsz28}>
								{number}
							</Text>
						))}
					</View>
				</View>
				<Submit buttonText={"Tiếp tục"} />
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
