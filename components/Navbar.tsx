import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useRouter } from 'next/router';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center max-w-7xl mx-auto px-4 py-5">
      <Link href="/">
        <Image src="/gyrateLogo.jpeg" alt="logo" width={74} height={29} className="rounded-full" />
      </Link>

      <ul className="hidden lg:flex gap-12">
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <Link href={link.href} className="text-gray-50 cursor-pointer transition-all hover:font-bold">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="lg:flex">
       <Button
        type="button"
        title="Login / Signup"
        icon="/user.svg"
        variant="btn_dark_green"
        className="block px-6 py-3 text-sm"
        />
        </div>

      <Image
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;

// components/Navbar.js
// components/Navbar.js
// import { NAV_LINKS } from '@/constants';
// import Image from 'next/image';
// import Link from 'next/link';
// import Button from './Button';

// const Navbar = () => {
//   return (
//     <nav className="flex justify-between items-center max-w-7xl mx-auto px-4 py-5">
//       <Link href="/" legacyBehavior>
//         <a>
//           <Image src="/gyrateLogo.jpeg" alt="logo" width={74} height={29} className="rounded-full" />
//         </a>
//       </Link>

//       <ul className="hidden lg:flex gap-12">
//         {NAV_LINKS.map((link) => (
//           <li key={link.key}>
//             <Link href={link.href} legacyBehavior>
//               <a className="text-gray-700 cursor-pointer transition-all hover:font-bold">
//                 {link.label}
//               </a>
//             </Link>
//           </li>
//         ))}
//       </ul>

//       <div className="lg:flex">
//         <Button
//           type="button"
//           title="Login / Signup"
//           icon="/user.svg"
//           variant="btn_dark_green"
//           className="block"
//         />
//       </div>

//       <Image
//         src="/menu.svg"
//         alt="menu"
//         width={32}
//         height={32}
//         className="inline-block cursor-pointer lg:hidden"
//       />
//     </nav>
//   );
// };

// export default Navbar;
