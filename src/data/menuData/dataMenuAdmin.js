import { MdArrowDropDown, MdArrowLeft } from "react-icons/md";

export const dataAdmin = [
	{
		// This is an "li" element.
		to: "/admin",
		menu: "Admin",
		"menu-level": "1",
		icon: <MdArrowDropDown />,
		children: [
			// The children is always a "Ul" element followed by 'li'
			{
				to: "/admin/users",
				menu: "Users",
				"menu-level": "2",
				icon: "",
				children: null,
			},
			{
				// System tables
				to: "/admin/syst",
				menu: "System Tables",
				"menu-level": "2",
				icon: <MdArrowLeft />,
				liClass: "system-tables",
				children: [
					{
						to: "/admin/syst/user-roles",
						menu: "User Roles",
						"menu-level": "3",
						icon: "",
						children: null,
					},
					{
						to: "/admin/syst/ast-states",
						menu: "Asset states",
						"menu-level": "3",
						icon: null,
						children: null,
					},
					{
						to: "/admin/syst/trn-states",
						menu: "Transaction States",
						"menu-level": "3",
						icon: null,
						children: null,
					},
				],
			},
			{
				// Mobile devices
				to: "/admin/mobile-devices",
				menu: "Mobile Devices",
				"menu-level": "2",
				icon: "",
				children: null,
			},
			{
				// Simcards
				to: "/admin/sim-cards",
				menu: "Simcards",
				"menu-level": "2",
				icon: "",
				children: null,
			},
		],
	},
];