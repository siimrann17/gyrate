import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import Range from "@/components/Range"
import Feedback from "@/components/Feedback"
import Guide2 from "@/components/Guide2"
import Navbar from "@/components/Navbar"
import Guide3 from "@/components/Guide3"
import ScooterPopup from "@/components/ScooterPopup";
import Chatbot from "@/components/Chatbot";



export default function Home() {
  return (
    <>
   
      <Hero />
      {/* <Camp /> */} 
      <Chatbot />
      <Range/>
       <Features />
      {/* <Guide />
     <Guide2 /> */}
     <Guide3 />
     {/* <AboutUs /> */}
      <Feedback/>
      {/* <GetApp /> */}
    </>
  );
}
