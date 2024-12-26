import React, { useState } from 'react'
import heroImg from './../../assets/hero.jpg'
import './Hero.scss'
const Hero: React.FC = () => {
	const [modal, setModal] = useState<boolean>(false)

	const showModal = () => {
		setModal(true)
	}
	const hideModal = () => {
		setModal(false)
	}
	return (
		<>
			<div
				onClick={hideModal}
				style={{ display: modal ? 'block' : 'none' }}
				className='overlay'
			></div>
			<div
				style={{
					display: modal ? 'block' : 'none',
				}}
				className='modal'
			>
				<h1>Наши шаблоны</h1>
				<ul>
					<li>Шаблон 1</li>
					<li>Шаблон 2</li>
					<li>Шаблон 3</li>
				</ul>
			</div>
			<div className='hero__wrapper'>
				<div className='container'>
					<div className='hero__content'>
						<section className='hero__text'>
							<h1>Blanko template</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
								mauris porttitor amet volutpat.
							</p>
							<div className=''>
								<button
									onClick={showModal}
									className='hero__button-purchase button'
								>
									Purchase template
								</button>
								<button className='hero__button-other button'>
									Other templates
								</button>
							</div>
						</section>
						<div className='hero__img'>
							<img src={heroImg} alt='' />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Hero
