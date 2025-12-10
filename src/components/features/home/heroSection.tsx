// import DotGrid from "@/components/DotGrid";
// import Prism from "@/components/Prism";
import Header from "@/components/layout/header/Navbar";
import TextType from "@/components/TextType";
import Threads from "@/components/Threads";

export default function HeroSection() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Layer */}
      <Header />
      <div className="absolute inset-0 -z-10">
        {/* <Prism
          animationType="rotate"
          timeScale={0.5}
          height={3.5}
          baseWidth={5.5}
          scale={3.6}
          hueShift={0}
          colorFrequency={1}
          noise={0.5}
          glow={1}
        /> */}
        <Threads
          amplitude={1}
          distance={0}
          enableMouseInteraction={true}
        />
      </div>

      {/* Content Layer */}
      <section className="relative z-10 grid min-h-screen place-content-center">
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
              Meet {" "}
              <span className="  font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-yellow-400 bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-blue-500 dark:via-purple-400 dark:to-yellow-300">
                Sanad
              </span>{" "}
              Your AI Agent for
            </h1>
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl dark:text-white">
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

            <p className="mt-4 text-base text-pretty text-gray-800 sm:text-lg/relaxed dark:text-white">
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
