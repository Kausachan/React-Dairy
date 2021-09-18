import React from 'react';
import './Header.styles.scss';


const Header = () => {
	return (
			<div className = "Header-bar">
				<div className = "header-logo">
					Logo
				</div>
				<div className = "Header-font header-option">
					<span >contact</span>
					<span >Signout</span>
				</div>
			</div>
		)
}

export default Header;