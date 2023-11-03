import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../Screens/LoginScreen";
import ForgotPasswordScreen from "../Screens/ForgotPasswordScreen";
import Tabs from "../Navigation/tabs/tabs";
import MoneyTranferScreen from "../Screens/MoneyTranferScreen";
import SplitTradeScreen from "../Screens/SplitTradeScreen";
import MoneyTransferToAccScreen from "../Screens/MoneyTransferToAccScreen";
import ChangeAccount from "../Screens/ChangeAccount";
import ConfirmScreen from "../Screens/ConfirmScreen";
import TakeOTP from "../Screens/TakeOTP";

const Stack = createStackNavigator();

function AppNavigator() {
	return (
		<Stack.Navigator initialRouteName="Login">
			<Stack.Screen
				name="Login"
				component={LoginScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="ForgotPassword"
				component={ForgotPasswordScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="Tabs"
				component={Tabs}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="MoneyTransfer"
				component={MoneyTranferScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="SplitTrade"
				component={SplitTradeScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="MoneyTransferToAcc"
				component={MoneyTransferToAccScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="ChangeAccount"
				component={ChangeAccount}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="ConfirmScreen"
				component={ConfirmScreen}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="TakeOTP"
				component={TakeOTP}
				options={{
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	);
}

export default AppNavigator;
