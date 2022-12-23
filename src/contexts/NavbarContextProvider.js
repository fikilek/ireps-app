import React, { createContext, useState } from "react";

export const NavbarContext = createContext();

// This context indicates or controlls whether the navbar is shown or hidden
// This is required to make the web pages responsive 

const NavbarContextProvider = ({children}) => {
	// console.log(`props`, props);
	const [isNavbarVisible, setIsNavBarVisible] = useState(false);
	// console.log(`componentToOpen`, componentToOpen);
	return (
		<NavbarContext.Provider value={{ isNavbarVisible, setIsNavBarVisible }}>
			{children}
		</NavbarContext.Provider>
	);
};

export default NavbarContextProvider;