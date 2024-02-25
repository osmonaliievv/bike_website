import React, { useEffect, useState } from 'react';
import { useAuthContext } from '../../context/AuthContextProvider';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
	const { user, logIn } = useAuthContext();
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
	//   useEffect(() => {
	//   }, []);
	return (
		<div className="container">
			{error && <div className="error">{error}</div>}
			<h2 className="title">Sign In</h2>
			<input
				className="input"
				type="text"
				placeholder="Email Address"
				value={email}
				autoComplete="new-email"
				onChange={(e) => setEmail(e.target.value)}
			/>
			<input
				className="input"
				type="password"
				placeholder="Password"
				value={password}
				autoComplete="new-password"
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button className="button" onClick={handleLoginSubmit}>
				Log In
			</button>
			<div className="signup-link">
				Don't have an account?
				<NavLink to={'/auth'} className="signup-link-text">
					Sign Up
				</NavLink>
			</div>
		</div>
	);
};

export default Login;
