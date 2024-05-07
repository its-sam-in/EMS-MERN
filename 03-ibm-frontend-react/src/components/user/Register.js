import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../../services/UserService";
import { useDispatch } from "react-redux";
import { userRegister } from "../../redux/UserSlice";

const Register = () => {

    const [registerData, setRegisterData] = useState({ username: '', password: '' });
    const [afterRegisterMessage, setAfterRegisterMessage] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (evt) => {
        console.log(evt.target.name);
        console.log(evt.target.value);
        setRegisterData({
            ...registerData,
            [evt.target.name]: evt.target.value
        });
    };

    const handleRegisterSubmit = async (evt) => {
        evt.preventDefault();
        console.log(registerData);
        UserService.registerUser(registerData)
            .then((response) => {
                console.log(response);
                dispatch(userRegister(response));
                setRegisterData({ username: '', password: '' });
                setAfterRegisterMessage(`Hi ${response.username}! You've registered successfully!`);
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
            })
            .catch((error) => {
                console.log(error);
                setAfterRegisterMessage(`User Already Registered!`);
            });

    };

    return (
        <>
        <div className="d-flex p-2 justify-content-center">
            <h1 className="text-center fs-9 fw-bold bg-success bg-gradient bg-opacity-20 text-white border rounded-2 border-opacity-50 d-inline p-2 border-primary border-2 shadow-lg">Register Component</h1>
        </div>
    
        <div className="d-flex flex-column mt-5 mb-5 align-items-center gap-4">
            <p className="text-center fs-1 fw-bold">Register here</p>
            <form onSubmit={handleRegisterSubmit} className="d-flex flex-column gap-3 align-items-center">
                <input
                    type="text"
                    name="username"
                    value={registerData.username}
                    onChange={handleChange}
                    autoFocus
                    required
                    className="form-control w-100 border-2 shadow-sm"
                    placeholder="Enter username"
                />
                <input
                    type="password"
                    name="password"
                    value={registerData.password}
                    onChange={handleChange}
                    required
                    className="form-control w-100 border-2 shadow-sm"
                    placeholder="Enter password"
                />
                <button type="submit" className="btn btn-success w-50">Register</button>
            </form>
            {afterRegisterMessage && <p>{afterRegisterMessage}</p>}
            <p>Already registered? <Link to={'/login'} className="text-success">Login</Link></p>
        </div>
    </>
    
    );
};
export default Register;