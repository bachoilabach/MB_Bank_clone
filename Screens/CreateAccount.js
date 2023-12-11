import { Alert, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/GUI/Header/Header";
import Input from "../components/GUI/Input/Input";
import Submit from "../components/GUI/Button/Button";

const inputName = "Họ và tên";
const inputPhone = "Số điện thoại";
const inputPassword = "Mật khẩu";
const inputConfirmPassword = "Xác nhận mật khẩu";
const typeDefault = "default";
const typeNumber = "numeric";

const CreateAccount = ({ navigation }) => {
	const headerText = "Tạo tài khoản";
	const buttonText = "Đăng kí";
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState("");
	// * check điều kiện
	const [isButtonDisabled, setIsButtonDisabled] = useState(true);

	const ipV4 = "192.168.1.12";

	useEffect(() => {
		if (name && phone && password && confirmPassword) {
			setIsButtonDisabled(false);
		} else {
			setIsButtonDisabled(true);
		}
	}, [name, phone, password, confirmPassword]);
	const handleButtonPress = async () => {
		if (password !== confirmPassword) {
			//*  Nếu mật khẩu và xác nhận mật khẩu không trùng khớp, hiển thị thông báo
			setError("*Mật khẩu và xác nhận mật khẩu không trùng khớp");
			return;
		}
		// Kiểm tra xem số điện thoại đã tồn tại trong cơ sở dữ liệu hay chưa
		const checkAccountResponse = await fetch(
			`http://${ipV4}:3000/accounts/${phone}`
		);
		const existingAccount = await checkAccountResponse.json();

		if (existingAccount) {
			console.log("Tài khoản đã tồn tại");
			Alert.alert("Thông báo", "Tài khoản này đã tồn tại", [
				{
					text: "Quay lại",
				},
			]);
			return;
		}
		try {
			const response = await fetch(`http://${ipV4}:3000/accounts`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					name: name,
					sdt: phone,
					moneyOwn: "0", // Bạn có thể đặt giá trị mặc định cho số tiền ở đây nếu cần
					password: password,
				}),
			});

			const data = await response.json();

			if (response.ok) {
				// Đăng ký thành công, bạn có thể thực hiện các hành động tiếp theo ở đây
				console.log("Đăng ký thành công:", data);
				navigation.navigate("ChangeAccount");
			} else {
				// Xử lý khi có lỗi đăng ký
				console.error("Đăng ký thất bại:", data);
				// Hiển thị thông báo lỗi cho người dùng nếu cần
			}
		} catch (error) {
			// Xử lý lỗi nếu có lỗi trong quá trình gửi yêu cầu
			console.error("Lỗi khi gửi yêu cầu đăng ký:", error);
			// Hiển thị thông báo lỗi cho người dùng nếu cần
		}
	};
	return (
		<View style={styles.background}>
			<Header headerText={headerText} />
			<View style={styles.container}>
				<View style={{ flex: 1 }}>
					<TouchableWithoutFeedback>
						<Input
							input={inputName}
							type={typeDefault}
							value={name}
							onChangeText={(name) => {
								setName(name);
							}}
						/>
					</TouchableWithoutFeedback>
					<TouchableWithoutFeedback>
						<Input
							input={inputPhone}
							type={typeNumber}
							value={phone}
							onChangeText={(phone) => {
								setPhone(phone);
							}}
						/>
					</TouchableWithoutFeedback>
					<TouchableWithoutFeedback>
						<Input
							input={inputPassword}
							type={typeDefault}
							value={password}
							onChangeText={(password) => {
								setPassword(password);
							}}
						/>
					</TouchableWithoutFeedback>
					<TouchableWithoutFeedback>
						<Input
							input={inputConfirmPassword}
							type={typeDefault}
							value={confirmPassword}
							onChangeText={(confirmPassword) => {
								setConfirmPassword(confirmPassword);
							}}
						/>
					</TouchableWithoutFeedback>
					<Text style={{ color: "red", marginLeft: "" }}>{error}</Text>
				</View>
				<Submit
					buttonText={buttonText}
					onPress={handleButtonPress}
					isDisabled={isButtonDisabled}
				/>
			</View>
		</View>
	);
};

export default CreateAccount;

const styles = StyleSheet.create({
	background: {
		backgroundColor: "#f4f4fb",
		flex: 1,
	},
	container: {
		padding: 20,
		flex: 1,
	},

	textInput: {
		padding: 23,
		fontSize: 17,
		borderWidth: 1.5,
		marginBottom: 20,
		borderRadius: 5,
		borderColor: "#91939b",
		backgroundColor: "#fcfcfc",
	},
});
