import React from 'react';
import './NotFoundPage.scss';
import { NavLink } from 'react-router-dom';

export default function NotFoundPage() {
	return (
		<main>
			<div className="error">
				<p>404</p>
				<p>Страница не найдена :(</p>
				Перейти на <NavLink to={'/'}>главную</NavLink>
			</div>
		</main>
	);
}
