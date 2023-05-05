import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit', email, password);

        const url = 'http://localhost:5000/login';
        const method = 'POST';
        const headers = {
            'Content-Type': 'application/json'
        }
        const body = JSON.stringify({ email, password });

        fetch(url, { method, headers, body })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.log('Error.', error));
    }

    return (
        <div>
            <div className="logo">
                <img src="../public/logo.png" alt="Logo" />
            </div>
            <div className="auth-form-container">
                <h2>Login</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="email">email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                    <label htmlFor="password">password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                    <button type="submit">Log In</button>
                </form>
                <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
            </div>
        </div>
    )
}