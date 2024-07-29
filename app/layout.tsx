
// import type { Metadata } from "next";
// import { NAV_LINKS } from "@/constants";
// import "./globals.css";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";


// export const metadata: Metadata = {
  
//   title: "Gyrate",
//   description: "Scooter Rental Services Application",
// };

// export default function RootLayout({
  
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body>
//         <Navbar />
//         <main className="relative overflow-hidden">{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }


// This file is used for the root layout of the application and is a server component by default
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import Provider from "./Provider";


// Metadata definition for the application
export const metadata: Metadata = {
  title: "Gyrate",
  description: "Scooter Rental Services Application",
};

// Define the main RootLayout component
export default function RootLayout({ children}: { children: React.ReactNode,  }) {
  return (
    <html lang="en">
      <body>
        <Provider>
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
        </Provider>
      </body>
    </html>
  );
}


