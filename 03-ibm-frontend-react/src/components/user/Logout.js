import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { userLogout } from '../../redux/UserSlice';
import { useState } from "react";

const Logout = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [afterLogout, setAfterLogout] = useState('');

    const logoutSubmit = () => {
        console.log('logoutSubmit');
        setAfterLogout(`You've logged out successfully!`);
        setTimeout(() => {
            dispatch(userLogout());
            navigate('/login');
        }, 2000);

    };

    return (
        <>
    <div className="d-flex p-2 justify-content-center">
        <h1 className="text-center fs-9 fw-bold bg-danger bg-gradient bg-opacity-15 text-white border rounded-2 d-inline p-2 border-dark border-2 shadow-lg">Logout Component</h1>
    </div>

    <div className="d-flex flex-column mt-5 mb-5 align-items-center gap-4">
        <button onClick={logoutSubmit} className="btn btn-danger w-40">Logout</button>
        {afterLogout && <p>{afterLogout}</p>}
    </div>
</>

    );
};

export default Logout;


