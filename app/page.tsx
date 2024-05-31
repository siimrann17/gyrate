import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import Range from "@/components/Range"
import Feedback from "@/components/Feedback"

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Camp /> */}
      <Guide />
      <Range/>
      <Features />
      <Feedback/>
      {/* <GetApp /> */}
    </>
  );
}
