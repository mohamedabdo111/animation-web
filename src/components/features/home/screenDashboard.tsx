import MRFQ_Dashboard from "@/assets/home/MRFQ_Dashboard.png";
import AnimatedContent from "@/components/AnimatedContent";

export default function ScreenDashboard() {
  return (
    <div className="py-16 px-4 flex justify-center items-center ">
      <AnimatedContent
        distance={150}
        direction="horizontal"
        reverse={false}
        duration={1.2}
        ease="bounce.out"
        initialOpacity={0.2}
        animateOpacity
        scale={1.1}
        threshold={0.2}
        delay={0.3}
      >
        <img
          src={MRFQ_Dashboard}
          alt="MRFQ Dashboard"
          className="hover:scale-110 duration-500"
        />
      </AnimatedContent>
    </div>
  );
}
