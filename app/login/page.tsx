// import { useState } from 'react';

// type LoginSignupModalProps = {
//   isOpen: boolean;
//   onClose: () => void;
// };

// const LoginSignupModal = ({ isOpen, onClose }: LoginSignupModalProps) => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     confirmPassword: '',
//     licenseNumber: '',
//     licenseImage: null,
//   });

//   const toggleForm = () => {
//     setIsLogin(!isLogin);
//   };

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === 'licenseImage') {
//       setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
//     } else {
//       setFormData((prevData) => ({ ...prevData, [name]: value }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add logic to handle login or signup
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//       <div className="bg-white p-6 rounded-md relative w-full max-w-md mx-auto">
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
//         >
//           &times;
//         </button>
//         {isLogin ? (
//           <div>
//             <h2 className="text-2xl font-bold mb-4">Login</h2>
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full p-2 mb-2 border rounded"
//               required
//             />
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full p-2 mb-4 border rounded"
//               required
//             />
//             <button className="w-full bg-blue-500 text-white p-2 rounded">Login</button>
//             <p className="mt-4 text-center">
//               Don’t have an account?{' '}
//               <button onClick={toggleForm} className="text-blue-500 hover:underline">
//                 Sign Up
//               </button>
//             </p>
//           </div>
//         ) : (
//           <div>
//             <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
//             <form onSubmit={handleSubmit}>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full p-2 mb-2 border rounded"
//                 required
//               />
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Set Password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full p-2 mb-2 border rounded"
//                 required
//               />
//               <input
//                 type="password"
//                 name="confirmPassword"
//                 placeholder="Confirm Password"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 className="w-full p-2 mb-4 border rounded"
//                 required
//               />
//               <input
//                 type="text"
//                 name="licenseNumber"
//                 placeholder="License Number (Optional)"
//                 value={formData.licenseNumber}
//                 onChange={handleChange}
//                 className="w-full p-2 mb-2 border rounded"
//               />
//               <label className="block mb-4">
//                 <span className="text-gray-700">Upload License Image (Optional)</span>
//                 <input
//                   type="file"
//                   name="licenseImage"
//                   onChange={handleChange}
//                   className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
//                 />
//               </label>
//               <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">
//                 Sign Up
//               </button>
//             </form>
//             <p className="mt-4 text-center">
//               Already have an account?{' '}
//               <button onClick={toggleForm} className="text-blue-500 hover:underline">
//                 Login
//               </button>
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LoginSignupModal;



// import { useState } from "react";

// type LoginSignupModalProps = {
//   isOpen: boolean;
//   onClose: () => void;
//   onSuccess: () => void;
// };

// const LoginSignupModal = ({ isOpen, onClose, onSuccess }: LoginSignupModalProps) => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     confirmPassword: '',
//     licenseNumber: '',
//     licenseImage: null,
//   });

//   const toggleForm = () => {
//     setIsLogin(!isLogin);
//   };

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === 'licenseImage') {
//       setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
//     } else {
//       setFormData((prevData) => ({ ...prevData, [name]: value }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add logic to handle login or signup
//     onSuccess();
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//       <div className="bg-white p-6 rounded-md relative w-full max-w-md mx-auto">
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
//         >
//           &times;
//         </button>
//         {isLogin ? (
//           <div>
//             <h2 className="text-2xl font-bold mb-4">Login</h2>
//             <form onSubmit={handleSubmit}>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full p-2 mb-2 border rounded"
//                 required
//               />
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full p-2 mb-4 border rounded"
//                 required
//               />
//               <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
//                 Login
//               </button>
//             </form>
//             <p className="mt-4 text-center">
//               Don’t have an account?{' '}
//               <button onClick={toggleForm} className="text-blue-500 hover:underline">
//                 Sign Up
//               </button>
//             </p>
//           </div>
//         ) : (
//           <div>
//             <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
//             <form onSubmit={handleSubmit}>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full p-2 mb-2 border rounded"
//                 required
//               />
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Set Password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full p-2 mb-2 border rounded"
//                 required
//               />
//               <input
//                 type="password"
//                 name="confirmPassword"
//                 placeholder="Confirm Password"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 className="w-full p-2 mb-4 border rounded"
//                 required
//               />
//               <input
//                 type="text"
//                 name="licenseNumber"
//                 placeholder="License Number"
//                 value={formData.licenseNumber}
//                 onChange={handleChange}
//                 className="w-full p-2 mb-2 border rounded"
//                 required
//               />
//               <input
//                 type="file"
//                 name="licenseImage"
//                 onChange={handleChange}
//                 className="w-full p-2 mb-4 border rounded"
//                 required
//               />
//               <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
//                 Sign Up
//               </button>
//             </form>
//             <p className="mt-4 text-center">
//               Already have an account?{' '}
//               <button onClick={toggleForm} className="text-blue-500 hover:underline">
//                 Login
//               </button>
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LoginSignupModal;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import React, { useState } from "react";
// import axios from 'axios';

// type LoginSignupModalProps = {
//   isOpen: boolean;
//   onClose: () => void;
//   onSuccess: () => void;
// };

// const LoginSignupModal = ({ isOpen, onClose, onSuccess }: LoginSignupModalProps) => {
//   const [isLogin, setIsLogin] = useState(true);
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//     confirmPassword: "",
//     licenseNumber: "",
//     licenseImage: null,
//   });

//   const toggleForm = () => {
//     setIsLogin(!isLogin);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
//     const { name, value, files } = e.target;
//     if (name === "licenseImage") {
//       setFormData((prevData) => ({ ...prevData, [name]: files ? files[0] : null }));
//     } else {
//       setFormData((prevData) => ({ ...prevData, [name]: value }));
//     }
//   };
  
//   // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//   //   e.preventDefault();
//   //   let data = JSON.stringify({
//   //     "email": "abcd@gmail.com",
//   //     "password": "123456"
//   //   });
    
//   //   let config = {
//   //     method: 'post',
//   //     maxBodyLength: Infinity,
//   //     url: 'localhost:5000/api/auth/login',
//   //     headers: { 
//   //       'Content-Type': 'application/json'
//   //     },
//   //     data : data
//   //   };
    
//   //   axios.request(config)
//   //   .then((response) => {
//   //     console.log(JSON.stringify(response.data));
//   //   })
//   //   .catch((error) => {
//   //     console.log(error);
//   //   });
//   //   onSuccess();
//   // };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

  
//     const { email, password, confirmPassword, licenseNumber, licenseImage } = formData;

   
//     const url = isLogin ? 'http://localhost:5000/api/auth/login' : 'http://localhost:5000/api/auth/signup';
 
//     if (!isLogin && password !== confirmPassword) {
//       alert('Passwords do not match');
//       return;
//     }

//   // const result = await signIn("credentials"),
//   // {
//   //   username:username.current,
//   //   password:password.current,
//   // }
//     const data = isLogin ? { email, password } : {
//       email:email,
//       password:password,
//     };


//     const config = {
//       method: 'post',
//       maxBodyLength: Infinity,
//       url: url,
//       headers: { 
//         'Content-Type': 'application/json'
//       },
//       data: JSON.stringify(data)
//     };

//     axios.request(config)
//       .then((response) => {
//         console.log(response.data);
//         onSuccess();
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };
  

