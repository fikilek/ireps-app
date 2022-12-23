import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import useAuthContext from "./hooks/useAuthContext";
import Home from "./pages/home/Home";
import Bok from "./pages/bok/Bok";
import Trns from "./pages/trns/Trns";
import Erfs from "./pages/erfs/Erfs";
import Modal from "./components/modals/Modal";
import NoPageFound from "./pages/404/NoPageFound";
import Signout from "./components/forms/auth/signout/Signout";
import PurchaseOrder from "./pages/sch/pos/PurchaseOrder";
import Suppliers from "./pages/sch/suppliers/Suppliers";
import Stores from "./pages/sch/stores/Stores";
import UserProfile from "./pages/users/serProfile/UserProfile";

import DbdMain from "./pages/dbd/dbdMain/DbdMain";
import DbdMeters from "./pages/dbd/dbdMeters/DbdMeters";
import DbdBoxes from "./pages/dbd/dbdBoxes/DbdBoxes";
import DbdPoles from "./pages/dbd/dbdPoles/DbdPoles";
import DbdFeeders from "./pages/dbd/dbdFeeders/DbdFeeders";
import DbdTrfs from "./pages/dbd/dbdTrfs/DbdTrfs";
import DbdCBs from "./pages/dbd/dbdCBs/DbdCBs";
import DbdVtCts from "./pages/dbd/dbdVtCts/DbdVtCts";

import Asts from "./pages/asts/Asts";
import Users from "./pages/users/Users";
import AstsStates from "./pages/astsStates/AstsStates";
import Simcards from "./pages/simCards/Simcards";
import MobileDevices from "./pages/mobileDevices/MobileDevices";
import UserRoles from "./pages/userRoles/UserRoles";
import TrnStates from "./pages/trnStates/TrnStates";
import DbdSeals from "./pages/dbd/dbdSeals/DbdSeals";
import Admin from "./pages/admin/Admin";
function App() {
	const context = useAuthContext();
	console.log(context);
	return (
		<div className="app-main-container">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Header />}>
						<Route index element={<Home />} />
						{/* path to dashboard main page [ml1 = dbd] */}
						<Route path="/dbd">
							<Route index element={<DbdMain />} />
							<Route path="meters" element={<DbdMeters />} /> {/* em */}
							<Route path="boxes" element={<DbdBoxes />} /> {/* bx */}
							<Route path="poles" element={<DbdPoles />} /> {/* pl */}
							<Route path="feeders" element={<DbdFeeders />} />
							{/* fd */}
							<Route path="trfs" element={<DbdTrfs />} />
							{/* tf */}
							<Route path="cbs" element={<DbdCBs />} />
							{/* cb */}
							<Route path="vtcts" element={<DbdVtCts />} />
							{/* vc */}
							<Route path="seals" element={<DbdSeals />} />
							{/* sl */}
						</Route>
						{/* assets section -----------------------------------------------------*/}
						{/* path to assets main page [ml1 = asts] */}
						<Route path="/asts">
							<Route index element={<Asts />} />
							{/* ml2 = 'vtcts' or 'trfs'[transformers] or 'fds'[feeders] or 'pls'[ploes] or 'bxs'[boxes] or 'ems'[electricity meters] or 'cbs'[circuit breakers] or sls[seals] */}
							<Route path=":ml2" element={<Asts />} />
						</Route>

						{/* transactions section -----------------------------------------------------*/}
						{/* path to assets main page [ml1 = trns] */}
						<Route path="/trns" element={<Trns />}>
							{/* ml2 = 'asr' or 'inst'[installation] or 'com'[comissioning] or 'dcn'[disconnection] or 'rcn'[reconnection] or 'aud'[audits] or 'vnd'[vending] or mis[missing] or fnd[found] or ret[returned] or dcm[decomissioned] */}
							<Route path=":ml2" element={<Trns />}>
								<Route path=":ml3" element={<Trns />} />
							</Route>
						</Route>

						{/* supply chain section -----------------------------------------------------*/}
						{/* path to assets main page [ml1 = erfs] */}
						<Route path="/sch">
							<Route path="pos" element={<PurchaseOrder />} />
							<Route path="suppliers" element={<Suppliers />} />
							<Route path="stores" element={<Stores />} />
						</Route>

						{/* erfs section -----------------------------------------------------*/}
						{/* path to assets main page [ml1 = erfs] */}
						<Route path="/erfs" element={<Erfs />}></Route>

						{/* body of knowledge section -----------------------------------------------------*/}
						{/* path to assets bok page [ml1 = bok] */}
						<Route path="/bok" element={<Bok />}></Route>

						{/* admin section -----------------------------------------------------*/}
						{/* path to admin main page [ml1 = admin] */}

						<Route path="/admin">
							<Route index element={<Admin />} />
							<Route path="users" element={<Users />} />
							{/* ml2 = 'sytt'[system tables] or 'unps'[users] or 'mdvs'[mobile devices] or 'sics'[sim cards] or erfs[ervens] */}
							<Route path="syst">
								{/* assets state - astsst */}
								<Route path="ast-states" element={<AstsStates />} />
								{/* tran sate - transaction state */}
								<Route path="trn-states" element={<TrnStates />} />
								{/* user roles - userrls */}
								<Route path="user-roles" element={<UserRoles />} />
							</Route>

							<Route path="mobile-devices" element={<MobileDevices />} />
							<Route path="sim-cards" element={<Simcards />} />
						</Route>

						{/* TODO: Attend to the issue of displaying Unp for a signedin user */}
						{/* unp section (signedin user)-----------------------------------------------------*/}
						{/* path to unp main page [ml1 = unp] */}
						<Route path="/user" element={<UserProfile />}></Route>

						{/* signout section -----------------------------------------------------*/}
						{/* path to signout main page [ml1 = signout] */}
						<Route path="/signout" element={<Signout />} />

						{/* no page found (npf) section -----------------------------------------------------*/}
						{/* This is a catch all path to NoPageFound page. This is Error 404 */}
						<Route path="*" element={<NoPageFound />} />
					</Route>
				</Routes>

				<Modal />
				{/* </div> */}
			</BrowserRouter>
		</div>
	);
}

export default App;
