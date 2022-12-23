import React from 'react'
import {NavLink} from 'react-router-dom'

const MenuBlock = ({ menuData, classes }) => {
  console.log(`menuData`, menuData)
  return (
			menuData &&
			menuData.map(item => (
				<li key={item.to} className={item.liClass}>
					<NavLink to={item.to}>
						{item.icon}
						{item.menu}
					</NavLink>
					{item.children && (
						<ul className="sub-menu">
							<MenuBlock menuData={item.children} />
						</ul>
					)}
				</li>
			))
		);
}

export default MenuBlock