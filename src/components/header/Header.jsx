import React from "react";
import "./Header.css";
import { NavLink, Outlet } from "react-router-dom";

import SignedInMenu from "../navbar/signedinMenu/SignedInMenu";
import SignedOutMenu from "../navbar/signedoutMenu/SignedOutMenu";
import useAuthContext from "../../hooks/useAuthContext";
import useNavbarContext from "../../hooks/useNavbarContext";
import { MdClose, MdMenu } from "react-icons/md";
import { FaRubleSign } from "react-icons/fa";
import SideNavbar from "../sidenavbar/SideNavbar";

const Header = () => {
	const { isNavbarVisible, setIsNavBarVisible } = useNavbarContext();
	// console.log(`isNavbarVisible`, isNavbarVisible);
	const { user } = useAuthContext();
	// console.log(`user`, user);

	return (
		<div className="app-container">
			<header className="header">
				<nav>
					<div className="nav-logo">
						<NavLink to="/">
							<FaRubleSign />
						</NavLink>
					</div>
					<div className={`nav-menu  ${isNavbarVisible ? "nav-menu-show" : "nav-menu-hide"} `}>
						{user ? <SignedInMenu /> : <SignedOutMenu />}
					</div>
					<div
						className="nav-icons"
						onClick={() => setIsNavBarVisible(!isNavbarVisible)}
					>
						{isNavbarVisible ? <MdClose /> : <MdMenu />}
					</div>
				</nav>
			</header>
			<div className="pages">
				<SideNavbar />
				<Outlet />
			</div>
		</div>
	);
};

export default Header;
