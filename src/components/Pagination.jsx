import React, { useEffect, useState } from 'react';
import '../pages/CatalogPage/CatalogPage.scss';
import { useProduct } from '../context/ProductContextProvider';

export default function Pagination({ displayedProducts, setCurrentPage }) {
	const { products, getProducts } = useProduct();
	let numbers = [];

	useEffect(() => {
		getProducts();
	}, []);

	const handlePageClick = (number) => {
		setCurrentPage(number);
		window.scrollTo(0, 250);
	};

	for (let i = 1; i <= Math.ceil(products.length / displayedProducts); i++) {
		numbers.push(i);
	}

	return (
		<>
			<ul className="pagination-list">
				{numbers
					? numbers.map((number) => (
							<li
								className={`pagination-item`}
								key={number}
								onClick={() => handlePageClick(number)}>
								{number}
							</li>
					  ))
					: null}
			</ul>
		</>
	);
}
