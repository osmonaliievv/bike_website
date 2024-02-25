import React, { useEffect, useState } from 'react';
import './DetailsPage.scss';
import '../../styles/common.scss';
import img_main from '../../img/imgMainPhoto/image 68.png';
import save from '../../img/cartPage/save-svgrepo-com (1).svg';
import { NavLink, useParams } from 'react-router-dom';
import { useDetail } from '../../context/DetailContextProvider';
import { useCart } from '../../context/CartContextProvider';
import { useLike } from '../../context/FavoritesContextProvider';
import { useProduct } from '../../context/ProductContextProvider';
import { useAuthContext } from '../../context/AuthContextProvider';

export default function DetailsPage() {
	const { getProductById, productById } = useDetail();
	const { addProductToCart, checkProductInCart } = useCart();
	const { addProductsToLike, checkProductInLike } = useLike();
	const { addComment } = useProduct();
	const { id } = useParams();
	const [comment, setComment] = useState('');
	const [liked, setLiked] = useState(false);
	const { user } = useAuthContext();

	useEffect(() => {
		getProductById(id);
	}, []);

	const handleLikeClick = () => {
		setLiked(!liked);
	};

	const sendCommentFrom = async (e) => {
		e.preventDefault();
		let comArr = [comment, user.email];
		await addComment(id, comArr);
		setComment('');
		await getProductById(id);
	};

	return (
		<main className="details">
			<div className="details__container">
				<h4 className="bread-crumbds-details">
					<NavLink to={'/'}>Главная</NavLink> /<NavLink to={'/catalog'}>Каталог</NavLink> /
					<strong>{productById.name}</strong>
				</h4>
				<div className="details__top">
					<div>
						<div className="details__imgmain-ibg">
							<img src={productById.image} alt="" />
						</div>
					</div>
					<div className="details__block2 ">
						<div className="details__997 ">{productById.name}</div>
						<p className="details__price">{productById.price}</p>
						<div className="details__size">
							<p>Размер:</p>
							<div className="details__sizess">
								<p className="details__sizes1">{productById.size}</p>
							</div>
						</div>
						<div className="details__current">
							<button
								className={`details__cart ${
									productById && checkProductInCart(productById.id) ? 'selected' : ''
								}`}
								onClick={() => {
									addProductToCart(productById);
								}}
								disabled={checkProductInCart(productById.id)}>
								В корзину
							</button>
							<div>
								<button onClick={handleLikeClick}>
									<svg
										className="details__heart-img"
										width="21"
										height="18"
										viewBox="0 0 21 18"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M19.16 2.00017C18.1 0.937373 16.6948 0.288706 15.1984 0.171335C13.7019 0.0539653 12.2128 0.475631 11 1.36017C9.72769 0.413803 8.14402 -0.0153233 6.56795 0.159203C4.99188 0.333729 3.54047 1.09894 2.506 2.30075C1.47154 3.50256 0.930854 5.05169 0.992833 6.63618C1.05481 8.22067 1.71485 9.72283 2.84003 10.8402L9.05003 17.0602C9.57005 17.5719 10.2704 17.8588 11 17.8588C11.7296 17.8588 12.43 17.5719 12.95 17.0602L19.16 10.8402C20.3276 9.66543 20.983 8.07644 20.983 6.42017C20.983 4.76389 20.3276 3.1749 19.16 2.00017ZM17.75 9.46017L11.54 15.6702C11.4694 15.7415 11.3853 15.7982 11.2926 15.8368C11.1999 15.8755 11.1005 15.8954 11 15.8954C10.8996 15.8954 10.8002 15.8755 10.7075 15.8368C10.6148 15.7982 10.5307 15.7415 10.46 15.6702L4.25003 9.43017C3.46579 8.62851 3.02664 7.55163 3.02664 6.43017C3.02664 5.3087 3.46579 4.23182 4.25003 3.43017C5.04919 2.64115 6.127 2.19873 7.25003 2.19873C8.37306 2.19873 9.45088 2.64115 10.25 3.43017C10.343 3.52389 10.4536 3.59829 10.5755 3.64906C10.6973 3.69983 10.828 3.72596 10.96 3.72596C11.092 3.72596 11.2227 3.69983 11.3446 3.64906C11.4665 3.59829 11.5771 3.52389 11.67 3.43017C12.4692 2.64115 13.547 2.19873 14.67 2.19873C15.7931 2.19873 16.8709 2.64115 17.67 3.43017C18.4651 4.22132 18.9186 5.29236 18.9336 6.41385C18.9485 7.53535 18.5237 8.6181 17.75 9.43017V9.46017Z"
											fill={liked ? `red` : 'black'}
										/>
									</svg>
								</button>
							</div>
							<button
								disabled={checkProductInLike(productById.id)}
								className="details__izbranoe"
								onClick={() => addProductsToLike(productById)}>
								<svg
									width="10"
									height="14"
									viewBox="0 0 10 14"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M9 13.5L5 9.5L1 13.5V1.5C1 1.23478 1.10536 0.98043 1.29289 0.792893C1.48043 0.605357 1.73478 0.5 2 0.5H8C8.26522 0.5 8.51957 0.605357 8.70711 0.792893C8.89464 0.98043 9 1.23478 9 1.5V13.5Z"
										stroke="#000001"
										stroke-linecap="round"
										stroke-linejoin="round"
										fill={checkProductInLike(id) ? 'black' : ''}
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
				<div className="details__block3">
					<div className="details__title">
						<p className="details__name">Описание</p>
						<p className="details__name-descr">{productById.descr}</p>
					</div>
				</div>
				<div className="details__block4">
					<div className="details__title2">Характеристика</div>
					<div className="blockk">
						<ul className="block__list">
							<li className="block__item">Цвет</li>
							<li className="block__item">Бренд</li>
							<li className="block__item">Материал рамы</li>
							<li className="block__item">Размер</li>
							<li className="block__item">Страна</li>
						</ul>
						<ul className="block__list">
							<li className="block__item2">{productById.color}</li>
							<li className="block__item2">{productById.brand}</li>
							<li className="block__item2">{productById.frame}</li>
							<li className="block__item2">{productById.size}</li>
							<li className="block__item2">{productById.country}</li>
						</ul>
					</div>
				</div>
				<div className="details__coments coments-details">
					<div className="coments-details__title">Отзывы</div>
					<ul className="coments-details__comments">
						{productById.comment && user
							? productById.comment.map((elem) => (
									<li key={elem.id} className="coments-details__item">
										<div>
											<p className="coments-details__avatar">{elem[1].slice(0, 1)}</p>
											<p className="coments-details__user-email">{elem[1]}</p>
										</div>
										<p className="coments-details__user-com">{elem[0]}</p>
									</li>
							  ))
							: null}
					</ul>
					<form action="#" className="coments-details__form" onSubmit={(e) => sendCommentFrom(e)}>
						<input
							type="text"
							className="coments-details__input"
							placeholder="Оставьте свой отзыв..."
							value={comment}
							onChange={(e) => setComment(e.target.value)}
						/>
						<button className="coments-details__button">
							<svg
								width="14"
								height="14"
								viewBox="0 0 14 14"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<g clipPath="url(#clip0_1236_16354)">
									<path
										d="M5.81997 11L7.99997 13.17C8.13373 13.3071 8.30096 13.4069 8.48512 13.4595C8.66928 13.5121 8.86399 13.5158 9.04997 13.47C9.23712 13.4265 9.40993 13.3356 9.55179 13.206C9.69364 13.0764 9.79977 12.9125 9.85997 12.73L13.44 2.00002C13.5147 1.79897 13.5301 1.5807 13.4844 1.37114C13.4387 1.16159 13.3337 0.969571 13.1821 0.817909C13.0304 0.666247 12.8384 0.561322 12.6288 0.515606C12.4193 0.46989 12.201 0.485305 12 0.56002L1.26997 4.14002C1.08122 4.20449 0.913116 4.3182 0.783022 4.46939C0.652928 4.62058 0.565569 4.80377 0.529974 5.00002C0.493233 5.17851 0.501412 5.36333 0.553776 5.53788C0.60614 5.71243 0.701049 5.87123 0.829974 6.00002L3.56997 8.74002L3.47997 12.21L5.81997 11Z"
										stroke="#000001"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
									<path
										d="M13.1199 0.780029L3.56995 8.74003"
										stroke="#000001"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</g>
								<defs>
									<clipPath id="clip0_1236_16354">
										<rect width="14" height="14" fill="white" />
									</clipPath>
								</defs>
							</svg>
						</button>
					</form>
				</div>
			</div>
		</main>
	);
}
