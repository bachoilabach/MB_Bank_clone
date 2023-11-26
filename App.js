import React from "react";
import { View, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import AppNavigator from "./Navigation/index";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { MoneyProvider } from "./components/MoneyContext/MoneyContext";
import TransferSuccess from "./Screens/TransferSuccess";



export default function App() {
	return (
		<MoneyProvider>
			<NavigationContainer>
				<View style={styles.container}>
					<AppNavigator />
					{/* <TransferSuccess/> */}
					<StatusBar barStyle="default" />
				</View>
			</NavigationContainer>
		</MoneyProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// alignItems: "stretch",
		// justifyContent: "center",
		width: "100%",
	},
});
