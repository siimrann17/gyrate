// "use client";

// import { NAV_LINKS } from "@/constants";
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";
// import Button from "./Button";
// import LoginSignup from "../components/LoginSignup";

// const Navbar = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <nav className="flex justify-between items-center max-w-7xl mx-auto px-4 py-5 bg-blue-mainblue">
//       <Link href="/">
//         <Image
//           src="/gyrateLogo.jpeg"
//           alt="logo"
//           width={74}
//           height={29}
//           className="rounded-full"
//         />
//       </Link>

//       <ul className="hidden lg:flex gap-12">
//         {NAV_LINKS.map((link) => (
//           <li key={link.key}>
//             <Link
//               href={link.href}
//               className="text-gray-50 cursor-pointer transition-all hover:text-blue-dark hover:font-bold"
//             >
//               {link.label}
//             </Link>
//           </li>
//         ))}
//       </ul>

//       <div className="flex items-center gap-4">
//         <Button
//           type="button"
//           title="Login / Signup"
//           icon="/user.svg"
//           variant="btn_dark_green"
//           className="block px-2 py-1.5 text-sm"
//           onClick={openModal}
//         />
//         <div className="relative">
//           <div
//             className="bg-blue-500 text-white px-4 py-1 cursor-pointer"
//             onClick={toggleDropdown}
//             style={{ borderRadius: "15px" }}
//           >
//             <button type="button" className="flex items-center">
//               <b>Gyropod</b>
//               <svg
//                 className={`w-4 h-4 ml-2 transition-transform ${
//                   dropdownOpen ? "rotate-180" : ""
//                 }`}
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M19 9l-7 7-7-7"
//                 />
//               </svg>
//             </button>
//           </div>
//           {dropdownOpen && (
//             <ul className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-10">
//               {["Gyropod 1"
//               // , "Site 2", "Site 3"
//             ].map((site, index) => (
//                 <li
//                   key={index}
//                   className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                 >
//                   {site}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       </div>

//       <Image
//         src="/menu.svg"
//         alt="menu"
//         width={32}
//         height={32}
//         className="inline-block cursor-pointer lg:hidden"
//       />

//       {/* Include the modal component */}
//       <LoginSignup isOpen={isModalOpen} onClose={closeModal} />
//     </nav>
//   );
// };

// export default Navbar;

// "use client";

// import { NAV_LINKS } from "@/constants";
// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";
// import Button from "./Button";
// import LoginSignup from "./LoginSignup";

// const Navbar = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleLoginSignupSuccess = () => {
//     setIsLoggedIn(true);
//     closeModal();
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//   };

//   return (
//     <nav className="flex justify-between items-center max-w-7xl mx-auto px-4 py-5 bg-blue-mainblue">
//       <Link href="/">
//         <Image
//           src="/gyrateLogo.jpeg"
//           alt="logo"
//           width={74}
//           height={29}
//           className="rounded-full"
//         />
//       </Link>

//       <ul className="hidden lg:flex gap-12">
//         {NAV_LINKS.map((link) => (
//           <li key={link.key}>
//             <Link
//               href={link.href}
//               className="text-gray-50 cursor-pointer transition-all hover:text-blue-dark hover:font-bold"
//             >
//               {link.label}
//             </Link>
//           </li>
//         ))}
//       </ul>

