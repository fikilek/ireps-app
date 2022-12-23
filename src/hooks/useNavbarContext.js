import { useContext } from "react";
import { NavbarContext } from "../contexts/NavbarContextProvider";

const useNavbarContext = () => {
	const context = useContext(NavbarContext);
	console.log(`context`, context)
	if (!context) {
		throw Error("NavbarContext not provided");
	}
	return context;
};

export default useNavbarContext;
