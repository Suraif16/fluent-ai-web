import React, { useState } from "react";


export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [contact_no, setContact_no] = useState('');
    const [slmc_no, setSlmc_no] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit', name, email, contact_no, slmc_no,  password);

        const url = 'http://localhost:5000/register';
        const method = 'POST';
        const headers = {
            'Content-Type': 'application/json'
        }
        const body = JSON.stringify({name, email, contact_no, slmc_no ,password});

        fetch(url, {method, headers, body})
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.log('Error.', error));
    };

    return (
        <div>
            <div className="logo">
                <img src="../public/logo.png" alt="Logo" />
            </div>
            <div className="auth-form-container">
                <h2>Register</h2>
                <form className="register-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Full name</label>
                    <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
                    <label htmlFor="email">email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                    <label htmlFor="contact_no">Contact Number</label>
                    <input value={contact_no} onChange={(e) => setContact_no(e.target.value)}type="contact_no" placeholder="contact_no" id="contact_no" name="contact_no" />
                    <label htmlFor="slmc_no">SLMC Registration Number</label>
                    <input value={slmc_no} onChange={(e) => setSlmc_no(e.target.value)}type="slmc_no" placeholder="slmc_no" id="slmc_no" name="slmc_no" />
                    <label htmlFor="password">password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                    <button type="submit">Register</button>
                </form>
                <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
            </div>
        </div>
    )
}