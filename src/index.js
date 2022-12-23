import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AuthContextProvider from "./contexts/AuthContextProvider";
import ModalContextProvider from "./contexts/ModalContextProvider";
import NavbarContextProvider from "./contexts/NavbarContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<AuthContextProvider>
			<ModalContextProvider>
				<NavbarContextProvider>
					<App />
				</NavbarContextProvider>
			</ModalContextProvider>
		</AuthContextProvider>
	</React.StrictMode>
);
