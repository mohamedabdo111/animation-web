// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button } from "./components/ui/button";
import SplashCursor from "./components/SplashCursor";
import HeroSection from "./components/features/home/heroSection";
import ScreenDashboard from "./components/features/home/screenDashboard";
export default function App() {
  return (
    <div>
      <SplashCursor />
      <HeroSection />
      <ScreenDashboard />
      <Button>Default</Button>
    </div>
  );
}
