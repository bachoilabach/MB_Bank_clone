import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
	faBabyCarriage,
	faChevronRight,
	faHeart,
	faHome,
	faShirt,
} from "@fortawesome/free-solid-svg-icons";
import { TouchableOpacity } from "react-native";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { Image } from "react-native";

const menuItems = [
	{
		icon: faHeart,
		name: "Chăm sóc sức khỏe",
		color: "#ec5e4a",
	},
	{
		icon: faBabyCarriage,
		name: "Đồ chơi Mẹ & bé",
		color: "#b39bb4",
	},
	{
		icon: faShirt,
		name: "Thời trang Mỹ phẩm",
		color: "#bfc68c",
	},
	{
		icon: faHome,
		name: "Nhà cửa Đời sống",
		color: "#146c94",
	},
	{
		icon: faChevronRight,
		name: "Xem tất cả danh mục",
		color: "#e4e4e4",
	},
];

const listProduct = [
	{
		txt: "Mỳ ngô tách đường TH-One hộp 300gr",
		img: "https://i.pinimg.com/236x/9a/db/64/9adb6415bf2a10f770249a006f43053e.jpg",
		costProduct: "75,000",
	},
	{
		txt: "Mỳ ngô tách đường TH-One thùng 300gr",
		img: "https://i.pinimg.com/236x/f3/b6/53/f3b653d733385e6ad5b0feeab8341356.jpg",
		costProduct: "108,000",
	},
	{
		txt: "Khay nhựa ươm hạt giống 32 lỗ sâu",
		img: "https://i.pinimg.com/236x/5c/c9/23/5cc9230a352b3de4835b74a7c0b58505.jpg",
		costProduct: "23,500",
	},
];
const HomeScreen = () => {
	return (
		<SafeAreaView>
			<View style={{ padding: 10 }}>
				<View>
					<Text style={styles.title}>Danh mục</Text>
				</View>

				<View style={styles.menu}>
					{menuItems.map((item, idx) => (
						<TouchableOpacity style={styles.itemHeader} key={idx}>
							<View style={[styles.icon, { backgroundColor: item.color }]}>
								<FontAwesomeIcon
									icon={item.icon}
									size={38}
									style={{ color: "#fff" }}
								/>
							</View>
							<View style={{ marginTop: 10 }}>
								<Text>{item.name}</Text>
							</View>
						</TouchableOpacity>
					))}
				</View>
			</View>
			<View style={styles.main}>
				<View>
					<Image
						source={{
							uri: "https://i.pinimg.com/236x/7d/98/84/7d98840fdff1b2e7cd508cc7f3a17403.jpg",
						}}
						resizeMode="contain"
						style={styles.img}
					/>
				</View>

				<View style={{ flexDirection: "row" }}>
					{listProduct.map((product, idx) => (
						<TouchableOpacity style={styles.product}>
							<View>
								<Image
									source={{
										uri: product.img,
									}}
									style={styles.imgProduct}
									resizeMode="contain"
								/>
							</View>
							<View>
								<Text style={styles.nameProduct}>
									{product.txt}
								</Text>
								<Text style={styles.cost}>đ {product.costProduct}</Text>
							</View>
						</TouchableOpacity>
					))}
				</View>
			</View>
		</SafeAreaView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	itemHeader: {
		width: "19%",
		alignItems: "center",
	},

	menu: {
		marginVertical: 10,
		flexDirection: "row",
		gap: 5,
	},

	title: {
		fontSize: 25,
		fontWeight: "bold",
	},

	icon: {
		padding: 15,
		borderRadius: 50,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
		alignItems: "center",
	},

	main: {
		backgroundColor: "#daddde",
		padding: 10,
	},

	img: {
		width: "100%",
		height: 150,
		marginTop: 10,
		marginBottom: 15,
	},

	product: {
		width: "32%",
		backgroundColor: "#fcfbfa",
		padding: 10,
		alignItems: "center",
		marginRight: 8
	},
	imgProduct: {
		width: 70,
		height: 60,
		margin: 10,
	},

	nameProduct: {
		color: "#6d7b87",
		marginVertical: 10,
	},
});
