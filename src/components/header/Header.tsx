import logo from './../../assets/logo.svg'
import './Header.scss'
import burgerBtn from './../../assets/burger-button.svg'
import close from './../../assets/close.svg'
import { useState } from 'react'
const Header = () => {
	const [burgerMenu, setBurgerMenu] = useState<boolean>(false)
	const showBurgerMenu = () => {
		setBurgerMenu(true)
		document.body.style.overflow = 'hidden'
	}
	const hideBurgerMenu = () => {
		setBurgerMenu(false)
		document.body.style.overflow = 'auto'
	}
	return (
		<>
			<div
				style={{
					display: burgerMenu ? 'block' : 'none',
				}}
				className='burger-menu__wrapper'
			>
				<header className='burger-menu__header'>
					<img width={80} height={26} src={logo} alt='' />
					<button
						onClick={hideBurgerMenu}
						className='burger-menu__button-close'
					>
						<img src={close} alt='' />
					</button>
				</header>
				<p>mail@blanko.com</p>
				<nav className='burger-menu__nav'>
					<ul className='burger__menu-list'>
						<li>
							<a href=''>Landing</a>
						</li>
						<li>
							<a href=''>All Pages</a>
						</li>
						<li>
							<a href=''>Template</a>
						</li>
					</ul>
				</nav>
				<button className='purchase-burger-btn button'>
					Purchase template
				</button>
			</div>

			<header className='header'>
				<div className='container-header--footer'>
					<div className='header__inner'>
						<div className='header__logo'>
							<img src={logo} alt='' />
							<span>mail@blanko.com</span>
						</div>
						<nav className='header__menu'>
							<ul className='header__menu-list'>
								<li className='header__menu-item'>
									<a className='header__menu-link' href=''>
										Landing
									</a>
								</li>
								<li className='header__menu-item'>
									<a className='header__menu-link' href=''>
										All pages
									</a>
								</li>
								<li className='header__menu-item'>
									<a className='header__menu-link' href=''>
										Template
									</a>
								</li>
							</ul>
							<div className='burger__button'>
								<button onClick={showBurgerMenu}>
									<img src={burgerBtn} alt='' />
								</button>
							</div>
							<div className='header__button-purchase button'>
								<button>Purchase template</button>
							</div>
						</nav>
					</div>
				</div>
			</header>
		</>
	)
}

export default Header
