import React, { useContext, useEffect } from "react";
import "./SignedOuMenu.css";
import MenuBlock from "../MenuBlock";
import { dataBok } from "../../../data/menuData/dataMenuBox";
import { dataErfs } from "../../../data/menuData/dataMenuErfs";
import useModalContext from "../../../hooks/useModalContext";
import useNavbarContext from "../../../hooks/useNavbarContext";

const SignedOutMenu = () => {
	const { componentToOpen, setComponentToOpen, setModalOpened } = useModalContext();
	const { isNavbarVisible, setIsNavBarVisible } = useNavbarContext();

	const handleClick = e => {
		// modalOpened a modal window
		setComponentToOpen({
			...componentToOpen,
			name: e.target.id,
		});
		setModalOpened(true);
	};

	const handleClickOnNavList = e => {
		// console.log(`nav-list clicked : menuStatus : ${menuStatus}` )
		if (isNavbarVisible) {
			// console.log(`about to change menyStatus`)
			setIsNavBarVisible(false);
			// console.log(`menuStatus changed to : ${menuStatus}`)
		}
	};

	return (
		<ul
			className={`nav-list ${isNavbarVisible ? "show" : "hide"}`}
			onClick={handleClickOnNavList}
		>
			{/* Erfs */}
			<MenuBlock menuData={dataErfs} />
			{/* Body of Knowledge (Bok) */}
			<MenuBlock menuData={dataBok} classes={"expand"} />
			{/* Sign up */}
			{/* <MenuBlock menuData={dataSignUp} classes={"btn  move-right"} /> */}
			<li className="btn  move-right">
				<a href="#" onClick={handleClick} id="signup">
					Sign up
				</a>
			</li>
			{/* Sign in */}
			{/* <MenuBlock menuData={dataSignIn} classes={"btn  move-right"} /> */}
			<li className="btn  move-right">
				<a href="#" onClick={handleClick} id="signin">
					Sign in
				</a>
			</li>
		</ul>
	);
};

export default SignedOutMenu;
