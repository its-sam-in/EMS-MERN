
const Home = () => {

    return (
        <>
        <div className="d-flex justify-content-center flex-column mb-3 align-items-center p-3">

            <h1 className= 'text-center fs-9 fw-bold bg-danger bg-gradient bg-opacity-15 text-white border rounded-2 d-inline p-2 border-dark border-2 shadow-lg'>Home Component</h1>
            {/* <img src="404.png"></img> */}

            <div className="fs-1 fw-bold text-danger mt-5">
                404 PAGE NOT FOUND !
            </div>

        </div>
        </>
    );
};

export default Home;










// import { Link } from "react-router-dom";

// const Home = () => {
//     const backgroundImageIbm = 'https://e1.pxfuel.com/desktop-wallpaper/648/58/desktop-wallpaper-6-ibm-imb.jpg';

//     return (
//         <>
//             <div
//                 style={{
//                     backgroundImage: `url(${backgroundImageIbm})`,
//                     backgroundSize: 'cover',
//                     backgroundColor: 'black',
//                     display: 'flex',
//                     minHeight: "100vh",
//                     alignItems: 'center',
//                     justifyContent: 'right',
//                 }}
//             >
//                 <div style={{ color: 'white' }}>
//                     <h1>IBM React App</h1>
//                     <Link style={{ textDecoration: 'none' }} to='/login'>Login to continue...</Link>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Home;


