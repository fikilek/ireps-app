import React, { useContext } from "react";
import "./SignedInMenu.css";
import "../navbar.css";
import MenuBlock from "../MenuBlock";
import { dataBok } from "../../../data/menuData/dataMenuBox";
import { dataErfs } from "../../../data/menuData/dataMenuErfs";
import { dataUnp } from "../../../data/menuData/dataMenuUnp";
import { dataTrns } from "../../../data/menuData/dataMenuTrns";
import { dataAsts } from "../../../data/menuData/dataMenuAsts";
import { dataAdmin } from "../../../data/menuData/dataMenuAdmin";
import { dataDbd } from "../../../data/menuData/dataMenuDbd";
import { NavLink } from "react-router-dom";

import "react-tippy/dist/tippy.css";
import { Tooltip } from "react-tippy";
import { dataSch } from "../../../data/menuData/dataMenuSch";
import useNavbarContext from "../../../hooks/useNavbarContext";
import useAuthContext from "../../../hooks/useAuthContext";
import useModalContext from "../../../hooks/useModalContext";

const SignedInMenu = () => {
	const { componentToOpen, setComponentToOpen, setModalOpened } =
		useModalContext();
	const { isNavbarVisible, setIsNavBarVisible } = useNavbarContext();
	const { user } = useAuthContext();
	console.log(`user`, user);

	// console.log(`menuStatus`, menuStatus)
	const handleClick = e => {
		setComponentToOpen({
			...componentToOpen,
			name: e.target.id,
		});
		setModalOpened(true);
	};
	return (
		<>
			<ul
				className={`nav-list navlist-left ${isNavbarVisible ? "hide" : "show"}`}
				onClick={() => setIsNavBarVisible(false)}
			>
				{/* Dashboard */}
				<MenuBlock menuData={dataDbd} />
				{/* Assets */}
				<MenuBlock menuData={dataAsts} />
				{/* Transactions */}
				<MenuBlock menuData={dataTrns} />
				{/* Supply Chain */}
				<MenuBlock menuData={dataSch} />
				{/* Erfs */}
				<MenuBlock menuData={dataErfs} />
				{/* Body of Knowledge (Bok) */}
				<MenuBlock menuData={dataBok} />
			</ul>
			<ul className="nav-list navlist-right">
				{/* Admin */}
				<MenuBlock menuData={dataAdmin} />
				<li className="btn">
					{/* avatar */}
					<Tooltip
						title={
							user.isSignedin ? `${user.name} ${user.surname}` : "No User signedin"
						}
						position="left"
						className="user-tooltip"
					>
						<NavLink to="/user" className="user-initials">
							{/* {user.isSignedin ? `${user.name} ${user.surname}` : "No User"} */}
							{user.isSignedin ? `FK` : "No User"}
						</NavLink>
					</Tooltip>
					<ul className="sub-menu">
						<li>
							<NavLink to="/user">User Profile</NavLink>
						</li>

						<li>
							<a href="#" onClick={handleClick} id="signout">
								Sign out
							</a>
						</li>
					</ul>
				</li>
			</ul>
		</>
	);
};

export default SignedInMenu;