//   const handleGoogleSignIn = () => {
//     // Implement Google sign-in logic here
//     // For demonstration purposes, we'll just simulate a successful login after 1 second
//     setTimeout(() => {
//       onSuccess();
//     }, 1000);
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//       <div className="bg-white p-6 rounded-md relative w-full max-w-md mx-auto">
//         <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-gray-900">
//           &times;
//         </button>
//         {isLogin ? (
//           <div>
//             <h2 className="text-2xl font-bold mb-4">Login</h2>
//             <form onSubmit={handleSubmit}>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full p-2 mb-2 border rounded"
//                 required
//               />
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full p-2 mb-4 border rounded"
//                 required
//               />
//          <div className="flex justify-center">
//   <button type="submit" className=" w-3/4 bg-blue-500 text-white px-2 py-1 rounded">
//     Login
//   </button>
// </div>
//             </form>
//             <p className="mt-4 text-center">
//               Don’t have an account?{" "}
//               <button onClick={toggleForm} className="text-blue-500 hover:underline">
//                 Sign Up
//               </button>
//             </p>
//             <div className="mt-4 text-center">
//               Or continue with Google
//               <button onClick={handleGoogleSignIn} className="ml-2 p-2 rounded">
//                 <img src="/google.png" alt="Google Sign-In" className="w-6 h-6 inline-block" />
//               </button>
//             </div>
//           </div>
//         ) : (
//           <div>
//             <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
//             <form onSubmit={handleSubmit}>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full p-2 mb-2 border rounded"
//                 required
//               />
//               <input
//                 type="password"
//                 name="password"
//                 placeholder="Set Password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full p-2 mb-2 border rounded"
//                 required
//               />
//               <input
//                 type="password"
//                 name="confirmPassword"
//                 placeholder="Confirm Password"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 className="w-full p-2 mb-4 border rounded"
//                 required
//               />
//               <input
//                 type="text"
//                 name="licenseNumber"
//                 placeholder="License Number"
//                 value={formData.licenseNumber}
//                 onChange={handleChange}
//                 className="w-full p-2 mb-2 border rounded"
//                 required
//               />
//               <input
//                 type="file"
//                 name="licenseImage"
//                 onChange={handleChange}
//                 className="w-full p-2 mb-4 border rounded"
//                 required
//               />
//               <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
//                 Sign Up
//               </button>
//             </form>
//             <p className="mt-4 text-center">
//               Already have an account?{" "}
//               <button onClick={toggleForm} className="text-blue-500 hover:underline">
//                 Login
//               </button>
//             </p>
//             <div className="mt-4 text-center">
//               Or continue with Google
//               <button onClick={handleGoogleSignIn} className="ml-2 p-2 rounded">
//                 <img src="/google.png" alt="Google Sign-In" className="w-6 h-6 inline-block" />
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LoginSignupModal;

