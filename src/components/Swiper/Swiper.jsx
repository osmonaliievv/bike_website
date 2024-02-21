// import Swiper core and required modules
import { Pagination, Navigation, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Swiper.scss';
import { NavLink } from 'react-router-dom';

export default () => {
	return (
		<Swiper
			modules={[Pagination, Navigation, A11y]}
			spaceBetween={50}
			slidesPerView={1}
			navigation
			pagination={{ clickable: true }}
			className="swiper">
			<SwiperSlide>
				<div className="swiper__text">
					<h1 className="swiper__title">Электро велосипеды</h1>
					<h3 className="swiper__sub-title">
						Cento10 Hybrid — это гоночный велосипед с помогающим педалированию электроприводом,
						который устанавливает новый, очень высокий стандарт для данной категории
					</h3>
					<NavLink to={'/'} className="swiper__button">
						Подробнее
					</NavLink>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="swiper__text">
					<h1 className="swiper__title">Обычные велосипеды</h1>
					<h3 className="swiper__sub-title">
						CentoUltra2000 Hybrid — четкий, сочный, восточный велосипед
					</h3>
					<NavLink to={'/'} className="swiper__button">
						Подробнее
					</NavLink>
				</div>
			</SwiperSlide>
		</Swiper>
	);
};
