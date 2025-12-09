
import MRFQ_Dashboard from "@/assets/home/MRFQ_Dashboard.png"
import AnimatedContent from "@/components/AnimatedContent";

export default function ScreenDashboard() {
    return (

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

            <div className="flex justify-center  pt-10">
                <img src={MRFQ_Dashboard} className=" transition-all duration-500" alt="MRFQ Dashboard" /></div>


        </AnimatedContent>


    );
}