import React, { useState } from 'react';

const LoginSignupPopup = ({ onClose, onLoginSignupSuccess }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
    address: '',
    dob: '',
    gender: '',
    licenseNo: '',
    licenseImage: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'licenseImage') {
      setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle login or signup
    // If login/signup is successful, call onLoginSignupSuccess()
    onLoginSignupSuccess();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg w-1/2">
        <h2 className="bold-20">{isSignup ? 'Signup' : 'Login'}</h2>
        <form onSubmit={handleSubmit} className="mt-4">
          {isSignup && (
            <>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 mb-2 border rounded"
              />
              <input
                type="text"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full p-2 mb-2 border rounded"
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full p-2 mb-2 border rounded"
              />
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
                className="w-full p-2 mb-2 border rounded"
              />
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="w-full p-2 mb-2 border rounded"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <input
                type="text"
                name="licenseNo"
                placeholder="License No"
                value={formData.licenseNo}
                onChange={handleChange}
                required
                className="w-full p-2 mb-2 border rounded"
              />
              <label className="block mb-2">
                Upload License Image
                <input
                  type="file"
                  name="licenseImage"
                  onChange={handleChange}
                  required
                  className="w-full p-2 mb-2 border rounded"
                />
              </label>
            </>
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 mb-2 border rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-2 mb-2 border rounded"
          />
          <button
            type="submit"
            className="px-4 py-2 mt-4 bg-blue-500 text-white rounded w-full"
          >
            {isSignup ? 'Signup' : 'Login'}
          </button>
        </form>
        <div className="flex justify-between mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-black text-white rounded"
          >
            Close
          </button>
          <button
            onClick={() => setIsSignup((prev) => !prev)}
            className="px-4 py-2 text-blue-500 underline"
          >
            {isSignup ? 'Already have an account? Login' : "Don't have an account? Signup"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginSignupPopup;
