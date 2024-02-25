import React from 'react';
import AddProduct from '../../components/product/AddProduct';
import AddCategory from '../../components/product/AddCategory';

const AdminPage = () => {
	return (
		<main className="admin-page">
			<div className="admin-page__container">
				<AddCategory />
				<AddProduct />
			</div>
		</main>
	);
};

export default AdminPage;
