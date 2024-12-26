import React from 'react'

interface QualityCardProps {
	img: any
	title: string
	desc: string
}

const QualityCard: React.FC<QualityCardProps> = ({ img, title, desc }) => {
	return (
		<>
			<div className='quality__card'>
				<img src={img} alt='' />
				<div className='quality__card-text'>
					<h4>{title}</h4>
					<p>{desc}</p>
				</div>
			</div>
		</>
	)
}

export default QualityCard
