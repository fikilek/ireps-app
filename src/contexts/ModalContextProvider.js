import React, { createContext, useState } from "react";

// Create context:
// UserContext: to query the context state
export const ModalContext = createContext();

const intiValue = {
	name: "",
	payload: {},
};

// A "provider" is used to encapsulate only the
// components that needs the state in this context
const ModalContextProvider = ({children}) => {
	// console.log(`props`, props);
	const [componentToOpen, setComponentToOpen] = useState(intiValue);
	const [modalOpened, setModalOpened] = useState(false);
	// console.log(`componentToOpen`, componentToOpen);
	return (
		<ModalContext.Provider
			value={{ componentToOpen, setComponentToOpen, modalOpened, setModalOpened }}
		>
			{children}
		</ModalContext.Provider>
	);
};

export default ModalContextProvider;
