import React, { useState } from 'react';
import './Header.scss';
import icon from '../../img/icons/icon.svg';
import authIcon from '../../img/imgMainPhoto/icons8-пользователь-мужчина-в-кружке-48 (1).png';
import favourites from '../../img/icons/heart.svg';
import cart from '../../img/icons/corzina.svg';
import burgerNenu from '../../img/icons/burger-menu.svg';
import closeMenuImg from '../../img/mainPage/Frame 433.svg';

import { NavLink } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContextProvider';
import { ADMIN } from '../../helpers/const';

export default function Header() {
	const [open, setOpen] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);
	const { user, logOut } = useAuthContext();

	const openMenu = () => {
		setOpen(true);
	};

	const closeMenu = () => {
		setOpen(false);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleLogOut = () => {
		logOut();
		handleClose();
	};

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuItemClick = () => {
		handleClose();
	};

	const handleOutsideClick = (event) => {
		if (anchorEl && !anchorEl.contains(event.target)) {
			handleClose();
		}
	};

	return (
		<header className="header">
			<div className="header__container">
				<div className="header__logo">
					<NavLink to={'/'}>
						<img src={icon} alt="logo" />
					</NavLink>
				</div>
				<div className="app-bar">
					<div className={`menu ${anchorEl ? 'open' : ''}`} onClick={handleOutsideClick}>
						<ul>
							<li>
								<NavLink to={'/auth'} onClick={handleMenuItemClick}>
									Register
								</NavLink>
							</li>
							<li>
								<NavLink to={'/login'} onClick={handleMenuItemClick}>
									Log In
								</NavLink>
							</li>
							<li onClick={handleLogOut}>Log Out</li>
						</ul>
					</div>
				</div>
				{/*  */}
				<div className={`header__menu ${open ? '_open' : ''} menu-header`}>
					<div className="header__close-menu" onClick={closeMenu}>
						<img src={closeMenuImg} alt="" />
					</div>
					<ul className="menu-header__list">
						<li className="menu-header__item">
							<NavLink to={'/catalog'}>Каталог</NavLink>
						</li>
						{user && user.email == ADMIN ? (
							<li className="menu-header__item">
								<NavLink to={'/admin'} onClick={handleMenuItemClick}>
									Админка
								</NavLink>
							</li>
						) : null}
					</ul>
				</div>
				<div className="header__icons">
					<button className="avatar-button" onClick={handleMenu}>
						<span className="account-circle-icon">
							<span className="account-circle-icon">
								{user && user.email ? (
									<p>{user.email.slice(0, 1)}</p>
								) : (
									<>
										<img src={authIcon} alt="ICON" />
									</>
								)}
							</span>
						</span>
					</button>
					<NavLink to={'/favourites'}>
						<img src={favourites} alt="favourites" />
					</NavLink>
					<NavLink to={'/cart'}>
						<img src={cart} alt="cart" />
					</NavLink>
					<button className="header__button" onClick={openMenu}>
						<img src={burgerNenu} alt="burger" />
					</button>
				</div>
			</div>
		</header>
	);
}
