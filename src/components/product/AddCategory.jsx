import React, { useState } from 'react';
import { useProduct } from '../../context/ProductContextProvider';
import '../../components/product/Products.css';

const AddCategory = () => {
	const { createCategory } = useProduct();
	const [category, setCategory] = useState('');

	const handleClick = () => {
		if (!category) {
			alert('Заполни поле !');
			return;
		} else {
			const newCategory = {
				name: category,
			};
			createCategory(newCategory);
		}
	};
	return (
		<div>
			<h2 style={{ marginBottom: '20px' }}>Добавить Категорию</h2>
			<input
				placeholder="Пиши..."
				className="category"
				type="text"
				onChange={(e) => setCategory(e.target.value)}
			/>
			<button onClick={handleClick} className="category__button">
				Добавить
			</button>
		</div>
	);
};

export default AddCategory;
