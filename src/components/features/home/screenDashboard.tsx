import MRFQ_Dashboard from "@/assets/home/MRFQ_Dashboard.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function ScreenDashboard() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="pb-10 grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto px-4  justify-center items-center ">
      <img src={MRFQ_Dashboard} alt="MRFQ Dashboard" data-aos="fade-up" />
      <div data-aos="fade-down" className="mt-4">
        <h2 className="text-2xl font-bold">MRFQ Dashboard</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          The MRFQ Dashboard is a powerful tool that helps facility managers and
          maintenance professionals to manage their maintenance requests and
          tasks more efficiently.
        </p>
      </div>
    </div>
  );
}
