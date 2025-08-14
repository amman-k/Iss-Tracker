import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header.jsx";

function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      <Header />
      <main className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
            The{" "}
            <span className="text-blue-400">International Space Station</span>
          </h1>

          <img
            src="https://images-assets.nasa.gov/image/9802667/9802667~orig.jpg"
            alt="The ISS silhouetted against a solar eclipse"
            className="rounded-lg shadow-2xl mb-12 w-full"
          />

          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              The International Space Station (ISS) is one of the most ambitious
              and successful scientific and engineering projects ever
              undertaken. It serves as a permanently crewed laboratory in low
              Earth orbit, about 400 kilometers (250 miles) above the Earth. The
              ISS travels at an incredible speed of approximately 28,000
              kilometers per hour (17,500 mph), completing an orbit around the
              Earth every 90 minutes.
            </p>
            <p>
              Construction of the ISS began in 1998, starting with the launch of
              the Russian Zarya module. Since then, it has been expanded with
              components contributed by five main space agencies: NASA (USA),
              Roscosmos (Russia), ESA (European Space Agency), JAXA (Japan), and
              CSA (Canada). The station was assembled piece by piece in orbit
              and has been continuously inhabited since November 2000,
              symbolizing unprecedented international cooperation.
            </p>
          </div>

          <img
            src="https://www.nasa.gov/wp-content/uploads/2023/10/51891661735-cbeca97c4d-o.jpg?resize=1024,683"
            alt="An early construction phase of the ISS with the Space Shuttle docked"
            className="rounded-lg shadow-2xl my-12 w-full"
          />

          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              The ISS is the size of a football field, with large solar arrays
              that generate up to 120 kilowatts of power. It houses multiple
              laboratory modules such as NASA’s Destiny, ESA’s Columbus, JAXA’s
              Kibo, and Russia’s Zvezda, where astronauts conduct groundbreaking
              research in microgravity. These experiments help scientists
              understand human health, materials science, biology, physics, and
              even how to support life on future missions to the Moon and Mars.
            </p>
            <p>
              Up to seven astronauts live aboard the ISS at any given time,
              typically staying for six months. The station features sleeping
              quarters, exercise equipment, a kitchen, and toilets—all adapted
              for zero gravity.
            </p>
          </div>

          <img
            src="https://www.nasa.gov/wp-content/uploads/2023/02/51814546773-87375876c8-k.jpg"
            alt="View of Earth from the ISS Cupola observatory module"
            className="rounded-lg shadow-2xl my-12 w-full"
          />

          <div className="bg-gray-800 rounded-4xl p-8 my-12">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Fun Facts
            </h2>
            <ul className="list-none space-y-4 text-lg">
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">★</span>The ISS is the
                third brightest object in the night sky and can often be spotted
                from Earth with the naked eye.
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">★</span>Over 260 astronauts
                from more than 20 countries have visited.
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">★</span>It has traveled
                over 4 billion kilometers since launch.
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-3">★</span>Meals are specially
                prepared, and condiments like mustard and ketchup are stored in
                squeeze tubes to work in zero gravity.
              </li>
            </ul>
          </div>

          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              The ISS is expected to remain operational until at least 2030.
              After that, new space habitats—possibly commercial or part of
              NASA’s Artemis program—may continue the legacy of international
              space collaboration and scientific discovery.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AboutPage;
