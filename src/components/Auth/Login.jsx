import React, { useEffect, useState } from 'react';
import { useAuthContext } from '../../context/AuthContextProvider';
import { NavLink, useNavigate } from 'react-router-dom';
import '../Auth/Login.scss';

const Login = () => {
	const { logIn } = useAuthContext();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const navigate = useNavigate();
	const handleLoginSubmit = async () => {
		try {
			await logIn(email, password);
			navigate('/');
			setPassword('');
			setEmail('');
		} catch (error) {
			setError(error.message);
		}
	};

	return (
		<main className="login">
			<div className="login__container">
				{error && <div className="error">{error}</div>}
				<h2 className="login__title">Log In</h2>
				<input
					className="login__input"
					type="text"
					placeholder="Email Address"
					value={email}
					autoComplete="new-email"
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					className="login__input"
					type="password"
					placeholder="Password"
					value={password}
					autoComplete="new-password"
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button className="login__button" onClick={handleLoginSubmit}>
					Log In
				</button>
				<div className="login__signup-link">
					Don't have an account?
					<NavLink to={'/auth'}>Sign Up</NavLink>
				</div>
			</div>
		</main>
	);
};

export default Login;
