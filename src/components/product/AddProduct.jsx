import React, { useEffect, useState } from 'react';
import { useProduct } from '../../context/ProductContextProvider';
import './Products.css';

const AddProduct = () => {
	const { addProduct, categories, getCategories } = useProduct();
	const [product, setProduct] = useState({
		image: '',
		name: '',
		price: '',
		color: '',
		brand: '',
		frame: '',
		size: '',
		country: '',
		category: '',
		descr: '',
		comment: [],
	});
	useEffect(() => {
		getCategories();
	}, []);
	const handleInput = (e) => {
		if (e.target.name === 'price') {
			const obj = {
				...product,
				[e.target.name]: Number(e.target.value),
			};
			setProduct(obj);
		} else {
			const obj = {
				...product,
				[e.target.name]: e.target.value,
			};
			setProduct(obj);
		}
	};
	const handleClick = () => {
		addProduct(product);
	};
	return (
		<main className="add-inputs">
			<input
				className="Addproduct-input"
				onChange={handleInput}
				type="text"
				name="image"
				placeholder="Image"
			/>
			{/* <CategorySelector categories={categories} handleInput={handleInput} /> */}
			<select onChange={handleInput} name="category">
				<option value="">Выберите Категорию</option>
				{categories.map((elem) => (
					<option key={elem.id} value={`${elem.name}`}>
						{elem.name}
					</option>
				))}
			</select>
			<input
				className="Addproduct-input"
				onChange={handleInput}
				type="text"
				name="name"
				placeholder="Name"
			/>
			<input
				className="Addproduct-input"
				onChange={handleInput}
				type="text"
				name="price"
				placeholder="Price"
			/>
			<input
				className="Addproduct-input"
				onChange={handleInput}
				type="text"
				name="color"
				placeholder="Сolor"
			/>
			<input
				className="Addproduct-input"
				onChange={handleInput}
				type="text"
				name="brand"
				placeholder="Brand"
			/>
			<input
				className="Addproduct-input"
				onChange={handleInput}
				type="text"
				name="frame"
				placeholder="Frame material"
			/>
			<input
				className="Addproduct-input"
				onChange={handleInput}
				type="text"
				name="size"
				placeholder="Size"
			/>
			<input
				className="Addproduct-input"
				onChange={handleInput}
				type="text"
				name="country"
				placeholder="Country"
			/>
			<input
				className="Addproduct-input"
				onChange={handleInput}
				type="text"
				name="descr"
				placeholder="Description"
			/>
			<button onClick={handleClick}>Add</button>
		</main>
	);
};

export default AddProduct;
