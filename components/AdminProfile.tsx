import { useState } from "react";

const AdminProfile = ({ onClose }) => {
  const [currentRides, setCurrentRides] = useState(5); 
  const [numUsers, setNumUsers] = useState(100);
  const [profit, setProfit] = useState("Rs.5000"); 
  const [liveRides, setLiveRides] = useState([
    {
      timePackage: "1 hour",
      startTime: "10:00 AM",
      date: "2024-07-15",
      price: "Rs.20",
      rideNo: "001",
      duration: "1 hour",
    },
    // Add more rides as needed
  ]);

  const [newRide, setNewRide] = useState({
    timePackage: "",
    startTime: "",
    date: "",
    price: "",
    rideNo: "",
    duration: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRide((prev) => ({ ...prev, [name]: value }));
  };

  const createRide = () => {
    setLiveRides((prev) => [...prev, newRide]);
    setNewRide({
      timePackage: "",
      startTime: "",
      date: "",
      price: "",
      rideNo: "",
      duration: "",
    });
  };

  const removeRide = (rideNo) => {
    setLiveRides((prev) => prev.filter((ride) => ride.rideNo !== rideNo));
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl mx-4 h-3/4 overflow-y-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-black">Welcome Admin</h2>
        <div className="mb-4">
          <div className="text-lg mb-2"><span className="font-semibold">Name:</span> Aditi</div>
          <div className="text-lg mb-2"><span className="font-semibold">Email:</span> aaditi_be22@thapar.edu</div>
          <div className="text-lg mb-2"><span className="font-semibold">Password:</span> ********</div>
          <div className="text-lg mb-2"><span className="font-semibold">Phone Number:</span> 9817802066</div>
        </div>
        <div className="flex justify-between mb-12 gap-5 mt-12 ">
          <div className="bg-blue-100 p-4 rounded-lg text-center w-1/3">
            <div className="text-xl font-bold">{currentRides}</div>
            <div>Current Rides</div>
          </div>
          <div className="bg-green-100 p-4 rounded-lg text-center w-1/3">
            <div className="text-xl font-bold">{numUsers}</div>
            <div>No of Users</div>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg text-center w-1/3">
            <div className="text-xl font-bold">{profit}</div>
            <div>Profit</div>
          </div>
        </div>
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-4">Live Rides</h3>
          <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2">Time Package</th>
                <th className="px-4 py-2">Start Time</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Price</th>
                <th className="px-4 py-2">Ride No.</th>
                <th className="px-4 py-2">Duration</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {liveRides.map((ride, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-2">{ride.timePackage}</td>
                  <td className="px-4 py-2">{ride.startTime}</td>
                  <td className="px-4 py-2">{ride.date}</td>
                  <td className="px-4 py-2">{ride.price}</td>
                  <td className="px-4 py-2">{ride.rideNo}</td>
                  <td className="px-4 py-2">{ride.duration}</td>
                  <td className="px-4 py-2">
                    <button
                      className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600"
                      onClick={() => removeRide(ride.rideNo)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mb-6">
          <h3 className="text-2xl font-bold mb-4">Create Ride</h3>
          <form className="space-y-4">
            <div>
              <label className="block mb-2">Time Package:</label>
              <input
                type="text"
                name="timePackage"
                value={newRide.timePackage}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block mb-2">Start Time:</label>
              <input
                type="text"
                name="startTime"
                value={newRide.startTime}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block mb-2">Date:</label>
              <input
                type="date"
                name="date"
                value={newRide.date}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block mb-2">Price:</label>
              <input
                type="text"
                name="price"
                value={newRide.price}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block mb-2">Ride No:</label>
              <input
                type="text"
                name="rideNo"
                value={newRide.rideNo}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block mb-2">Duration:</label>
              <input
                type="text"
                name="duration"
                value={newRide.duration}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <button
              type="button"
              className="mt-4 w-full px-4 py-2 bg-blue-500 text-white text-lg rounded-md hover:bg-blue-600 transition duration-300"
              onClick={createRide}
            >
              Create Ride
            </button>
          </form>
        </div>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AdminProfile;
