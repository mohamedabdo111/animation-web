import { Button } from "./components/ui/button";
import SplashCursor from "./components/SplashCursor";
import LaserFlow from "./components/LaserFlow";
import { useRef } from "react";
import image from "@/assets/dash-m-rRqOPf.png";
import HeroSection from "./components/features/home/heroSection";

export default function App() {
  const revealImgRef = useRef<HTMLImageElement>(null);
  return (
    <div>
      <SplashCursor />
      <HeroSection />

      <Button>Default</Button>
    </div>
  );
}
