import Link from 'next/link';

const ProfilePage = ({ onClose }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-center text-black">Account</h2>
      <div className="space-y-4">
        <div className="text-lg">
          <span className="font-semibold">Name:</span> Aditi
        </div>
        <div className="text-lg">
          <span className="font-semibold">Email:</span> aaditi_be22@thapar.edu
        </div>
        <div className="text-lg">
          <span className="font-semibold">Password:</span> ********
        </div>
        <div className="text-lg">
          <span className="font-semibold">Phone Number:</span> 9817802066
        </div>
        <div className="text-lg">
          <span className="font-semibold">Address:</span> Thapar University
        </div>
        <div className="text-lg">
          <span className="font-semibold">Date of Birth:</span> 17/2/2004
        </div>
        <div className="text-lg">
          <span className="font-semibold">Gender:</span> Female
        </div>
        <div className="text-lg">
          <span className="font-semibold">License No:</span> DL-1420110012345
        </div>
      </div>
      <Link href="/MyRide">
        <button
          className="mt-6 w-full px-4 py-2 bg-blue-500 text-white text-lg rounded-md hover:bg-blue-600 transition duration-300"
          onClick={onClose} 
        >
          Your Rides
        </button>
      </Link>
    </div>
  );
};

export default ProfilePage;
