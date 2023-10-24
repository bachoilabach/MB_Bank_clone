import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Modal } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const bankList = [
	{ id: 1, name: "Ngân hàng A" },
	{ id: 2, name: "Ngân hàng B" },
	{ id: 3, name: "Ngân hàng C" },
	// Thêm các ngân hàng khác vào danh sách
];

const BankList = () => {
	const [showBankList, setShowBankList] = useState(false);
	const [selectedBank, setSelectedBank] = useState(null);

	const toggleBankList = () => {
		setShowBankList(!showBankList);
	};

	const selectBank = (bank) => {
		setSelectedBank(bank);
		toggleBankList();
	};

	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={showBankList}
			onRequestClose={toggleBankList}>
			<View style={styles.modalContainer}>
				<View style={styles.bankListContainer}>
					<View style={styles.modalHeader}>
						<Text style={styles.bankListHeader}>Chọn ngân hàng</Text>
						<TouchableOpacity onPress={toggleBankList}>
							<FontAwesomeIcon
								icon={faTimes} // Đảm bảo rằng bạn đã định nghĩa faTimes
								style={{ color: "red" }}
								size={20}
							/>
						</TouchableOpacity>
					</View>
					<FlatList
						data={bankList}
						keyExtractor={(item) => item.id.toString()}
						renderItem={({ item }) => (
							<TouchableOpacity
								style={styles.bankListItem}
								onPress={() => selectBank(item)}>
								<Text style={styles.bankListItemText}>{item.name}</Text>
							</TouchableOpacity>
						)}
					/>
				</View>
			</View>
		</Modal>
	);
};

export default BankList;

const styles = StyleSheet.create({
	modalContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	bankListContainer: {
		backgroundColor: "#fff",
		width: "90%",
		borderRadius: 10,
		borderWidth: 1,
		borderColor: "#ccc",
		maxHeight: "70%",
	},
	modalHeader: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 10,
	},
	bankListHeader: {
		fontSize: 16,
		fontWeight: "bold",
		marginLeft: 10,
	},
	bankListItem: {
		padding: 10,
	},
	bankListItemText: {
		fontSize: 16,
	},
});
