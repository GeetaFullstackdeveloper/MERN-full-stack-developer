// CreateUser.jsx
import React, { useState } from 'react';
import axios from 'axios';

function CreateUser() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');

    const Submit = (e) => {
        e.preventDefault();

        // Sending data to the server
        axios.post("http://localhost:3001/api/create-user", { name, email, age })
            .then(result => {
                console.log(result);
                // Optionally reset the form after submitting
                setName('');
                setEmail('');
                setAge('');
            })
            .catch(err => {
                console.error("Error:", err);
                // Display a user-friendly message if a network error occurs
                if (err.code === "ERR_NETWORK") {
                    alert("Network error: Unable to reach the server. Please check your connection or server status.");
                }
            });
    };

    return (
        <div className="container mt-5">
            <h2>Create User</h2>
            <form id="userForm" onSubmit={Submit}>
                
                <div className="mb-3">
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        placeholder="name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        placeholder="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="age">Age</label>
                    <input 
                        type="number" 
                        placeholder="age" 
                        value={age} 
                        onChange={(e) => setAge(e.target.value)} 
                    />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default CreateUser;
