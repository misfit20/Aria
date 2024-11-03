import Image from "next/image";
import Hero from "../components/ui/hero";
import OurInfo from "@/components/information";
import LatestSection from "@/components/LatestSection";
import { Features } from "@/components/Features";

export default function Home() {
  return (
    <div>
      <main>
        
        {/*Page components*/}
        <Hero/>
        <OurInfo/>
        <Features/>

      </main>
    </div>
  );
}
