// import BlurText from "@/components/BlurText";
import ScrollFloat from "@/components/ScrollFloat";

export default function FacilityManagment() {
  // const handleAnimationComplete = () => {
  //   console.log("Animation complete");
  // };
  return (
    <div className="max-w-7xl mx-auto py-10 flex justify-center items-center flex-col">
      {/* <BlurText
        text="The current state of Facility Management"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-4xl font-bold text-center mx-auto text-gray-900 sm:text-5xl dark:text-white"
      /> */}
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
        textClassName="text-xl font-bold text-center mx-auto text-gray-900 sm:text-xl dark:text-white"
      >
        The current state of Facility Management
      </ScrollFloat>
      <div className="h-[100vh]"></div>
    </div>
  );
}
