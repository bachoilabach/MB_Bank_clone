import React from "react";
import { View, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import AppNavigator from "./Navigation/index";
import { NavigationContainer } from "@react-navigation/native";
import { MoneyProvider } from "./components/MoneyContext/MoneyContext";
import HomeScreen from "./Screens/BaiThucHanh/HomeScreen";
import ConfirmScreen from "./Screens/ConfirmScreen";
import TakeOTP from "./Screens/TakeOTP";


export default function App() {
	return (
		<MoneyProvider>
			<NavigationContainer>
				<View style={styles.container}>
					<AppNavigator />
					{/* <ConfirmScreen /> */}
					{/* <TakeOTP/> */}
					{/* <HomeScreen /> */}
					<StatusBar barStyle="default" />
				</View>
			</NavigationContainer>
		</MoneyProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "stretch",
		justifyContent: "center",
		width: "100%",
	},
});
