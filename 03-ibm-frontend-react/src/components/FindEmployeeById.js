import React, { useState } from 'react';
import UserService from '../services/UserService';

const FindEmployeeById = () => {
    const [id, setId] = useState('');
    const [employee, setEmployee] = useState(null);
    const [error, setError] = useState('');

    const handleChange = (evt) => {
        setId(evt.target.value);
        setError('');
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (id.trim()) {
            UserService.findEmployeeById(id)
                .then((employeeData) => {
                    setEmployee(employeeData);
                })
                .catch((error) => {
                    setError('Employee not found');
                    setEmployee(null);
                });
        } else {
            setError('Please enter an employee ID');
        }
    };

    return (
        <>
            <h1>Find Employee by ID</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="id">Employee ID:</label>
                <input type="text" id="id" name="id" value={id} onChange={handleChange} placeholder="Enter employee ID" required autoFocus />
                {error && <span className="error">{error}</span>}
                <br />
                <input type="submit" value="Find Employee" />
            </form>
            {employee && (
                <div>
                    <h2>Employee Details</h2>
                    <p><strong>Name:</strong> {employee.name}</p>
                    <p><strong>Email:</strong> {employee.email}</p>
                    {/* Add more details as needed */}
                </div>
            )}
        </>
    );
};

export default FindEmployeeById;
