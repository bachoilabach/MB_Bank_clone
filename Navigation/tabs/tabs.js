import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, View, Text } from "react-native";
import HomeScreen from "../../Screens/HomeScreen";
import ProductScreen from "../../Screens/ProductScreen";
import PointScreen from "../../Screens/PointScreen";
import GiftScreen from "../../Screens/GiftScreen";
import UtilitiesScreen from "../../Screens/UtilitiesScreen";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
	faHome,
	faFolder,
	faGift,
	faCreditCard,
	faSquare,
} from "@fortawesome/free-solid-svg-icons";
// import HomeScreen from "../../Screens/BaiThucHanh/HomeScreen";

const screens = [
	{
		name: "Home",
		component: HomeScreen,
		icon: faHome,
		title: "Trang chủ",
	},
	{
		name: "Product",
		component: ProductScreen,
		icon: faFolder,
		title: "Sản phẩm",
	},
	{
		name: "Point",
		component: PointScreen,
		icon: faGift,
		title: "MB++",
	},
	{
		name: "Gift",
		component: GiftScreen,
		icon: faCreditCard,
		title: "Quà tặng",
	},
	{
		name: "Utility",
		component: UtilitiesScreen,
		icon: faSquare,
		title: "Tiện ích",
	},
];

const Tab = createBottomTabNavigator();

const Tabs = () => {
	const navigation = useNavigation();
	return (
		// Thanh ngang dưới màn hình
		<Tab.Navigator
			screenOptions={{
				tabBarShowLabel: false,
			}}>
				{/* Từng công cụ */}
			{screens.map((screen, index) => (
				<Tab.Screen
					key={index}
					name={screen.name}
					component={screen.component}
					options={{
						headerShown: false,
						tabBarIcon: ({ focused }) => {
							return (
								<TouchableOpacity
									style={{ paddingTop: 10 }}
									onPress={() => {
										navigation.navigate(screen.name);
									}}>
									<View
										style={{
											flexDirection: "column",
											alignItems: "center",
											justifyContent: "center",
										}}>
										<FontAwesomeIcon
											icon={screen.icon}
											size={25}
											color={focused ? "#0d22cc" : "#e0dbe6"}
										/>
										{/* #0d22cc */}
										<Text
											style={{
												color: focused ? "#0d22cc" : "#e0dbe6",
												fontSize: 12,
												marginTop: 5,
											}}>
											{screen.title}
										</Text>
									</View>
								</TouchableOpacity>
							);
						},
					}}
				/>
			))}
		</Tab.Navigator>
	);
};

export default Tabs;
