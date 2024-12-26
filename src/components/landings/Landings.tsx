import React from 'react'
import landing1 from './../../assets/landing1.jpg'
import landing2 from './../../assets/landing2.jpg'
import landing3 from './../../assets/landing3.jpg'
import landing4 from './../../assets/landing4.jpg'
import './Landings.scss'
const Landings: React.FC = () => {
	interface dataLandingsItem {
		img: string
		title: string
	}
	const dataLandings: dataLandingsItem[] = [
		{
			img: landing1,
			title: 'Landing one',
		},
		{
			img: landing2,
			title: 'Landing two',
		},
		{
			img: landing3,
			title: 'Landing three',
		},
		{
			img: landing4,
			title: 'Landing four',
		},
	]
	return (
		<>
			<div className='landings__wrapper'>
				<div className='container'>
					<div className='ladnigns__content'>
						<h2>Landing pages</h2>
						<section className='landings__card-wrapper'>
							{dataLandings.map((item: dataLandingsItem, index: number) => {
								return (
									<div key={index} className='landing__card'>
										<div className='landing__card-photo'>
											<img src={item.img} alt='' />
										</div>
										<div className='landing__card-title'>
											<p>{item.title}</p>
										</div>
									</div>
								)
							})}
						</section>
					</div>
				</div>
			</div>
		</>
	)
}

export default Landings
