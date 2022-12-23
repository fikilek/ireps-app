import { useContext } from "react";
import { ModalContext } from "../contexts/ModalContextProvider";

const useModalContext = () => {
	const context = useContext(ModalContext);
	if (!context) {
		throw Error("ModalContext not provided");
	}
	return context;
};

export default useModalContext;
