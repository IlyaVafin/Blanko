import React from 'react'
import DataQuality, { DataQualityItem } from './DataQuality.ts'
import QualityCard from './QualityCard.tsx'
import './Quality.scss'
const Quality: React.FC = () => {
	return (
		<>
			<div className='quality__wrapper'>
				<div className='container'>
					<section className='quality__content'>
						{DataQuality.map((v: DataQualityItem, i: number) => (
							<QualityCard key={i} img={v.img} title={v.title} desc={v.desc} />
						))}
					</section>
				</div>
			</div>
		</>
	)
}

export default Quality
