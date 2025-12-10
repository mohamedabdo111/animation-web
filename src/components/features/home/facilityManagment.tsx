
import AbsenceImage from "@/assets/currentState/records.png"
import Disconnected from "@/assets/currentState/channels.png"
import Warn from "@/assets/currentState/warn.png"
import CustomCard from "@/components/ui/customCard";
import BlurText from "@/components/BlurText";
const facilityManagmentData = [
  {
    title: "Absence of records",
    description: "This can result in recurring errors in maintenance activities, as teams lack access to historical data on previous repairs and performance.",
    src: AbsenceImage
  },
  {
    title: "Disconnected reporting channels",
    description: "Leading to delays and misunderstandings.",
    src: Disconnected
  },
  {
    title: "High downtime",
    description: "it can significantly impact productivity, leading to delays in operations and increased costs",
    src: Warn
  },
]


export default function FacilityManagment() {



  return (
    <div className="max-w-7xl mx-auto pb-10 px-4">

      <BlurText
        text="The current state of Facility Management"
        delay={150}
        animateBy="words"
        direction="top"
        className="text-4xl font-bold text-gray-900 sm:text-4xl dark:text-white text-center m-auto w-fit mb-10"
      />


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {
          facilityManagmentData.map((item, index) => (
            <CustomCard
              key={index}
              title={item.title}
              description={item.description}
              src={item.src}
            />
          ))
        }
      </div>

    </div>
  );
}