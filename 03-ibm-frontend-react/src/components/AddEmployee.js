import axios from "axios";
import { useEffect, useState } from "react";


const AddEmployee = () => {
    const backendUrl = 'http://localhost:9090/emp/add-emp';
    const [empData, setEmpData] = useState({ firstName: '', email: '', aadhaar: '', salary: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (evt) => {
        setEmpData({ ...empData, [evt.target.name]: evt.target.value });
        setErrors({ ...errors, [evt.target.name]: '' });
    };

    
    const validateForm = () => {
        let isValid = true;
        const newErrors = {};

        if (!empData.firstName.trim()) {
            newErrors.firstName = "First name is required";
            isValid = false;
        }

        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(empData.email)) {
            newErrors.email = "Invalid email address";
            isValid = false;
        }

        if (!/^\d{12}$/.test(empData.aadhaar)) {
            newErrors.aadhaar = "Aadhaar must be a 12-digit number";
            isValid = false;
        }

        if (empData.salary <= 0 || isNaN(empData.salary)) {
            newErrors.salary = "Salary must be a positive number";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        if (validateForm()) {
            axios.post(backendUrl, empData)
                .then((resp) => {
                    alert(`${resp.data.firstName} with id ${resp.data.id} added successfully!`);
                    setEmpData({ firstName: '', email: '', aadhaar: '', salary: '' });
                })
                .catch(error => {
                    console.error("Error adding employee:", error);
                });
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Add Employee Component</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">First Name:</label>
                    <input type="text" id="firstName" name="firstName" value={empData.firstName} onChange={handleChange} className={`form-control ${errors.firstName && 'is-invalid'}`} placeholder="Enter first name" required autoFocus />
                    {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" id="email" name="email" value={empData.email} onChange={handleChange} className={`form-control ${errors.email && 'is-invalid'}`} placeholder="Enter email" />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="aadhaar" className="form-label">Aadhaar:</label>
                    <input type="number" id="aadhaar" name="aadhaar" value={empData.aadhaar} onChange={handleChange} className={`form-control ${errors.aadhaar && 'is-invalid'}`} placeholder="Enter aadhaar" />
                    {errors.aadhaar && <div className="invalid-feedback">{errors.aadhaar}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="salary" className="form-label">Salary:</label>
                    <input type="number" id="salary" name="salary" value={empData.salary} onChange={handleChange} className={`form-control ${errors.salary && 'is-invalid'}`} placeholder="Enter salary" />
                    {errors.salary && <div className="invalid-feedback">{errors.salary}</div>}
                </div>
                <button type="submit" className="btn btn-primary">Add Employee</button>
            </form>
        </div>
    );
};

export default AddEmployee;













// import axios from "axios";
// import { useState } from "react";

// const AddEmployee = () => {
//     const backendUrl = 'http://localhost:9090/emp/add-emp';
//     const [empData, setEmpData] = useState({ firstName: '', email: '', aadhaar: '', salary: '' });
//     const [errors, setErrors] = useState({});

//     const handleChange = (evt) => {
//         setEmpData({ ...empData, [evt.target.name]: evt.target.value });
//         setErrors({ ...errors, [evt.target.name]: '' });
//     };

//     const validateForm = () => {
//         let isValid = true;
//         const newErrors = {};

//         if (!empData.firstName.trim()) {
//             newErrors.firstName = "First name is required";
//             isValid = false;
//         }

//         if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(empData.email)) {
//             newErrors.email = "Invalid email address";
//             isValid = false;
//         }

//         if (!/^\d{12}$/.test(empData.aadhaar)) {
//             newErrors.aadhaar = "Aadhaar must be a 12-digit number";
//             isValid = false;
//         }

//         if (empData.salary <= 0 || isNaN(empData.salary)) {
//             newErrors.salary = "Salary must be a positive number";
//             isValid = false;
//         }

//         setErrors(newErrors);
//         return isValid;
//     };

//     const handleSubmit = (evt) => {
//         evt.preventDefault();
//         if (validateForm()) {
//             axios.post(backendUrl, empData)
//                 .then((resp) => {
//                     alert(`${resp.data.firstName} with id ${resp.data.id} added successfully!`);
//                     setEmpData({ firstName: '', email: '', aadhaar: '', salary: '' });
//                 })
//                 .catch(error => {
//                     console.error("Error adding employee:", error);
//                 });
//         }
//     };

//     return (
//         <>
//             <h1>Add Employee Component</h1>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="firstName">First Name:</label>
//                 <input type="text" id="firstName" name="firstName" value={empData.firstName} onChange={handleChange} placeholder="Enter first name" required autoFocus />
//                 {errors.firstName && <span className="error">{errors.firstName}</span>}
//                 <br />
//                 <label htmlFor="email">Email:</label>
//                 <input type="email" id="email" name="email" value={empData.email} onChange={handleChange} placeholder="Enter email" />
//                 {errors.email && <span className="error">{errors.email}</span>}
//                 <br />
//                 <label htmlFor="aadhaar">Aadhaar:</label>
//                 <input type="number" id="aadhaar" name="aadhaar" value={empData.aadhaar} onChange={handleChange} placeholder="Enter aadhaar" />
//                 {errors.aadhaar && <span className="error">{errors.aadhaar}</span>}
//                 <br />
//                 <label htmlFor="salary">Salary:</label>
//                 <input type="number" id="salary" name="salary" value={empData.salary} onChange={handleChange} placeholder="Enter salary" />
//                 {errors.salary && <span className="error">{errors.salary}</span>}
//                 <br />
//                 <input type="submit" value="Add Employee" />
//             </form>
//         </>
//     );
// };

// export default AddEmployee;
