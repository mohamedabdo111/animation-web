// eslint-disable-next-line @typescript-eslint/no-unused-vars
import SplashCursor from "./components/SplashCursor";
import FacilityManagment from "./components/features/home/facilityManagment";
import HeroSection from "./components/features/home/heroSection";
import ScreenDashboard from "./components/features/home/screenDashboard";
// import WithMrfq from "./components/features/home/withMrfq";
export default function App() {
  return (
    <div className="h-screen">
      <SplashCursor />
      <HeroSection />
      <ScreenDashboard />
      <FacilityManagment />
      {/* <WithMrfq /> */}
      {/* <HeroSection /> */}
    </div>
  );
}
