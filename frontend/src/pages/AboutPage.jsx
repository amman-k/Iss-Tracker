import React from "react";
import Header from "../components/Header.jsx";

function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Header />
      <main className="container mx-auto px-4 py-24 md:py-32">
        {/* Hero Section */}
        <section className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            International Space Station
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto">
            A beacon of collaboration and scientific discovery, orbiting our
            planet at 17,500 mph.
          </p>
        </section>

        {/* Hero Image */}
        <section className="mb-24">
          <img
            src="https://www.nasa.gov/wp-content/uploads/2025/08/iss073e0420899orig.jpg"
            alt="The International Space Station"
            className="rounded-2xl shadow-2xl w-full"
          />
        </section>

        {/* Introduction Section */}
        <section className="max-w-4xl mx-auto mb-24">
          <h2 className="text-4xl font-bold text-center mb-8 text-[#03FFFF]">
            Our Outpost in Orbit
          </h2>
          <div className="text-lg text-gray-300 leading-relaxed space-y-6">
            <p>
              The International Space Station (ISS) is the largest and most
              complex international scientific project in history. In low Earth
              orbit, it serves as a home to astronauts and a cutting-edge
              laboratory for research that drives new discoveries and benefits
              humanity. The station has been continuously inhabited since
              November 2000, a testament to what we can achieve when we work
              together.
            </p>
            <p>
              Traveling at a speed of 28,000 kilometers per hour (17,500 mph),
              the ISS completes an orbit of Earth every 90 minutes. This means
              the crew onboard experiences 16 sunrises and sunsets every day.
            </p>
          </div>
        </section>

        {/* Key Modules Section */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#03FFFF]">
            Key Modules
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">Destiny</h3>
              <p className="text-gray-400">
                NASA's primary research laboratory, supporting a wide range of
                experiments.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">Columbus</h3>
              <p className="text-gray-400">
                The European Space Agency's multifunctional laboratory,
                focused on life sciences and fluid physics.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">Kibo</h3>
              <p className="text-gray-400">
                Japan's largest contribution, featuring a pressurized module
                and an exposed facility for experiments in space.
              </p>
            </div>
          </div>
        </section>

        {/* Life in Orbit Section */}
        <section className="flex flex-col md:flex-row items-center mb-24 bg-gray-900 rounded-2xl p-8">
          <div className="md:w-1/2 md:pr-8">
            <h2 className="text-4xl font-bold mb-4 text-[#03FFFF]">
              Life in Orbit
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Living and working in microgravity presents unique challenges and
              experiences. Astronauts spend their days conducting experiments,
              maintaining the station, and exercising to counteract the
              effects of weightlessness on their bodies. They also have some
              downtime to read, watch movies, and gaze at the breathtaking
              views of Earth from the Cupola observatory module.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img
              src="https://www.nasa.gov/wp-content/uploads/2023/02/51814546773-87375876c8-k.jpg"
              alt="View of Earth from the ISS Cupola"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Scientific Discoveries Section */}
        <section className="max-w-4xl mx-auto mb-24">
          <h2 className="text-4xl font-bold text-center mb-8 text-[#03FFFF]">
            A Laboratory in Space
          </h2>
          <div className="text-lg text-gray-300 leading-relaxed space-y-6">
            <p>
              The ISS is a world-class laboratory for research in biology,
              physics, astronomy, and meteorology. The unique microgravity
              environment allows scientists to study phenomena in ways not
              possible on Earth. Research on the ISS has led to advancements
              in medicine, materials science, and our understanding of the
              universe.
            </p>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#03FFFF]">
            Views from the Station
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <img
              src="https://www.nasa.gov/wp-content/uploads/2025/07/iss073e0247726orig.jpg"
              alt="Aurora australis from the ISS"
              className="rounded-lg shadow-lg"
            />
            <img
              src="https://www.nasa.gov/wp-content/uploads/2025/06/iss067e035826orig.jpg"
              alt="The waning crescent moon from the ISS"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Fun Facts Section */}
        <section className="bg-gray-900 rounded-2xl p-8">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">
            Fun Facts
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-lg">
            <div className="flex items-start">
              <span className="text-[#03FFFF] mr-4 text-2xl">★</span>
              <p>
                The ISS is the third brightest object in the night sky and can
                be seen from Earth with the naked eye.
              </p>
            </div>
            <div className="flex items-start">
              <span className="text-[#03FFFF] mr-4 text-2xl">★</span>
              <p>Over 260 astronauts from more than 20 countries have visited.</p>
            </div>
            <div className="flex items-start">
              <span className="text-[#03FFFF] mr-4 text-2xl">★</span>
              <p>
                The station has more than 100 miles of wiring, connecting the
                electrical power system.
              </p>
            </div>
            <div className="flex items-start">
              <span className="text-[#03FFFF] mr-4 text-2xl">★</span>
              <p>
                The ISS has its own miniature water recycling system, turning
                wastewater into drinkable water.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default AboutPage;