//       <div className="flex items-center gap-4">
//         {isLoggedIn ? (
//           <>
//             <Button
//               type="button"
//               title="My Rides"
//               variant="btn_dark_green"
//               className="block px-2 py-1.5 text-sm"
//               onClick={() => console.log("My Rides")}
//             />
//             <Button
//               type="button"
//               title="Logout"
//               variant="btn_dark_green"
//               className="block px-2 py-1.5 text-sm"
//               onClick={handleLogout}
//             />
//             <Image
//               src="/user.svg"
//               alt="User Profile"
//               width={32}
//               height={32}
//               className="inline-block cursor-pointer"
//             />
//           </>
//         ) : (
//           <Button
//             type="button"
//             title="Login / Signup"
//             icon="/user.svg"
//             variant="btn_dark_green"
//             className="block px-2 py-1.5 text-sm"
//             onClick={openModal}
//           />
//         )}
//         <div className="relative">
//           <div
//             className="bg-blue-500 text-white px-4 py-1 cursor-pointer"
//             onClick={toggleDropdown}
//             style={{ borderRadius: "15px" }}
//           >
//             <button type="button" className="flex items-center">
//               <b>Gyropod</b>
//               <svg
//                 className={`w-4 h-4 ml-2 transition-transform ${
//                   dropdownOpen ? "rotate-180" : ""
//                 }`}
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M19 9l-7 7-7-7"
//                 />
//               </svg>
//             </button>
//           </div>
//           {dropdownOpen && (
//             <ul className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-10">
//               {["Gyropod 1"
//               // , "Site 2", "Site 3"
//             ].map((site, index) => (
//                 <li
//                   key={index}
//                   className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                 >
//                   {site}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       </div>

//       <Image
//         src="/menu.svg"
//         alt="menu"
//         width={32}
//         height={32}
//         className="inline-block cursor-pointer lg:hidden"
//       />

//       {/* Include the modal component */}
//       <LoginSignup isOpen={isModalOpen} onClose={closeModal} onSuccess={handleLoginSignupSuccess} />
//     </nav>
//   );
// };

// export default Navbar;



"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "./Button";
import LoginSignup from "./LoginSignup";
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLoginSignupSuccess = () => {
    setIsLoggedIn(true);
    closeModal();
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  const handleRedirect = () => {
    router.push('/MyRide'); 
  };

  return (
    <nav className="flex justify-between items-center max-w-7xl mx-auto px-4 py-5 bg-blue-mainblue">
      <Link href="/">
        <Image
          src="/gyrateLogo.jpeg"
          alt="logo"
          width={74}
          height={29}
          className="rounded-full"
        />
      </Link>

      <ul className="hidden lg:flex gap-12">
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <Link
              href={link.href}
              className="text-gray-50 cursor-pointer transition-all hover:text-blue-dark hover:font-bold"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        {/* Gyropod Button Always Visible */}
        <div className="relative">
          <div
            className="bg-blue-500 text-white px-4 py-1 cursor-pointer"
            onClick={toggleDropdown}
            style={{ borderRadius: "15px" }}
          >
            <button type="button" className="flex items-center">
              <b>Gyropod</b>
              <svg
                className={`w-4 h-4 ml-2 transition-transform ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
          {dropdownOpen && (
            <ul className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-10">
              {["Gyropod 1"
              // , "Site 2", "Site 3"
              ].map((site, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  {site}
                </li>
              ))}
            </ul>
          )}
        </div>

        {isLoggedIn ? (
          <>
            <Button
              type="button"
              title="My Rides"
              variant="btn_dark_green"
              className="block px-4 py-1.5 text-sm"
              onClick={handleRedirect}
            />
            <Button
              type="button"
              title="Logout"
              variant="btn_dark_green"
              className="block px-4 py-1.5 text-sm"
              onClick={handleLogout}
            />
            <Image
              src="/profile.png.png"
              alt="User Profile"
              width={32}
              height={32}
              className="inline-block cursor-pointer"
              style={{ filter: "invert(0)", color: "black" }} 
            />
          </>
        ) : (
          <Button
            type="button"
            title="Login / Signup"
            icon="/user.svg"
            variant="btn_dark_green"
            className="block px-2 py-1.5 text-sm"
            onClick={openModal}
          />
        )}
      </div>

      <Image
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />

      {/* Include the modal component */}
      <LoginSignup isOpen={isModalOpen} onClose={closeModal} onSuccess={handleLoginSignupSuccess} />
    </nav>
  );
};

export default Navbar;
