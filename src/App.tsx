// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { lazy } from "react";
import SplashCursor from "./components/SplashCursor";
import FacilityManagment from "./components/features/home/facilityManagment";
import HeroSection from "./components/features/home/heroSection";
import ScreenDashboard from "./components/features/home/screenDashboard";
import Footer from "./components/layout/footer/footer";
import WithMrfq from "./components/features/home/withMrfq";
// import WithMrfq from "./components/features/home/withMrfq";
import MrfqFirstImage from "@/assets/withMrfq/withMrfq_One.png";
import MrfqSecondImage from "@/assets/withMrfq/withMrfqTwo.png";
import MrfqThirdImage from "@/assets/withMrfq/mrfq_three.png";

const withMrfqData = [
  {
    title: "Report the problem easily",
    description:
      "Snap, report, fix. You can report a problem quickly and easily, whether you’re a visitor, an employee, or a member of the maintenance team.",
    src: MrfqFirstImage,
  },
  {
    title: "Centric platform",
    description:
      "User-centric approach. making it a seamless hub for all maintenance operations. With intuitive navigation, real-time data, and customizable dashboards.",
    src: MrfqSecondImage,
  },
  {
    title: "Less admin work",
    description:
      "Our AI-powered scheduling tool automatically generates optimal maintenance plans, saving you hours of manual work.",
    src: MrfqThirdImage,
  },
];

const CurvedLoop = lazy(() => import("./components/CurvedLoop"));
export default function App() {
  return (
    <div className="h-screen">
      <SplashCursor />
      <HeroSection />

      <ScreenDashboard />

      <FacilityManagment />
      <WithMrfq dataArray={withMrfqData} />
      <CurvedLoop
        marqueeText="Facility ✦ Maintenance ✦ Property ✦ Building ✦"
        speed={3}
        curveAmount={500}
        direction="right"
        interactive={true}
        className="custom-text-style text-black dark:text-white"
      />
      <Footer />
      {/* <HeroSection /> */}
    </div>
  );
}
