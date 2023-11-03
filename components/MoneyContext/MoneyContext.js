import React, { createContext, useState, useContext } from "react";

const MoneyContext = createContext();

export const MoneyProvider = ({ children }) => {
	const [defaultMoney, setDefaultMoney] = useState('1,000,000,000'); // Số tiền mặc định

	return (
		<MoneyContext.Provider value={{ defaultMoney, setDefaultMoney }}>
			{children}
		</MoneyContext.Provider>
	);
};

export const useMoney = () => {
	return useContext(MoneyContext);
};
