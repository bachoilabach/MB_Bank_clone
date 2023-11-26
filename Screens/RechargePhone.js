import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/GUI/Header/Header";
import Input from "../components/GUI/Input/Input";
import Submit from "../components/GUI/Button/Button";
import { TouchableOpacity } from "react-native";
import { faL } from "@fortawesome/free-solid-svg-icons";

const RechargePhone = ({ navigation }) => {
	const [phoneNum, setPhoneNum] = useState("");
	const [isDisabled, setIsDisabled] = useState(true);
    const [isChange, SetIsChange] = useState(false);
	const listPrice = [
		{
			id: 1,
			value: "500,000",
		},
		{
			id: 2,
			value: "300,000",
		},
		{
			id: 3,
			value: "200,000",
		},
		{
			id: 4,
			value: "100,000",
		},
		{
			id: 5,
			value: "50,000",
		},
		{
			id: 6,
			value: "30,000",
		},
		{
			id: 7,
			value: "20,000",
		},
		{
			id: 8,
			value: "10,000",
		},
	];
	const [listFocus, SetFocus] = useState(listPrice.map((item) => false));

	const toggleItem = (index) => {
		const newItem = [...listFocus];
		const lastIndex = newItem.indexOf(
			newItem.filter((item) => item === true)[0]
		);

		if (lastIndex >= 0 && lastIndex != index) newItem[lastIndex] = false;
		newItem[index] = !newItem[index];
        
        SetIsChange(!isChange);
		SetFocus(newItem);
	};
	useEffect(() => {
		if (listFocus.filter((item) => item === false) && phoneNum !== "") {
			setIsDisabled(false);
		}else{
			setIsDisabled(true);

        }
	}, [phoneNum, isChange]);
	return (
		<View>
			<Header headerText={"Nạp tiền điện thoại"} navigation={navigation} />
			<View style={{ padding: 10 }}>
				<Input
					input={"Nhập số điện thoại"}
					type={"numeric"}
					value={phoneNum}
					onChangeText={(phoneNum) => setPhoneNum(phoneNum)}
				/>

				<View>
					<Text style={{ fontSize: 20 }}>Chọn mệnh giá</Text>
				</View>

				<View
					style={{
						marginVertical: 30,
						display: "flex",
						flexDirection: "row",
						flexWrap: "wrap",
						gap: 10,
					}}>
					{listFocus.map((item, index) => (
						<TouchableOpacity
							onPress={() => toggleItem(index)}
							style={[
								styles.price,
								{ backgroundColor: item ? "#0e27ce" : "#fff" },
							]}
							key={index}>
							<Text
								style={[{ fontSize: 18, color: item ? "#fff" : "#0e27ce" }]}>
								{listPrice[index].value}{" "}
								<Text style={{ fontSize: 12, color: "#aaa", fontWeight: 500 }}>
									VND
								</Text>
							</Text>
						</TouchableOpacity>
					))}
				</View>
				<View>
					<Text style={{ fontSize: 20, marginBottom: 10 }}>
						Hoá đơn gần đây
					</Text>
					<Text>Không có dữ liệu</Text>
				</View>
			</View>
			<View style={{ padding: 10, marginTop: "40%" }}>
				<Submit buttonText={"Tiếp tục"} isDisabled={isDisabled} />
			</View>
		</View>
	);
};

export default RechargePhone;

const styles = StyleSheet.create({
	price: {
		width: "31%",
		paddingVertical: 32,
		paddingHorizontal: 8,
		borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
		// margin: 5,
		// marginHorizontal: 2
	},
});
