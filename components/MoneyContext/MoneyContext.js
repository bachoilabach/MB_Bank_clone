import React, { createContext, useState, useContext } from "react";

const MoneyContext = createContext();

export const MoneyProvider = ({ children }) => {
	const [defaultMoney, setDefaultMoney] = useState(); 

	return (
		<MoneyContext.Provider value={{ defaultMoney, setDefaultMoney }}>
			{children}
		</MoneyContext.Provider>
	);
};

export const useMoney = () => {
	return useContext(MoneyContext);
};
