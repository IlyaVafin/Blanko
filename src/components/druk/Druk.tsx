import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css' // Основные стили Swiper
import 'swiper/css/pagination' // Стили для пагинации
import './Druk.scss'
import druk from './../../assets/druk.svg'

const Druk: React.FC = () => {
	return (
		<>
			<div className='druk__wrapper'>
				<div className='container'>
					<Swiper
						modules={[Pagination, Navigation]}
						slidesPerView={1}
						spaceBetween={30}
						pagination={{ clickable: true }}
					>
						<SwiperSlide>
							<section className='druk__text'>
								<img style={{ marginBottom: '39px' }} src={druk} alt='' />
								<h3>
									“Join a community of industry leading professionals. Join a
									community of industry leading professionals.“
								</h3>
								<p
									style={{
										fontWeight: '700',
										fontSize: '18px',
										lineHeight: '27px',
										marginTop: '41px',
									}}
								>
									Laura Paula
								</p>
								<p
									style={{
										fontWeight: '400',
										fontSize: '16px',
										color: 'rgba(255, 255, 255, 0.7)',
										lineHeight: '24px',
									}}
								>
									Director @Company
								</p>
							</section>
						</SwiperSlide>
						<SwiperSlide>
							<section className='druk__text'>
								<img style={{ marginBottom: '39px' }} src={druk} alt='' />
								<h3>
									“Join a community of industry leading professionals. Join a
									community of industry leading professionals.“
								</h3>
								<p
									style={{
										fontWeight: '700',
										fontSize: '18px',
										lineHeight: '27px',
										marginTop: '41px',
									}}
								>
									Laura Paula
								</p>
								<p
									style={{
										fontWeight: '400',
										fontSize: '16px',
										color: 'rgba(255, 255, 255, 0.7)',
										lineHeight: '24px',
									}}
								>
									Director @Company
								</p>
							</section>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</>
	)
}

export default Druk
