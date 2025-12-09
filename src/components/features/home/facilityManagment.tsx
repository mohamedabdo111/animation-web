import SplitText from "@/components/SplitText";


export default function FacilityManagment() {

    return (
        <div className="max-w-7xl mx-auto py-10">

            <h1 className="text-4xl font-bold text-center text-gray-900 sm:text-5xl dark:text-white dark:text-white">

                <SplitText
                    text="The current state of Facility Management"
                    className="text-2xl font-semibold text-black text-center"
                    delay={100}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                />
            </h1>

        </div>
    );
}