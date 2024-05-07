import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserService from "../../services/UserService";
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/UserSlice";

const Login = () => {

    const [loginData, setLoginData] = useState({ username: '', password: '' });
    const [afterSubmit, setAfterSubmit] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (evt) => {
        console.log(evt.target.name);
        console.log(evt.target.value);
        setLoginData({
            ...loginData,
            [evt.target.name]: evt.target.value
        });
    };

    const handleLoginSubmit = (evt) => {
        evt.preventDefault();
        console.log(loginData);
        UserService.loginUser(loginData)
            .then((response) => {
                console.log(response);
                setAfterSubmit(`Hi ${loginData.username}! You've logged in successfully!`);
                setTimeout(() => {
                    setLoginData({ username: '', password: '' });
                    dispatch(userLogin(response));
                    navigate('/profile');
                }, 2000);
            })
            .catch((error) => {
                console.log(error);
                setLoginData({ username: '', password: '' });
                setAfterSubmit(`Invalid credentials!`);
            });
    };

    return (
        <>
            <div className="d-flex p-2 justify-content-center">
        <h1 className="text-center fs-9 fw-bold bg-info bg-gradient bg-opacity-20 text-white border rounded-2 border-opacity-50 d-inline p-2 border-primary border-2 shadow-lg">Login Component</h1>
    </div>

    <div className="d-flex flex-column mt-5 mb-5 align-items-center gap-4">
        <p className="text-center fs-1 fw-bold ">Login here</p>
        <form onSubmit={handleLoginSubmit} className="d-flex flex-column gap-3 align-items-center">
            <input
                type="text"
                name="username"
                value={loginData.username}
                onChange={handleChange}
                autoFocus
                required
                className="form-control w-100 border-2 shadow-sm"
                placeholder="Enter username"
            />
            <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                required
                className="form-control w-100 border-2 shadow-sm"
                placeholder="Enter password"
            />
            <button type="submit" className="btn btn-primary w-50">Login</button>
        </form>
        {afterSubmit && <p>{afterSubmit}</p>}
        <p>Not yet registered? <Link to={'/register'}>Register</Link></p>
    </div>
        </>
    );
};
export default Login;