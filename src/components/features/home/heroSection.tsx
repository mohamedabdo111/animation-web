import DotGrid from "@/components/DotGrid";
import StarBorder from "@/components/StarBorder";
import TextType from "@/components/TextType";

export default function HeroSection() {
  return (
    <div style={{ width: "100%", height: "600px", position: "relative" }}>
      <DotGrid
        dotSize={10}
        gap={15}
        baseColor="#5227FF"
        activeColor="#5227FF"
        proximity={120}
        shockRadius={250}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
      />
      <section
        className="bg-white  absolute lg:grid lg:h-screen lg:place-content-center"
        style={{ width: "100%", height: "600px", position: "relative" }}
      >
        <div className="mx-auto w-screen max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
          <div className="mx-auto  text-center">
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

            <p className="mt-4 text-base text-pretty text-gray-700 sm:text-lg/relaxed">
              Sanad manages everything through WhatsApp and syncs it directly
              with your dashboard — effortlessly and intelligently.
            </p>

            <div className="mt-4 flex justify-center gap-4 sm:mt-6">
              <StarBorder>
                <a
                  className="block h-full"
                  href="https://meetings-eu1.hubspot.com/yalrashod"
                  target="_blank"
                >
                  Request a Demo
                </a>
              </StarBorder>

              <StarBorder className="inline-block rounded border border-gray-200 bg-white px-5 py-3 font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900">
                <a href="#">Learn More</a>
              </StarBorder>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
