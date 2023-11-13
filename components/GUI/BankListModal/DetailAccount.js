import {
	FlatList,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	Image,
} from "react-native";
import React, { memo } from "react";
import { Modal } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMagnifyingGlass, faTimes } from "@fortawesome/free-solid-svg-icons";

const DetailAccount = memo(
	({ visible, toggleAccount, bankList, selectBank, BankLogo }) => {
		return (
			<Modal
				animationType="slide"
				transparent={true}
				visible={visible}
				onRequestClose={toggleAccount}>
				<View style={styles.modalContainer}>
					<View style={styles.bankListContainer}>
						<View style={styles.modalHeader}>
							<View style={{ flex: 1, alignItems: "center" }}>
								<Text style={styles.bankListHeader}>Cài đặt tài khoản</Text>
							</View>
							<TouchableOpacity onPress={toggleAccount}>
								<FontAwesomeIcon
									icon={faTimes}
									style={{ color: "#fff" }}
									size={23}
								/>
							</TouchableOpacity>
						</View>
						<View style={{ marginBottom: 150 }}>
							<View
								style={{
									borderBottomWidth: 1,
									padding: 15,
									borderBottomColor: "#ccc",
								}}>
								<View style={styles.search}>
									<FontAwesomeIcon
										icon={faMagnifyingGlass}
										size={24}
										style={{ color: "#0e27ce", marginRight: 10 }}
									/>
									<TextInput
										placeholder="Tìm kiếm"
										placeholderTextColor="#ccc"
										style={{ paddingRight: 200, fontSize: 17 }}
									/>
								</View>
							</View>

							<FlatList
								data={bankList}
								keyExtractor={(item) => item.id.toString()}
								renderItem={({ item }) => (
									<TouchableOpacity
										style={styles.bankListItem}
										onPress={() => selectBank(item)}>
										<View>
											<BankLogoComponent
												logo={
													BankLogo.find((logoItem) => logoItem.id === item.id)
														.logo
												}
											/>
										</View>
										<Text style={styles.bankListItemText}>{item.name}</Text>
									</TouchableOpacity>
								)}
							/>
						</View>
					</View>
				</View>
			</Modal>
		);
	}
);

const BankLogoComponent = memo(({ logo }) => {
	return <Image source={logo} style={styles.bankLogo} resizeMode="contain" />;
});

export default DetailAccount;

const styles = StyleSheet.create({
	modalContainer: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center",
	},
	modalHeader: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 15,
		backgroundColor: "#272b54",
		borderTopLeftRadius: 10,
		borderTopRightRadius: 10,
		width: "100%",
	},
	bankListContainer: {
		backgroundColor: "#fff",
		width: "100%",
		// borderRadius: 20,
		borderColor: "#ccc",
		maxHeight: "70%",
		borderRadius: 30,
	},
	bankListHeader: {
		fontSize: 16,
		fontWeight: "bold",
		marginLeft: 10,
		color: "#fff",
	},
	bankListItem: {
		paddingHorizontal: 15,
		paddingVertical: 20,
		borderBottomWidth: 1,
		borderBottomColor: "#ccc",
		flexDirection: "row",
		alignItems: "center",
	},
	bankListItemText: {
		fontSize: 16,
		width: "90%",
	},
	search: {
		flexDirection: "row",
		padding: 10,
	},
	bankLogo: {
		width: 40,
		height: 40,
		marginRight: 10,
		backgroundColor: "#fff",
		borderRadius: 10,
	},
});
