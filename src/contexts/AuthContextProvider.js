import React, { useReducer } from "react";
import { createContext } from "react";

const authReducer = (state, action) => {
	switch (action.type) {
		case "SIGNIN":
			return state;
		case "SIGNOUT":
			return state;
		default:
			return state;
	}
};

// TODO: remove init use after implementing firebase auth
const initUser = {
	surname: "kentane",
	name: "fikile",
	email: "fiklekentane@gmail.com",
	displayNane: "FK",
	isSignedin: true,
	profilePhotoUrl: "photo url",
};

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
	const [user, dispatch] = useReducer(authReducer, initUser);
	return (
		<AuthContext.Provider value={{ user, dispatch }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
