import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/GUI/Header/Header";
import Submit from "../components/GUI/Button/Button";

const UtilitiesScreen = ({ navigation }) => {
	const headerText = "Tiện ích";
	return (
		<View>
			<Header headerText={headerText} />
			<View style={{padding: 10}}>
				<Submit buttonText={"Đăng xuất"} onPress={()=>{navigation.pop()}}/>
			</View>
		</View>
	);
};

export default UtilitiesScreen;

const styles = StyleSheet.create({});
