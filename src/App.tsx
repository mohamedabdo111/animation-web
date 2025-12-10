// eslint-disable-next-line @typescript-eslint/no-unused-vars
import CurvedLoop from "./components/CurvedLoop";
import SplashCursor from "./components/SplashCursor";
import FacilityManagment from "./components/features/home/facilityManagment";
import HeroSection from "./components/features/home/heroSection";
import ScreenDashboard from "./components/features/home/screenDashboard";
import Footer from "./components/layout/footer/footer";
// import WithMrfq from "./components/features/home/withMrfq";
export default function App() {
  return (
    <div className="h-screen">
      <SplashCursor />
      <HeroSection />

      <ScreenDashboard />

      <FacilityManagment />
      <CurvedLoop
        marqueeText="Facility ✦ Maintenance ✦ Property ✦ Building ✦"
        speed={3}
        curveAmount={500}
        direction="right"
        interactive={true}
        className="custom-text-style text-black dark:text-white"
      />
      <Footer />
      {/* <WithMrfq /> */}
      {/* <HeroSection /> */}
    </div>
  );
}
