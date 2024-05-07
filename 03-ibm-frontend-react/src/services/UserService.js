// UserService 

import axios from 'axios';

const BASE_URL = 'http://localhost:2000';
const Spring_URL = 'http://localhost:9090/emp'

const UserService = {
    registerUser: async (userData) => {
        try {
            const response = await axios.post(`${BASE_URL}/register`, userData);
            return response.data;
        } catch (error) {
            console.log(error);
            // return error;
            throw new Error(error);
        }
    },

    loginUser: async (credentials) => {
        try {
            const response = await axios.post(`${BASE_URL}/login`, credentials);
            console.log(response);
            return response.data;
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }
    },

    updateUserProfile: async (updatedData, token) => {
        console.log(updatedData);
        try {
            const response = await axios.put(`${BASE_URL}/users/${updatedData._id}`, updatedData, {
                headers: { authorization: `Bearer ${token}` }
            });
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log(error);
            return error;
        }
    },

    findEmployeeById: (id) => {
        return new Promise((resolve, reject) => {
            axios.get(`${BASE_URL}/get-emp-by-id/${id}`)
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    console.error("Error finding employee:", error);
                    reject(error);
                });
        });
    },



};

export default UserService;










// UserService  , using promise .then instead of async and await 


// import axios from 'axios';

// const BASE_URL = 'http://localhost:2000';

// const UserService = {
//         registerUser: (userData) => {
//             return new Promise((resolve, reject) => {
//                 axios.post(`${BASE_URL}/register`, userData)
//                     .then((response) => {
//                         resolve(response.data);
//                     })
//                     .catch((error) => {
//                         console.log(error);
//                         reject(error);
//                     });
//             });
//         }
//     };
    

  


// export default UserService;

