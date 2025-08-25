import React, { useRef, useEffect } from "react";
import Header from "../components/Header";

const componentsData = [
  {
    component: "Pressurized Module",
    country: "USA",
    description:
      "This module provides a controlled environment for astronauts to live and work in space.",
  },
  {
    component: "Service Module",
    country: "Russia",
    description:
      "The service module houses propulsion, power supply, and life-support systems essential for operations.",
  },
  {
    component: "Solar Arrays",
    country: "Europe",
    description:
      "Large solar panels that collect solar energy to power the space station.",
  },
  {
    component: "Robotic Arm",
    country: "Canada",
    description:
      "A robotic arm used for cargo handling, repairs, and assisting astronauts during spacewalks.",
  },
  {
    component: "Truss Structure",
    country: "USA",
    description:
      "The backbone structure supporting solar arrays, radiators, and other external equipment.",
  },
  {
    component: "Docking Ports",
    country: "Russia",
    description:
      "Ports that allow spacecraft to dock with the station for crew transfer and resupply.",
  },
  {
    component: "Habitation Module",
    country: "Japan",
    description:
      "Provides additional living space and research laboratories for astronauts.",
  },
  {
    component: "Columbus Laboratory",
    country: "Europe",
    description:
      "European science lab module conducting experiments in microgravity.",
  },
  {
    component: "Node 2",
    country: "USA",
    description:
      "Connects multiple modules and contains life support systems and crew quarters.",
  },
];

const ModelPage = () => {
  const scrollRef = useRef(null);

  const scrollBy = (distance) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: distance,
        behavior: "smooth",
      });
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") scrollBy(-300);
      if (e.key === "ArrowRight") scrollBy(300);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-8 font-sans">
        <Header/>
      {/* Hero Section */}
      <div className="text-center mb-12 pt-10">
        <h1
          className="text-4xl font-extrabold"
          style={{ color: "rgb(0 255 255)" }}
        >
          Explore the International Space Station
        </h1>
        <p className="text-gray-300 mt-2 max-w-2xl mx-auto">
          Discover its modules, systems, and international contributions.
        </p>
      </div>

      {/* 3D Model Embed */}
      <div className="max-w-4xl mx-auto">
        <div className="relative" style={{ paddingTop: "56.25%" }}>
          <iframe
            title="ISS"
            src="https://sketchfab.com/models/813f5b296e584c26bf386ca39de6c3d4/embed?autostart=1&ui_theme=dark"
            allow="autoplay; fullscreen; xr-spatial-tracking"
            allowFullScreen
            loading="lazy"
            className="absolute top-0 left-0 w-full h-full rounded-lg border border-gray-700 shadow-lg"
          ></iframe>
        </div>
      </div>

      {/* Attribution */}
      <p className="text-sm text-gray-400 mt-6 text-center max-w-3xl mx-auto">
        <a
          href="https://sketchfab.com/3d-models/iss-813f5b296e584c26bf386ca39de6c3d4"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-blue-400 hover:underline"
          
        >
          ISS
        </a>{" "}
        model by{" "}
        <a
          href="https://sketchfab.com/uperesito"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-blue-400 hover:underline"
        >
          uperesito
        </a>{" "}
        on{" "}
        <a
          href="https://sketchfab.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-blue-400 hover:underline"
        >
          Sketchfab
        </a>
      </p>

      {/* Components Section */}
      <section className="max-w-6xl mx-auto mt-16 relative">
        <h2
          className="text-2xl font-bold mb-6 border-b border-gray-700 pb-2"
          
        >
          Components Details
        </h2>

        {/* Left Arrow */}
        <button
          aria-label="Scroll Left"
          onClick={() => scrollBy(-300)}
          className="hidden md:flex items-center justify-center absolute top-1/2 left-[-20px] -translate-y-1/2 bg-gray-800 bg-opacity-60 hover:bg-opacity-90 text-white rounded-full w-9 h-9 z-10 transition"
        >
          ←
        </button>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto pb-4 pl-10 pr-10 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900"
        >
          {componentsData.map(({ component, country, description }) => (
            <div
              key={component}
              className="flex-shrink-0 w-72 bg-gray-900 rounded-4xl p-6 shadow-md border border-gray-700 snap-center 
                         hover:scale-100 hover:border-cyan-400 transition-transform duration-300"
            >
              <h3
                className="text-lg font-semibold text-blue-400"
                
              >
                {component}
              </h3>
              <p className="text-gray-200 mt-1 mb-2">
                <span className="font-medium">Built by:</span> {country}
              </p>
              <p className="text-gray-400 text-sm">{description}</p>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          aria-label="Scroll Right"
          onClick={() => scrollBy(300)}
          className="hidden md:flex items-center justify-center absolute top-1/2 right-[-20px] -translate-y-1/2 bg-gray-800 bg-opacity-60 hover:bg-opacity-90 text-white rounded-full w-9 h-9 z-10 transition"
        >
          →
        </button>
      </section>
    </div>
  );
};

export default ModelPage;
