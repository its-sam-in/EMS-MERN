import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const NavigationMenu = () => {

    const loginStatus = useSelector( a => a.user.loginStatus);


    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg p-3 mb-5 bg-body">
            <div className="container-fluid">
                <Link to={'/'} className="navbar-brand fs-3">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to={'/'} className="nav-link fs-4">Home</Link>
                        </li>
                        {loginStatus ? (
                            <>
                                <li className="nav-item">
                                    <Link to={'/emp'} className="nav-link fs-4">Employee</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/parent'} className="nav-link fs-4">Parent</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/logout'} className="nav-link fs-4">Logout</Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link to={'/register'} className="nav-link fs-4">Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/login'} className="nav-link fs-4">Login</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavigationMenu;




// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

// const Menubar = () => {

//     const loginStatus = useSelector(store => store.user.loginStatus);

//     if (loginStatus) {
//         return (
//             <>
//                 <ul>
//                     <li> <Link to={'/'}>Home</Link> </li>
//                     <li> <Link to={'/emp'}>Employee</Link> </li>
//                     <li> <Link to={'/parent'}>Parent</Link> </li>
//                     <li> <Link to={'/logout'}>Logout</Link> </li>
//                 </ul>
//             </>
//         );
//     }
//     else {
//         return (
//             <>
//                 <ul>
//                     <li> <Link to={'/'}>Home</Link> </li>
//                     <li> <Link to={'/register'}>Register</Link> </li>
//                     <li> <Link to={'/login'}>Login</Link> </li>
//                 </ul>
//             </>
//         );
//     }
// };

// export default Menubar;
