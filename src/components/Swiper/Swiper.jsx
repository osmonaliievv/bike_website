import { Navigation, Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import '../../pages/HomePage/HomePage.scss';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { NavLink } from 'react-router-dom';

export default () => {
	return (
		<Swiper
			modules={[Navigation, Pagination, A11y]}
			spaceBetween={50}
			slidesPerView={1}
			navigation
			pagination={{ clickable: true }}>
			<SwiperSlide>
				<div className="top-description__text">
					<h1 className="top-description__title">Электро велосипеды</h1>
					<h3 className="top-description__sub-title">
						Cento10 Hybrid — это гоночный велосипед с помогающим педалированию электроприводом,
						который устанавливает новый, очень высокий стандарт для данной категории
					</h3>
					<NavLink to={'/catalog'} className="top-description__button">
						Подробнее
					</NavLink>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className="top-description__text">
					<h1 className="top-description__title">Электро велосипеды</h1>
					<h3 className="top-description__sub-title">
						Гидра — обычный велик с помогающей сидушкой, который устанавливает новый, очень высокий
						стандарт для того, стобы сидеть на нем
					</h3>
					<NavLink to={'/catalog'} className="top-description__button">
						Подробнее
					</NavLink>
				</div>
			</SwiperSlide>
		</Swiper>
	);
};