import React, { useState } from "react";
import axios from 'axios';

type LoginSignupModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (email: string) => void;
};

const LoginSignupModal = ({ isOpen, onClose, onSuccess }: LoginSignupModalProps) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    licenseNumber: "",
    licenseImage: null,
  });

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, files } = e.target;
    if (name === "licenseImage") {
      setFormData((prevData) => ({ ...prevData, [name]: files ? files[0] : null }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password, confirmPassword } = formData;

    const url = isLogin ? 'http://localhost:5000/api/auth/login' : 'http://localhost:5000/api/auth/signup';

    if (!isLogin && password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const data = isLogin ? { email, password } : { email, password };

    try {

      const response = await axios.post(url, data, {
      headers: { 'Content-Type': 'application/json' }
      });
      console.log(response);
      // const curr=await axios.post('http://localhost:5000/api/auth/getuser',
      //   {
      //     headers: {
      //         'Content-Type': 'application/json',
      //         'auth-token': response.data.authtoken
      //     },
      //   }
        
      // )
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
myHeaders.append("auth-token" ,response.data.authtoken)
const requestOptions = {
  method: "POST",
  headers: myHeaders,
 
  redirect: "follow"
};
const res = await fetch("http://localhost:5000/api/auth/getuser", requestOptions)
      // console.log(curr);
      console.log(await res.json());
      const mail=await res.json();
      

      // Assuming the response contains the user's email
      const userEmail = response.data.email; 
      localStorage.setItem("currentEmail",userEmail); 
      console.log()
      onSuccess(userEmail); // Pass email to onSuccess

    } catch (error) {
      console.error(error);
    }
  };

  const handleGoogleSignIn = () => {
    setTimeout(() => {
      onSuccess("user@example.com"); // Pass a dummy email for Google sign-in
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-md relative w-full max-w-md mx-auto">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-gray-900">
          &times;
        </button>
        {isLogin ? (
          <div>
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 mb-2 border rounded"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 mb-4 border rounded"
                required
              />
              <div className="flex justify-center">
                <button type="submit" className="w-3/4 bg-blue-500 text-white px-2 py-1 rounded">
                  Login
                </button>
              </div>
            </form>
            <p className="mt-4 text-center">
              Don’t have an account?{" "}
              <button onClick={toggleForm} className="text-blue-500 hover:underline">
                Sign Up
              </button>
            </p>
            <div className="mt-4 text-center">
              Or continue with Google
              <button onClick={handleGoogleSignIn} className="ml-2 p-2 rounded">
                <img src="/google.png" alt="Google Sign-In" className="w-6 h-6 inline-block" />
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 mb-2 border rounded"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Set Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 mb-2 border rounded"
                required
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full p-2 mb-4 border rounded"
                required
              />
              <input
                type="text"
                name="licenseNumber"
                placeholder="License Number"
                value={formData.licenseNumber}
                onChange={handleChange}
                className="w-full p-2 mb-2 border rounded"
                required
              />
              <input
                type="file"
                name="licenseImage"
                onChange={handleChange}
                className="w-full p-2 mb-4 border rounded"
                required
              />
              <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
                Sign Up
              </button>
            </form>
            <p className="mt-4 text-center">
              Already have an account?{" "}
              <button onClick={toggleForm} className="text-blue-500 hover:underline">
                Login
              </button>
            </p>
            <div className="mt-4 text-center">
              Or continue with Google
              <button onClick={handleGoogleSignIn} className="ml-2 p-2 rounded">
                <img src="/google.png" alt="Google Sign-In" className="w-6 h-6 inline-block" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginSignupModal;

