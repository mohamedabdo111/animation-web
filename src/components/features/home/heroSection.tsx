// import DotGrid from "@/components/DotGrid";
// import Prism from "@/components/Prism";
import Prism from "@/components/Prism";
import StarBorder from "@/components/StarBorder";
import TextType from "@/components/TextType";

export default function HeroSection() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 -z-10">
        <Prism
          animationType="rotate"
          timeScale={0.5}
          height={3.5}
          baseWidth={5.5}
          scale={3.6}
          hueShift={0}
          colorFrequency={1}
          noise={0.5}
          glow={1}
        />
      </div>

      {/* Content Layer */}
      <section className="relative z-10 grid min-h-screen place-content-center">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Meet Sanad Your AI Agent for
            </h1>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              <TextType
                text={[
                  "Facility Management",
                  "Maintenance Management",
                  "Property Management",
                  "Building Management",
                ]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
              />
            </h1>

            <p className="mt-4 text-base text-pretty text-gray-800 sm:text-lg/relaxed">
              Sanad manages everything through WhatsApp and syncs it directly
              with your dashboard — effortlessly and intelligently.
            </p>

            <div className="mt-4 flex justify-center gap-4 sm:mt-6">
              <a
                className="block h-full rounded-full bg-gray-800 px-5 py-2 font-medium text-white shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
                href="https://meetings-eu1.hubspot.com/yalrashod"
                target="_blank"
              >
                Request a Demo
              </a>

              <a href="#" className="block h-full rounded-full bg-gray-800 px-5 py-2 font-medium text-white shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900">Learn More</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
