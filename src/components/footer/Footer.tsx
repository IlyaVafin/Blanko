import React from 'react'
import logo from './../../assets/logo.svg'
import './Footer.scss'
import inst from './../../assets/inst.svg'
import twitter from './../../assets/twitter.svg'
import facebook from './../../assets/facebook.svg'
import footerlogo from './../../assets/footerlogo.svg'
const Footer: React.FC = () => {
	return (
		<>
			<footer>
				<div className='footer__wrapper'>
					<div className='container-header--footer'>
						<section className='footer__top'>
							<img src={logo} alt='' />
							<button className='button'>Get on Webflow</button>
						</section>
						<section className='footer__mid'>
							<nav className='footer__nav'>
								<ul className='footer__menu'>
									<li className='footer__menu-item'>
										<a className='footer__menu-link' href=''>
											ShowCase
										</a>
									</li>
									<li className='footer__menu-item'>
										<a className='footer__menu-link' href=''>
											Landing one
										</a>
									</li>
									<li className='footer__menu-item'>
										<a className='footer__menu-link' href=''>
											Sign up
										</a>
									</li>
									<li className='footer__menu-item'>
										<a className='footer__menu-link' href=''>
											Other templates
										</a>
									</li>
								</ul>
							</nav>
							<div className='footer__mid-socials'>
								<div className='footer__mid-socials-wrapper'>
									<img src={inst} alt='' />
								</div>
								<div className='footer__mid-socials-wrapper'>
									<img src={twitter} alt='' />
								</div>
								<div className='footer__mid-socials-wrapper'>
									<img src={facebook} alt='' />
								</div>
							</div>
						</section>
						<section className='footer__bottom'>
							<div className='footer__bottom-authors'>
								<span>Powered by</span>
								<img src={footerlogo} alt='' />
								<span>Designed by</span>
								<span style={{ color: '#FF7143' }}>Veljko</span>
							</div>
							<div className='footer__botoom-contact'>
								<span>Contact</span>
							</div>
						</section>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Footer
